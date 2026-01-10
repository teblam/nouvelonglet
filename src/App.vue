<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <BackgroundVideo 
      :blur="settings.blur"
      :background-type="settings.backgroundType"
      :solid-color="settings.solidColor"
      :gradient-color1="settings.gradientColor1"
      :gradient-color2="settings.gradientColor2"
      :gradient-angle="settings.gradientAngle"
      :picture-url="pictureData"
      :picture-blur="settings.pictureBlur"
      :picture-opacity="settings.pictureOpacity"
      :video-url="videoData"
      :thumbnail-url="thumbnailData"
      :opacity="settings.opacity"
    />
    
    <div class="relative z-10 w-full h-full">
      <div class="settings-button">
        <button 
          @click="showSettings = true"
          class="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/50 transition-all flex items-center justify-center text-white shadow-lg"
        >
          <i class="fas fa-cog text-xl"></i>
        </button>
      </div>

      <div class="widgets-container">
        <template v-for="widget in settings.widgetsOrder" :key="widget">
          <ClockWidget v-if="widget === 'clock' && settingsLoaded && settings.widgetClock" :clock-type="settings.clockType" :clock-format="settings.clockFormat" />
          <WeatherWidget v-if="widget === 'weather' && settingsLoaded && settings.widgetWeather" :settings="settings" />
        </template>
      </div>

      <div v-if="settingsLoaded && settings.searchEnabled" class="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-8 flex justify-center z-50">
        <SearchBar :settings="settings" />
      </div>

      <div v-if="settingsLoaded && settings.widgetNews" class="absolute bottom-0 left-0 right-0 pb-4 px-4">
        <NewsGrid :settings="settings" :force-refresh="newsRefreshTrigger" />
      </div>
    </div>

    <SettingsModal 
      v-if="showSettings" 
      :settings="settings"
      @close="showSettings = false"
      @update="updateSettings"
      @refresh-news="refreshNews"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import BackgroundVideo from './components/BackgroundVideo.vue';
import SearchBar from './components/SearchBar.vue';
import WeatherWidget from './components/WeatherWidget.vue';
import ClockWidget from './components/ClockWidget.vue';
import NewsGrid from './components/NewsGrid.vue';
import SettingsModal from './components/SettingsModal.vue';

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('newtab-storage', 2);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('videos')) {
        db.createObjectStore('videos', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('pictures')) {
        db.createObjectStore('pictures', { keyPath: 'id' });
      }
    };
  });
};

const saveVideo = async (blob, thumbnailBlob) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('videos', 'readwrite');
    const store = tx.objectStore('videos');
    store.put({ id: 'background', blob });
    if (thumbnailBlob) {
      store.put({ id: 'thumbnail', blob: thumbnailBlob });
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

const loadVideo = async () => {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction('videos', 'readonly');
    const store = tx.objectStore('videos');
    const videoRequest = store.get('background');
    const thumbRequest = store.get('thumbnail');
    
    tx.oncomplete = () => {
      const videoBlob = videoRequest.result?.blob;
      const thumbBlob = thumbRequest.result?.blob;
      resolve({
        videoUrl: videoBlob ? URL.createObjectURL(videoBlob) : '',
        thumbnailUrl: thumbBlob ? URL.createObjectURL(thumbBlob) : ''
      });
    };
    tx.onerror = () => resolve({ videoUrl: '', thumbnailUrl: '' });
  });
};

const savePicture = async (blob) => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('pictures', 'readwrite');
    const store = tx.objectStore('pictures');
    store.put({ id: 'background', blob });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

const loadPicture = async () => {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction('pictures', 'readonly');
    const store = tx.objectStore('pictures');
    const request = store.get('background');
    
    tx.oncomplete = () => {
      const blob = request.result?.blob;
      resolve(blob ? URL.createObjectURL(blob) : '');
    };
    tx.onerror = () => resolve('');
  });
};

export default {
  name: 'App',
  components: {
    BackgroundVideo,
    SearchBar,
    WeatherWidget,
    ClockWidget,
    NewsGrid,
    SettingsModal
  },
  setup() {
    const showSettings = ref(false);
    const videoData = ref('');
    const thumbnailData = ref('');
    const pictureData = ref('');
    const settingsLoaded = ref(false);
    const newsRefreshTrigger = ref(0);
    const settings = ref({
      blur: 10,
      backgroundType: 'color',
      solidColor: '#1e293b',
      gradientColor1: '#0f172a',
      gradientColor2: '#1e3a5f',
      gradientAngle: 135,
      pictureBlur: 0,
      pictureOpacity: 100,
      opacity: 100,
      newsFeedType: 'simpleRss',
      newsRssUrl: 'https://en.wikinews.org/w/index.php?title=Special:NewsFeed&feed=atom&categories=Published&notcategories=No%20publish|Archived|AutoArchived|disputed&namespace=0&count=14&hourcount=1200&ordermethod=categoryadd&stablepages=only',
      newsApiUrl: '',
      newsUsername: '',
      newsPassword: '',
      weatherMode: 'manual',
      weatherCity: 'Paris',
      weatherLat: 48.8566,
      weatherLon: 2.3522,
      widgetWeather: true,
      widgetClock: true,
      widgetNews: true,
      widgetsOrder: ['clock', 'weather'],
      clockType: 'digital',
      clockFormat: '24h',
      searchEnabled: true,
      searchEngines: ['google', 'duckduckgo', 'perplexity'],
      defaultSearchEngine: 'google'
    });

    const loadSettings = async () => {
      try {
        const [stored, videoResult, pictureResult] = await Promise.all([
          browser.storage.local.get('settings'),
          loadVideo(),
          loadPicture()
        ]);
        if (stored.settings) {
          settings.value = { ...settings.value, ...stored.settings };
        }
        videoData.value = videoResult.videoUrl;
        thumbnailData.value = videoResult.thumbnailUrl;
        pictureData.value = pictureResult;
        settingsLoaded.value = true;
      } catch (error) {
        console.error('Failed to load settings:', error);
        settingsLoaded.value = true;
      }
    };

    const updateSettings = async (newSettings) => {
      const { videoBlob, thumbnailBlob, pictureBlob, ...otherSettings } = newSettings;
      settings.value = { ...settings.value, ...otherSettings };
      try {
        await browser.storage.local.set({ settings: JSON.parse(JSON.stringify(settings.value)) });
        if (videoBlob) {
          await saveVideo(videoBlob, thumbnailBlob);
          videoData.value = URL.createObjectURL(videoBlob);
          if (thumbnailBlob) {
            thumbnailData.value = URL.createObjectURL(thumbnailBlob);
          }
        }
        if (pictureBlob) {
          await savePicture(pictureBlob);
          pictureData.value = URL.createObjectURL(pictureBlob);
        }
      } catch (error) {
        console.error('Failed to save settings:', error);
      }
    };

    const refreshNews = () => {
      newsRefreshTrigger.value++;
    };

    onMounted(() => {
      loadSettings();
    });

    return {
      showSettings,
      settings,
      settingsLoaded,
      videoData,
      thumbnailData,
      pictureData,
      newsRefreshTrigger,
      updateSettings,
      refreshNews
    };
  }
};
</script>

<style scoped>
.settings-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 20;
}

.widgets-container {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
}

@media (max-width: 640px) {
  .settings-button {
    top: auto;
    bottom: 13rem;
    right: 1rem;
    left: auto;
    z-index: 30;
  }
  
  .widgets-container {
    top: 1rem;
    left: 1rem;
    right: auto;
    flex-direction: row;
  }
}
</style>
