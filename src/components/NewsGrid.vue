<template>
  <div class="w-full">
    <div v-if="loading" class="text-white/60 text-center py-4">
      <i class="fas fa-spinner fa-spin text-lg"></i>
    </div>

    <div v-else-if="!hasApiConfig" class="text-white/50 text-center py-3 text-sm">
      <i class="fas fa-cog mr-2"></i>
      <span>{{ $t('news.configure') }}</span>
    </div>

    <div v-else-if="articles.length === 0" class="text-white/50 text-center py-3 text-sm">
      <i class="fas fa-newspaper mr-2"></i>
      <span>{{ $t('news.noArticles') }}</span>
    </div>

    <div v-else class="relative">
      <div v-if="offline" class="absolute top-0 left-0 right-0 text-center py-1 bg-yellow-500/80 backdrop-blur-md rounded-t-xl text-black text-xs font-medium">
        <i class="fas fa-wifi-slash mr-1"></i>
        {{ $t('news.cached') }}
      </div>

      <div 
        class="news-grid-wrapper"
        :class="{ 'mt-6': offline }"
      >
        <div class="news-grid">
        <a
          v-for="article in displayedArticles"
          :key="article.id"
          :href="article.url"
          target="_blank"
          class="bg-gradient-to-br from-black/50 to-black/35 backdrop-blur-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-all shadow-lg group article-card"
        >
          <div class="aspect-[16/9] bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
            <img
              v-if="(article.cachedImage || article.image) && !article.imageError"
              :src="article.cachedImage || article.image"
              :alt="article.title"
              class="w-full h-full object-cover"
              @error="article.imageError = true"
            >
            <div v-else class="w-full h-full flex items-center justify-center text-white/60 text-lg">
              <i class="fas fa-newspaper"></i>
            </div>
          </div>

          <div class="p-2">
            <h3 class="text-xs font-medium text-white line-clamp-2 group-hover:text-white/80 transition-colors leading-tight">
              {{ article.title }}
            </h3>
            <div class="flex items-center justify-between text-[10px] text-white/60 mt-1">
              <span class="truncate">{{ article.source }}</span>
              <span class="flex-shrink-0 ml-1">{{ formatTime(article.timestamp) }}</span>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const CACHE_DURATION = 600000;
const DB_NAME = 'NewsCache';
const DB_VERSION = 1;
const STORE_NAME = 'articles';

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
};

const saveToIndexedDB = async (key, value) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(value, key);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

const getFromIndexedDB = async (key) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const imageToBase64 = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.startsWith('image/')) return null;
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
};

export default {
  name: 'NewsGrid',
  props: {
    settings: {
      type: Object,
      required: true
    },
    forceRefresh: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const { t } = useI18n();
    const articles = ref([]);
    const loading = ref(true);
    const offline = ref(false);
    const hasApiConfig = ref(false);

    const displayedArticles = computed(() => articles.value.slice(0, 8));

    const formatTime = (timestamp) => {
      const now = Date.now() / 1000;
      const diff = now - timestamp;
      
      if (diff < 3600) return t('time.minutesAgo', { n: Math.floor(diff / 60) });
      if (diff < 86400) return t('time.hoursAgo', { n: Math.floor(diff / 3600) });
      return t('time.daysAgo', { n: Math.floor(diff / 86400) });
    };

    const getAuthToken = async (baseUrl, username, password) => {
      const loginUrl = `${baseUrl}/accounts/ClientLogin`;
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `Email=${encodeURIComponent(username)}&Passwd=${encodeURIComponent(password)}`
      });
      if (!response.ok) throw new Error('Authentication failed');
      const text = await response.text();
      const authMatch = text.match(/Auth=(.+)/);
      if (!authMatch) throw new Error('No auth token in response');
      return authMatch[1].trim();
    };

    const isCacheValid = async () => {
      try {
        const timestamp = await getFromIndexedDB('newsTimestamp');
        if (!timestamp) return false;
        return Date.now() - timestamp < CACHE_DURATION;
      } catch {
        return false;
      }
    };

    const fetchSimpleRss = async () => {
      const response = await fetch(props.settings.newsRssUrl, { cache: 'no-cache' });
      if (!response.ok) throw new Error('RSS fetch failed');
      
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'application/xml');
      
      const isAtom = doc.querySelector('feed');
      const items = isAtom 
        ? Array.from(doc.querySelectorAll('entry'))
        : Array.from(doc.querySelectorAll('item'));
      
      return items.slice(0, 8).map((item, index) => {
        if (isAtom) {
          const linkEl = item.querySelector('link[rel="alternate"]') || item.querySelector('link');
          const contentEl = item.querySelector('content') || item.querySelector('summary');
          const contentHtml = contentEl?.textContent || '';
          return {
            id: item.querySelector('id')?.textContent || `rss-${index}`,
            title: item.querySelector('title')?.textContent || 'No title',
            url: linkEl?.getAttribute('href') || '',
            source: doc.querySelector('feed > title')?.textContent || 'RSS Feed',
            timestamp: Math.floor(new Date(item.querySelector('updated')?.textContent || item.querySelector('published')?.textContent || Date.now()).getTime() / 1000),
            image: extractImageFromContent(contentHtml)
          };
        } else {
          return {
            id: item.querySelector('guid')?.textContent || item.querySelector('link')?.textContent || `rss-${index}`,
            title: item.querySelector('title')?.textContent || 'No title',
            url: item.querySelector('link')?.textContent || '',
            source: doc.querySelector('channel > title')?.textContent || 'RSS Feed',
            timestamp: Math.floor(new Date(item.querySelector('pubDate')?.textContent || Date.now()).getTime() / 1000),
            image: extractImageFromRssItem(item)
          };
        }
      });
    };

    const extractImageFromContent = (content) => {
      const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
      if (imgMatch) {
        let url = imgMatch[1];
        if (url.startsWith('//')) {
          url = 'https:' + url;
        }
        return url;
      }
      return null;
    };

    const extractImageFromRssItem = (item) => {
      const enclosure = item.querySelector('enclosure[type^="image"]');
      if (enclosure) return enclosure.getAttribute('url');
      
      const mediaContent = item.querySelector('content[url]');
      if (mediaContent) return mediaContent.getAttribute('url');
      
      const description = item.querySelector('description')?.textContent || '';
      return extractImageFromContent(description);
    };

    const fetchGoogleReader = async () => {
      const baseUrl = props.settings.newsApiUrl.replace(/\/+$/, '');
      const authToken = await getAuthToken(baseUrl, props.settings.newsUsername, props.settings.newsPassword);
      
      const response = await fetch(`${baseUrl}/reader/api/0/stream/contents`, {
        headers: { 'Authorization': `GoogleLogin auth=${authToken}` },
        cache: 'no-cache'
      });

      if (!response.ok) throw new Error('News fetch failed');

      const data = await response.json();
      return data.items.slice(0, 8).map(item => ({
        id: item.id,
        title: item.title,
        url: item.canonical ? item.canonical[0].href : item.alternate[0].href,
        source: item.origin ? item.origin.title : 'Unknown',
        timestamp: item.published || item.updated,
        image: extractImage(item)
      }));
    };

    const fetchNews = async (forceRefresh = false) => {
      const feedType = props.settings.newsFeedType || 'simpleRss';
      
      const hasConfig = feedType === 'simpleRss' 
        ? !!props.settings.newsRssUrl
        : (props.settings.newsApiUrl && props.settings.newsUsername && props.settings.newsPassword);
      
      if (!hasConfig) {
        hasApiConfig.value = false;
        loadCachedNews();
        return;
      }

      hasApiConfig.value = true;

      if (!forceRefresh && await isCacheValid() && articles.value.length > 0) {
        return;
      }

      if (articles.value.length === 0) {
        loading.value = true;
      }

      try {
        const newsArticles = feedType === 'simpleRss' 
          ? await fetchSimpleRss()
          : await fetchGoogleReader();

        articles.value = newsArticles;
        
        const articlesWithCachedImages = await Promise.all(
          newsArticles.map(async (article) => ({
            ...article,
            cachedImage: article.image ? await imageToBase64(article.image) : null
          }))
        );
        
        try {
          await saveToIndexedDB('cachedNews', articlesWithCachedImages);
          await saveToIndexedDB('newsTimestamp', Date.now());
        } catch (storageError) {
          console.error('Storage error:', storageError);
        }
        
        articles.value = articlesWithCachedImages;
        offline.value = false;
      } catch (error) {
        console.error('News error:', error);
        offline.value = true;
      } finally {
        loading.value = false;
      }
    };

    const extractImage = (item) => {
      if (item.visual && item.visual.url) return item.visual.url;
      
      if (item.summary && item.summary.content) {
        const imgMatch = item.summary.content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) return imgMatch[1];
      }
      
      return null;
    };

    const loadCachedNews = async () => {
      try {
        const cached = await getFromIndexedDB('cachedNews');
        if (cached) {
          articles.value = cached;
          hasApiConfig.value = true;
        }
      } catch (error) {
        console.error('Cache load error:', error);
      } finally {
        loading.value = false;
      }
    };

    watch(() => props.forceRefresh, (newVal) => {
      if (newVal > 0) {
        fetchNews(true);
      }
    });

    onMounted(async () => {
      await loadCachedNews();
      fetchNews();
    });

    return {
      articles,
      displayedArticles,
      loading,
      offline,
      hasApiConfig,
      formatTime
    };
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-grid-wrapper {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.news-grid-wrapper::-webkit-scrollbar {
  height: 6px;
}

.news-grid-wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.news-grid-wrapper::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.news-grid-wrapper::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.75rem;
  min-width: fit-content;
}

@media (max-width: 1280px) {
  .news-grid {
    grid-template-columns: repeat(8, minmax(140px, 1fr));
  }
}

@media (max-width: 1024px) {
  .news-grid {
    grid-template-columns: repeat(8, minmax(160px, 1fr));
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: repeat(8, minmax(180px, 1fr));
  }
}

@media (max-width: 640px) {
  .news-grid {
    grid-template-columns: repeat(8, minmax(160px, 1fr));
    gap: 0.5rem;
  }
  
  .article-card {
    border-radius: 1rem;
  }
  
  .article-card .p-2 {
    padding: 0.5rem;
  }
}
</style>
