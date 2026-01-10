<template>
  <div v-if="settings.searchEnabled" class="search-container" style="position: relative; z-index: 1000;">
    <div class="relative search-input-wrapper" style="z-index: 1001;">
      <div class="bg-gradient-to-br from-black/50 to-black/35 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all" :class="{ 'ring-2 ring-blue-500': isFocused && selectedEngineIndex === -1 }">
        <input
          ref="inputRef"
          v-model="searchQuery"
          @input="onInput"
          @keydown="onKeydown"
          @focus="onFocus"
          @blur="onBlur"
          type="text"
          :placeholder="$t('search.placeholder')"
          class="w-full h-full px-6 py-4 pr-12 text-base bg-transparent focus:outline-none text-white placeholder-white/50 search-input"
        >
        <i class="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"></i>
      </div>
      <div 
        v-if="showSuggestions && suggestions.length > 0"
        style="position: absolute; left: 0; right: 0; margin-top: 0.5rem; z-index: 1002;"
        class="bg-gradient-to-br from-black/50 to-black/35 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden"
      >
        <div
          v-for="(suggestion, index) in suggestions"
          :key="index"
          @mousedown.prevent="selectSuggestion(suggestion)"
          class="px-6 py-3 text-white cursor-pointer transition-colors"
          :class="index === selectedIndex ? 'bg-white/20' : 'hover:bg-white/10'"
        >
          {{ suggestion }}
        </div>
      </div>
    </div>
    
    <div class="flex items-stretch gap-2 search-engines">
      <button
        v-for="(engine, idx) in enabledEngines"
        :key="engine.id"
        ref="engineButtons"
        @click="handleSearchWithEngine(engine.id)"
        class="w-14 bg-gradient-to-br from-black/50 to-black/35 backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all text-xl hover:scale-105 shadow-lg text-white engine-button"
        :class="{ 'ring-2 ring-blue-500': selectedEngineIndex === idx }"
        :title="engine.name"
      >
        <i v-if="engine.icon" :class="engine.icon"></i>
        <span v-else-if="engine.svg" v-html="engine.svg" class="w-6 h-6"></span>
        <span v-else>{{ engine.emoji }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import * as simpleIcons from 'simple-icons';

export default {
  name: 'SearchBar',
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const searchQuery = ref('');
    const isFocused = ref(false);
    const inputRef = ref(null);
    const engineButtons = ref([]);
    const suggestions = ref([]);
    const showSuggestions = ref(false);
    const selectedIndex = ref(-1);
    const selectedEngineIndex = ref(-1);
    let debounceTimer = null;

    const getSvgIcon = (iconData) => {
      return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="${iconData.path}"/></svg>`;
    };

    const allSearchEngines = [
      { id: 'google', name: 'Google', icon: 'fab fa-google', url: 'https://www.google.com/search?q=%s' },
      { id: 'bing', name: 'Bing', icon: 'fab fa-microsoft', url: 'https://www.bing.com/search?q=%s' },
      { id: 'yahoo', name: 'Yahoo', icon: 'fab fa-yahoo', url: 'https://search.yahoo.com/search?p=%s' },
      { id: 'duckduckgo', name: 'DuckDuckGo', svg: getSvgIcon(simpleIcons.siDuckduckgo), url: 'https://duckduckgo.com/?q=%s' },
      { id: 'perplexity', name: 'Perplexity', svg: getSvgIcon(simpleIcons.siPerplexity), url: 'https://www.perplexity.ai/search?q=%s' },
      { id: 'chatgpt', name: 'ChatGPT', icon: 'fab fa-openai', url: 'https://chatgpt.com/?q=%s&hints=search&ref=ext' }
    ];

    const enabledEngines = computed(() => {
      const enabledIds = props.settings.searchEngines || ['google', 'duckduckgo', 'perplexity'];
      return allSearchEngines.filter(e => enabledIds.includes(e.id));
    });

    const fetchSuggestions = async (query) => {
      if (!query.trim()) {
        suggestions.value = [];
        return;
      }
      const response = await fetch(`https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`);
      const data = await response.json();
      suggestions.value = data[1] || [];
      showSuggestions.value = suggestions.value.length > 0;
      selectedIndex.value = -1;
    };

    const onInput = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => fetchSuggestions(searchQuery.value), 150);
    };

    const onFocus = () => {
      isFocused.value = true;
      selectedEngineIndex.value = -1;
      if (suggestions.value.length > 0) {
        showSuggestions.value = true;
      }
    };

    const closeSuggestions = () => {
      showSuggestions.value = false;
      selectedIndex.value = -1;
    };

    const handleSearch = () => {
      if (!searchQuery.value.trim()) return;
      closeSuggestions();
      const defaultId = props.settings.defaultSearchEngine || 'google';
      const engine = allSearchEngines.find(e => e.id === defaultId) || allSearchEngines[0];
      const searchUrl = engine.url.replace('%s', encodeURIComponent(searchQuery.value));
      window.location.href = searchUrl;
    };

    const selectSuggestion = (suggestion) => {
      searchQuery.value = suggestion;
      closeSuggestions();
      handleSearch();
    };

    const onKeydown = (e) => {
      const enginesCount = props.settings.searchEngines?.length || 3;
      
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (selectedEngineIndex.value < enginesCount - 1) {
          selectedEngineIndex.value++;
          closeSuggestions();
        }
        return;
      }
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (selectedEngineIndex.value >= 0) {
          selectedEngineIndex.value--;
          if (selectedEngineIndex.value === -1 && suggestions.value.length > 0) {
            showSuggestions.value = true;
          }
        }
        return;
      }
      
      if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedEngineIndex.value >= 0) {
          const enabledIds = props.settings.searchEngines || ['google', 'duckduckgo', 'perplexity'];
          handleSearchWithEngine(enabledIds[selectedEngineIndex.value]);
        } else if (selectedIndex.value >= 0) {
          selectSuggestion(suggestions.value[selectedIndex.value]);
        } else {
          handleSearch();
        }
        return;
      }
      
      if (e.key === 'Escape') {
        closeSuggestions();
        selectedEngineIndex.value = -1;
        return;
      }
      
      if (!showSuggestions.value || suggestions.value.length === 0) return;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex.value = Math.min(selectedIndex.value + 1, suggestions.value.length - 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex.value = Math.max(selectedIndex.value - 1, -1);
      }
    };

    const onBlur = () => {
      isFocused.value = false;
      setTimeout(closeSuggestions, 150);
    };

    const handleSearchWithEngine = (engineId) => {
      if (!searchQuery.value.trim()) return;
      const engine = allSearchEngines.find(e => e.id === engineId);
      const searchUrl = engine.url.replace('%s', encodeURIComponent(searchQuery.value));
      window.location.href = searchUrl;
    };

    return {
      searchQuery,
      isFocused,
      inputRef,
      engineButtons,
      suggestions,
      showSuggestions,
      selectedIndex,
      selectedEngineIndex,
      enabledEngines,
      onInput,
      onFocus,
      onKeydown,
      onBlur,
      selectSuggestion,
      handleSearch,
      handleSearchWithEngine
    };
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  max-width: 100%;
}

.search-input-wrapper {
  width: 700px;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .search-input-wrapper {
    width: 500px;
  }
}

@media (max-width: 900px) {
  .search-container {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .search-input-wrapper {
    width: 100%;
    flex-shrink: 1;
  }

  .search-engines {
    justify-content: center;
  }
  
  .search-input {
    padding: 0.875rem 1rem 0.875rem 1rem;
    padding-right: 2.5rem;
    font-size: 0.9375rem;
  }
  
  .engine-button {
    width: 3.25rem;
    height: 3.25rem;
    font-size: 1.125rem;
  }
}
</style>
