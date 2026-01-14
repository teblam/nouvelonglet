<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
      <div class="bg-slate-800 px-6 py-4 flex items-center justify-between">
        <h2 class="text-2xl font-bold text-white flex items-center">
          <i class="fas fa-cog mr-3"></i>
          {{ $t('settings.title') }}
        </h2>
        <button
          @click="$emit('close')"
          class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
        <div class="space-y-8">

          <section>
            <div class="flex items-center gap-3 mb-4 pb-2 border-b-2 border-purple-500">
              <div class="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                <i class="fas fa-image text-white text-sm"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-800">{{ $t('settings.background.title') }}</h3>
            </div>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.background.type') }}</label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    @click="localSettings.backgroundType = 'solid'"
                    :class="[
                      'px-4 py-3 rounded-lg font-medium transition-all',
                      localSettings.backgroundType === 'solid'
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                    ]"
                  >
                    <i class="fas fa-fill-drip mr-2"></i>
                    {{ $t('settings.background.solid') }}
                  </button>
                  <button
                    @click="localSettings.backgroundType = 'color'"
                    :class="[
                      'px-4 py-3 rounded-lg font-medium transition-all',
                      localSettings.backgroundType === 'color'
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                    ]"
                  >
                    <i class="fas fa-palette mr-2"></i>
                    {{ $t('settings.background.gradient') }}
                  </button>
                  <button
                    @click="localSettings.backgroundType = 'picture'"
                    :class="[
                      'px-4 py-3 rounded-lg font-medium transition-all',
                      localSettings.backgroundType === 'picture'
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                    ]"
                  >
                    <i class="fas fa-image mr-2"></i>
                    {{ $t('settings.background.picture') }}
                  </button>
                  <button
                    @click="localSettings.backgroundType = 'video'"
                    :class="[
                      'px-4 py-3 rounded-lg font-medium transition-all',
                      localSettings.backgroundType === 'video'
                        ? 'bg-purple-500 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                    ]"
                  >
                    <i class="fas fa-video mr-2"></i>
                    {{ $t('settings.background.video') }}
                  </button>
                </div>
              </div>

              <div v-if="localSettings.backgroundType === 'solid'">
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.background.color') }}</label>
                <div class="flex gap-2">
                  <input
                    v-model="localSettings.solidColor"
                    type="color"
                    class="w-14 h-10 rounded-lg cursor-pointer border-2 border-gray-300"
                  >
                  <input
                    v-model="localSettings.solidColor"
                    type="text"
                    class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                  >
                </div>
                <div 
                  class="mt-3 h-16 rounded-lg border-2 border-gray-300"
                  :style="{ background: localSettings.solidColor }"
                ></div>
              </div>

              <div v-if="localSettings.backgroundType === 'color'">
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.background.gradientColors') }}</label>
                <div class="flex gap-4 items-center">
                  <div class="flex-1">
                    <label class="block text-xs text-gray-500 mb-1">{{ $t('settings.background.gradientStart') }}</label>
                    <div class="flex gap-2">
                      <input
                        v-model="localSettings.gradientColor1"
                        type="color"
                        class="w-14 h-10 rounded-lg cursor-pointer border-2 border-gray-300"
                      >
                      <input
                        v-model="localSettings.gradientColor1"
                        type="text"
                        class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                      >
                    </div>
                  </div>
                  <div class="flex-1">
                    <label class="block text-xs text-gray-500 mb-1">{{ $t('settings.background.gradientEnd') }}</label>
                    <div class="flex gap-2">
                      <input
                        v-model="localSettings.gradientColor2"
                        type="color"
                        class="w-14 h-10 rounded-lg cursor-pointer border-2 border-gray-300"
                      >
                      <input
                        v-model="localSettings.gradientColor2"
                        type="text"
                        class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <label class="block text-xs text-gray-500 mb-1">{{ $t('settings.background.gradientAngle') }}: {{ localSettings.gradientAngle }}°</label>
                  <input
                    v-model.number="localSettings.gradientAngle"
                    type="range"
                    min="0"
                    max="360"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  >
                </div>
                <div 
                  class="mt-3 h-16 rounded-lg border-2 border-gray-300"
                  :style="{ background: `linear-gradient(${localSettings.gradientAngle}deg, ${localSettings.gradientColor1}, ${localSettings.gradientColor2})` }"
                ></div>
              </div>

              <div v-if="localSettings.backgroundType === 'picture'">
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.background.pictureFile') }}</label>
                <label class="flex items-center justify-center w-full h-12 px-4 border-2 border-dashed rounded-lg cursor-pointer transition-all"
                  :class="pictureFileName ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'"
                >
                  <i class="mr-2" :class="pictureFileName ? 'fas fa-check text-green-500' : 'fas fa-folder-open text-gray-500'"></i>
                  <span :class="pictureFileName ? 'text-green-700' : 'text-gray-600'">{{ pictureFileName || $t('settings.background.chooseImage') }}</span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    class="hidden"
                    @change="handlePictureFile"
                  >
                </label>

                <div class="mt-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('settings.background.blurIntensity') }}: {{ localSettings.pictureBlur }}px
                  </label>
                  <input
                    v-model.number="localSettings.pictureBlur"
                    type="range"
                    min="0"
                    max="20"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  >
                  <div class="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{{ $t('settings.background.noBlur') }}</span>
                    <span>{{ $t('settings.background.maxBlur') }}</span>
                  </div>
                </div>

                <div class="mt-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('settings.background.opacity') }}: {{ localSettings.pictureOpacity }}%
                  </label>
                  <input
                    v-model.number="localSettings.pictureOpacity"
                    type="range"
                    min="0"
                    max="100"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  >
                </div>
              </div>

              <div v-if="localSettings.backgroundType === 'video'">
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.background.videoFile') }}</label>
                <label class="flex items-center justify-center w-full h-12 px-4 border-2 border-dashed rounded-lg cursor-pointer transition-all"
                  :class="videoFileName ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'"
                >
                  <i class="mr-2" :class="videoFileName ? 'fas fa-check text-green-500' : 'fas fa-folder-open text-gray-500'"></i>
                  <span :class="videoFileName ? 'text-green-700' : 'text-gray-600'">{{ videoFileName || $t('settings.background.chooseVideo') }}</span>
                  <input
                    type="file"
                    accept="video/mp4,video/webm"
                    class="hidden"
                    @change="handleVideoFile"
                  >
                </label>

                <div class="mt-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('settings.background.blurIntensity') }}: {{ localSettings.blur }}px
                  </label>
                  <input
                    v-model.number="localSettings.blur"
                    type="range"
                    min="0"
                    max="20"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  >
                  <div class="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{{ $t('settings.background.noBlur') }}</span>
                    <span>{{ $t('settings.background.maxBlur') }}</span>
                  </div>
                </div>

                <div class="mt-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('settings.background.opacity') }}: {{ localSettings.opacity }}%
                  </label>
                  <input
                    v-model.number="localSettings.opacity"
                    type="range"
                    min="0"
                    max="100"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  >
                </div>
              </div>
            </div>
          </section>

          <template v-for="(widgetId, index) in localSettings.widgetsOrder" :key="widgetId">
            <section
              v-if="widgetId === 'clock'"
              draggable="true"
              @dragstart="onSectionDragStart($event, index)"
              @dragover.prevent
              @dragenter.prevent="onSectionDragEnter(index)"
              @dragleave="onSectionDragLeave"
              @drop="onSectionDrop(index)"
              @dragend="onSectionDragEnd"
              @touchstart="onTouchStart($event, index)"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
              class="transition-all duration-300 ease-in-out"
              :class="{
                'ring-2 ring-cyan-500 ring-offset-2 rounded-lg scale-105': sectionDragOverIndex === index,
                'opacity-50 scale-95': sectionDraggedIndex === index,
                'cursor-move': true
              }"
            >
              <div class="flex items-center justify-between gap-3 mb-4 pb-2 border-b-2 border-blue-500">
                <div class="flex items-center gap-3">
                  <i class="fas fa-grip-vertical text-gray-400 cursor-grab active:cursor-grabbing"></i>
                  <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                    <i class="fas fa-clock text-white text-sm"></i>
                  </div>
                  <h3 class="text-lg font-bold text-slate-800">{{ $t('settings.clock.title') }}</h3>
                </div>
                <label class="relative cursor-pointer">
                  <input type="checkbox" v-model="localSettings.widgetClock" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
                  <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
              
              <div v-if="localSettings.widgetClock" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.clock.type') }}</label>
                  <div class="flex gap-3">
                    <button
                      @click="localSettings.clockType = 'digital'"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.clockType === 'digital'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                      ]"
                    >
                      <i class="fas fa-digital-tachograph mr-2"></i>
                      {{ $t('settings.clock.digital') }}
                    </button>
                    <button
                      @click="localSettings.clockType = 'analog'"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.clockType === 'analog'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                      ]"
                    >
                      <i class="fas fa-clock mr-2"></i>
                      {{ $t('settings.clock.analog') }}
                    </button>
                  </div>
                </div>

                <div v-if="localSettings.clockType === 'digital'">
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.clock.timeFormat') }}</label>
                  <div class="flex gap-3">
                    <button
                      @click="localSettings.clockFormat = '24h'"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.clockFormat === '24h'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                      ]"
                    >
                      24h
                    </button>
                    <button
                      @click="localSettings.clockFormat = '12h'"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.clockFormat === '12h'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                      ]"
                    >
                      AM/PM
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section
              v-if="widgetId === 'weather'"
              draggable="true"
              @dragstart="onSectionDragStart($event, index)"
              @dragover.prevent
              @dragenter.prevent="onSectionDragEnter(index)"
              @dragleave="onSectionDragLeave"
              @drop="onSectionDrop(index)"
              @dragend="onSectionDragEnd"
              @touchstart="onTouchStart($event, index)"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
              class="transition-all duration-300 ease-in-out"
              :class="{
                'ring-2 ring-cyan-500 ring-offset-2 rounded-lg scale-105': sectionDragOverIndex === index,
                'opacity-50 scale-95': sectionDraggedIndex === index,
                'cursor-move': true
              }"
            >
              <div class="flex items-center justify-between gap-3 mb-4 pb-2 border-b-2 border-yellow-500">
                <div class="flex items-center gap-3">
                  <i class="fas fa-grip-vertical text-gray-400 cursor-grab active:cursor-grabbing"></i>
                  <div class="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center">
                    <i class="fas fa-cloud-sun text-white text-sm"></i>
                  </div>
                  <h3 class="text-lg font-bold text-slate-800">{{ $t('settings.weather.title') }}</h3>
                </div>
                <label class="relative cursor-pointer">
                  <input type="checkbox" v-model="localSettings.widgetWeather" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-yellow-500 transition-colors"></div>
                  <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
              
              <div v-if="localSettings.widgetWeather" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.weather.locationMode') }}</label>
                  <div class="flex gap-3">
                    <button
                      @click="enableAutoWeather"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.weatherMode === 'auto'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-300'
                      ]"
                    >
                      <i class="fas fa-location-arrow mr-2"></i>
                      {{ $t('settings.weather.automatic') }}
                    </button>
                    <button
                      @click="localSettings.weatherMode = 'manual'"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.weatherMode === 'manual'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-300'
                      ]"
                    >
                      <i class="fas fa-edit mr-2"></i>
                      {{ $t('settings.weather.manual') }}
                    </button>
                  </div>
                </div>

                <div v-if="localSettings.weatherMode === 'auto'" class="flex items-center gap-2 text-sm text-gray-600 bg-yellow-50 rounded-lg p-3">
                  <i class="fas fa-info-circle text-yellow-500"></i>
                  <span>{{ $t('settings.weather.autoInfo') }}</span>
                </div>

                <div v-if="localSettings.weatherMode === 'manual'">
                  <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('settings.weather.searchCity') }}</label>
                  <div class="relative">
                    <input
                      :value="citySearch"
                      @input="handleCityInput"
                      type="text"
                      :placeholder="$t('settings.weather.searchPlaceholder')"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                    <div v-if="searchingCities" class="absolute right-3 top-1/2 -translate-y-1/2">
                      <i class="fas fa-spinner fa-spin text-gray-400"></i>
                    </div>
                    
                    <div v-if="citySuggestions.length > 0" class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                      <button
                        v-for="city in citySuggestions"
                        :key="city.lat + '-' + city.lon"
                        @click="selectCity(city)"
                        class="w-full px-4 py-2 text-left hover:bg-yellow-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div class="font-medium text-gray-800">{{ city.name }}</div>
                        <div class="text-xs text-gray-500 truncate">{{ city.displayName }}</div>
                      </button>
                    </div>
                  </div>

                  <div v-if="localSettings.weatherCity" class="mt-3 flex items-center gap-2 bg-green-50 rounded-lg p-3">
                    <i class="fas fa-check-circle text-green-500"></i>
                    <span class="text-sm text-green-700">
                      {{ $t('settings.weather.selected') }}: <strong>{{ localSettings.weatherCity }}</strong>
                    </span>
                    <button 
                      @click="localSettings.weatherCity = ''; localSettings.weatherLat = null; localSettings.weatherLon = null;"
                      class="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>

                  <p v-else class="text-xs text-gray-500 mt-2">{{ $t('settings.weather.selectCity') }}</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.weather.temperatureUnit') }}</label>
                  <div class="flex gap-3">
                    <button
                      @click="localSettings.temperatureUnit = 'celsius'"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.temperatureUnit === 'celsius'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-300'
                      ]"
                    >
                      °C
                    </button>
                    <button
                      @click="localSettings.temperatureUnit = 'fahrenheit'"
                      :class="[
                        'flex-1 px-4 py-3 rounded-lg font-medium transition-all',
                        localSettings.temperatureUnit === 'fahrenheit'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-300'
                      ]"
                    >
                      °F
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </template>

          <section>
            <div class="flex items-center justify-between gap-3 mb-4 pb-2 border-b-2 border-green-500">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                  <i class="fas fa-search text-white text-sm"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-800">{{ $t('settings.search.title') }}</h3>
              </div>
              <label class="relative cursor-pointer">
                <input type="checkbox" v-model="localSettings.searchEnabled" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
                <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>
            
            <div v-if="localSettings.searchEnabled" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.search.defaultEngine') }}</label>
                <select
                  v-model="localSettings.defaultSearchEngine"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option v-for="engine in enabledSearchEnginesList" :key="engine.id" :value="engine.id">
                    {{ engine.name }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.search.enabledEngines') }}</label>
                <div class="space-y-2">
                  <label 
                    v-for="engine in allSearchEngines" 
                    :key="engine.id"
                    class="flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer"
                    :class="isEngineEnabled(engine.id) ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-gray-300'"
                  >
                    <input 
                      type="checkbox" 
                      :checked="isEngineEnabled(engine.id)"
                      @change="toggleEngine(engine.id)"
                      :disabled="isLastEnabledEngine(engine.id)"
                      class="sr-only"
                    >
                    <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                      <i v-if="engine.icon" :class="engine.icon"></i>
                      <span v-else-if="engine.svg" v-html="engine.svg" class="w-5 h-5"></span>
                      <span v-else>{{ engine.emoji }}</span>
                    </div>
                    <span class="font-medium text-gray-800">{{ engine.name }}</span>
                    <div class="ml-auto">
                      <i v-if="isEngineEnabled(engine.id)" class="fas fa-check text-green-500"></i>
                    </div>
                  </label>
                </div>
                <p class="text-xs text-gray-500 mt-2">{{ $t('settings.search.atLeastOne') }}</p>
              </div>
            </div>
          </section>

          <section>
            <div class="flex items-center justify-between gap-3 mb-4 pb-2 border-b-2 border-orange-500">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                  <i class="fas fa-rss text-white text-sm"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-800">{{ $t('settings.news.title') }}</h3>
              </div>
              <label class="relative cursor-pointer">
                <input type="checkbox" v-model="localSettings.widgetNews" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 transition-colors"></div>
                <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>
            
            <div v-if="localSettings.widgetNews" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.news.feedType') }}</label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    @click="localSettings.newsFeedType = 'simpleRss'"
                    :class="[
                      'px-4 py-3 rounded-lg font-medium transition-all',
                      localSettings.newsFeedType === 'simpleRss'
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
                    ]"
                  >
                    <i class="fas fa-rss mr-2"></i>
                    {{ $t('settings.news.rssAtom') }}
                  </button>
                  <button
                    @click="localSettings.newsFeedType = 'googleReader'"
                    :class="[
                      'px-4 py-3 rounded-lg font-medium transition-all',
                      localSettings.newsFeedType === 'googleReader'
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
                    ]"
                  >
                    <i class="fas fa-server mr-2"></i>
                    {{ $t('settings.news.googleReader') }}
                  </button>
                </div>
              </div>

              <div v-if="localSettings.newsFeedType === 'simpleRss'">
                <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('settings.news.rssUrl') }}</label>
                <input
                  v-model="localSettings.newsRssUrl"
                  type="url"
                  :placeholder="$t('settings.news.rssPlaceholder')"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                <p class="text-xs text-gray-500 mt-1">{{ $t('settings.news.rssHelp') }}</p>
                <div v-if="rssPermissionNeeded && localSettings.newsRssUrl" class="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p class="text-sm text-amber-700 mb-2">
                    <i class="fas fa-exclamation-triangle mr-1"></i>
                    {{ $t('settings.news.permissionRequired') }}
                  </p>
                  <button
                    @click="grantRssPermission"
                    class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <i class="fas fa-unlock mr-1"></i>
                    {{ $t('settings.news.grantPermission') }}
                  </button>
                </div>
              </div>

              <div v-if="localSettings.newsFeedType === 'googleReader'" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('settings.news.apiUrl') }}</label>
                  <input
                    v-model="localSettings.newsApiUrl"
                    type="url"
                    :placeholder="$t('settings.news.apiPlaceholder')"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                  <p class="text-xs text-gray-500 mt-1">{{ $t('settings.news.apiHelp') }}</p>
                  <div v-if="readerPermissionNeeded && localSettings.newsApiUrl" class="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p class="text-sm text-amber-700 mb-2">
                      <i class="fas fa-exclamation-triangle mr-1"></i>
                      {{ $t('settings.news.permissionRequired') }}
                    </p>
                    <button
                      @click="grantReaderPermission"
                      class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <i class="fas fa-unlock mr-1"></i>
                      {{ $t('settings.news.grantPermission') }}
                    </button>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('settings.news.username') }}</label>
                  <input
                    v-model="localSettings.newsUsername"
                    type="text"
                    :placeholder="$t('settings.news.usernamePlaceholder')"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('settings.news.password') }}</label>
                  <input
                    v-model="localSettings.newsPassword"
                    type="password"
                    :placeholder="$t('settings.news.passwordPlaceholder')"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                </div>
              </div>

              <button
                @click="$emit('refresh-news')"
                class="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <i class="fas fa-sync-alt"></i>
                {{ $t('settings.news.refresh') }}
              </button>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-4 pb-2 border-b-2 border-indigo-500">
              <div class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                <i class="fas fa-language text-white text-sm"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-800">{{ $t('settings.language.title') }}</h3>
            </div>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ $t('settings.language.select') }}</label>
                <select
                  v-model="currentLocale"
                  @change="changeLocale"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
                    {{ locale.name }}
                  </option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-3 mb-4 pb-2 border-b-2 border-slate-500">
              <div class="w-8 h-8 rounded-lg bg-slate-500 flex items-center justify-center">
                <i class="fas fa-info-circle text-white text-sm"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-800">{{ $t('settings.attributions.title') }}</h3>
            </div>
            
            <div class="space-y-6">
              <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 class="font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <i class="fas fa-shield-alt text-slate-500"></i>
                  {{ $t('settings.attributions.legal') }}
                </h4>
                <p class="text-sm text-slate-600 leading-relaxed text-justify">
                  {{ $t('settings.attributions.legalText') }}
                </p>
              </div>

              <div>
                <h4 class="font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <i class="fab fa-github text-slate-500"></i>
                  {{ $t('settings.attributions.project') }}
                </h4>
                <ul class="space-y-2">
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fas fa-code text-slate-500 w-5 text-center"></i>
                    <a href="https://github.com/teblam/nouvelonglet" target="_blank" class="font-medium hover:underline hover:text-blue-600">
                      {{ $t('settings.attributions.sourceCode') }}
                    </a>
                  </li>
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fas fa-star text-yellow-500 w-5 text-center"></i>
                    <a href="https://github.com/teblam/nouvelonglet" target="_blank" class="font-medium hover:underline hover:text-blue-600">
                      {{ $t('settings.attributions.starGitHub') }}
                    </a>
                  </li>
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fas fa-bug text-red-500 w-5 text-center"></i>
                    <a href="https://github.com/teblam/nouvelonglet/issues" target="_blank" class="font-medium hover:underline hover:text-blue-600">
                      {{ $t('settings.attributions.reportIssue') }}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <i class="fas fa-file-contract text-slate-500"></i>
                  {{ $t('settings.attributions.services') }}
                </h4>
                <ul class="space-y-2">
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fab fa-font-awesome text-blue-500 w-5 text-center"></i>
                    <div>
                      <a href="https://fontawesome.com/" target="_blank" class="font-medium hover:underline hover:text-blue-600">FontAwesome</a>
                      <span class="text-slate-400 mx-1">-</span>
                      <a href="https://fontawesome.com/license/free" target="_blank" class="text-xs text-slate-500 hover:underline hover:text-blue-600">CC BY 4.0, SIL OFL, MIT</a>
                    </div>
                  </li>
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fas fa-icons text-purple-500 w-5 text-center"></i>
                    <div>
                      <a href="https://simpleicons.org/" target="_blank" class="font-medium hover:underline hover:text-blue-600">Simple Icons</a>
                      <span class="text-slate-400 mx-1">-</span>
                      <a href="https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md" target="_blank" class="text-xs text-slate-500 hover:underline hover:text-blue-600">CC0 1.0 Universal</a>
                    </div>
                  </li>
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fas fa-cloud-sun text-yellow-500 w-5 text-center"></i>
                    <div>
                      <a href="https://open-meteo.com/" target="_blank" class="font-medium hover:underline hover:text-blue-600">Open-Meteo</a>
                      <span class="text-slate-400 mx-1">-</span>
                      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" class="text-xs text-slate-500 hover:underline hover:text-blue-600">CC BY 4.0</a>
                    </div>
                  </li>
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fas fa-search text-green-500 w-5 text-center"></i>
                    <div>
                      <a href="https://duckduckgo.com/" target="_blank" class="font-medium hover:underline hover:text-blue-600">DuckDuckGo</a>
                      <span class="text-slate-400 mx-1">-</span>
                      <span class="text-xs text-slate-500">{{ $t('settings.attributions.duckDuckGo') }}</span>
                    </div>
                  </li>
                  <li class="flex items-center gap-3 text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">
                    <i class="fas fa-map-marker-alt text-red-500 w-5 text-center"></i>
                    <div>
                      <a href="https://nominatim.openstreetmap.org/" target="_blank" class="font-medium hover:underline hover:text-blue-600">OpenStreetMap Nominatim</a>
                      <span class="text-slate-400 mx-1">-</span>
                      <a href="https://opendatacommons.org/licenses/odbl/1-0/" target="_blank" class="text-xs text-slate-500 hover:underline hover:text-blue-600">ODbL</a>
                    </div>
                  </li>
                </ul>
              </div>

              <p class="text-xs text-slate-400 italic text-center px-4 mt-6 border-t border-slate-100 pt-4">
                {{ $t('settings.attributions.disclaimer') }}
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';
import * as simpleIcons from 'simple-icons';
import { useI18n } from 'vue-i18n';
import { availableLocales, saveLocale } from '../i18n/index.js';

export default {
  name: 'SettingsModal',
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  emits: ['close', 'update', 'refresh-news'],
  setup(props, { emit }) {
    const { locale } = useI18n();
    const currentLocale = ref(locale.value);

    const changeLocale = async () => {
      locale.value = currentLocale.value;
      await saveLocale(currentLocale.value);
    };

    const getSvgIcon = (iconData) => {
      return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="${iconData.path}"/></svg>`;
    };

    const allSearchEngines = [
      { id: 'google', name: 'Google', icon: 'fab fa-google' },
      { id: 'bing', name: 'Bing', icon: 'fab fa-microsoft' },
      { id: 'yahoo', name: 'Yahoo', icon: 'fab fa-yahoo' },
      { id: 'duckduckgo', name: 'DuckDuckGo', svg: getSvgIcon(simpleIcons.siDuckduckgo) },
      { id: 'perplexity', name: 'Perplexity', svg: getSvgIcon(simpleIcons.siPerplexity) },
      { id: 'chatgpt', name: 'ChatGPT', icon: 'fab fa-openai' }
    ];

    const defaultSettings = {
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
      temperatureUnit: 'celsius',
      widgetWeather: true,
      widgetClock: true,
      widgetNews: true,
      widgetsOrder: ['clock', 'weather'],
      clockType: 'digital',
      clockFormat: '24h',
      searchEnabled: true,
      searchEngines: ['google', 'duckduckgo', 'perplexity'],
      defaultSearchEngine: 'google'
    };
    
    const localSettings = ref({ ...defaultSettings, ...props.settings });
    const videoFileName = ref('');
    const pictureFileName = ref('');
    const citySearch = ref('');
    const citySuggestions = ref([]);
    const searchingCities = ref(false);
    const rssPermissionNeeded = ref(false);
    const readerPermissionNeeded = ref(false);
    let searchTimeout = null;

    const getOriginPattern = (urlString) => {
      try {
        const url = new URL(urlString);
        return `${url.protocol}//${url.host}/*`;
      } catch {
        return null;
      }
    };

    const checkUrlPermission = async (urlString) => {
      const pattern = getOriginPattern(urlString);
      if (!pattern) return true;
      return browser.permissions.contains({ origins: [pattern] });
    };

    const requestUrlPermission = async (urlString) => {
      const pattern = getOriginPattern(urlString);
      if (!pattern) return false;
      return browser.permissions.request({ origins: [pattern] });
    };

    const checkRssPermission = async () => {
      const url = localSettings.value.newsRssUrl;
      if (!url) {
        rssPermissionNeeded.value = false;
        return;
      }
      const hasPermission = await checkUrlPermission(url);
      rssPermissionNeeded.value = !hasPermission;
    };

    const checkReaderPermission = async () => {
      const url = localSettings.value.newsApiUrl;
      if (!url) {
        readerPermissionNeeded.value = false;
        return;
      }
      const hasPermission = await checkUrlPermission(url);
      readerPermissionNeeded.value = !hasPermission;
    };

    const grantRssPermission = async () => {
      const granted = await requestUrlPermission(localSettings.value.newsRssUrl);
      if (granted) {
        rssPermissionNeeded.value = false;
      }
    };

    const grantReaderPermission = async () => {
      const granted = await requestUrlPermission(localSettings.value.newsApiUrl);
      if (granted) {
        readerPermissionNeeded.value = false;
      }
    };

    checkRssPermission();
    checkReaderPermission();
    
    const sectionDraggedIndex = ref(null);
    const sectionDragOverIndex = ref(null);
    let touchStartY = 0;
    let touchCurrentElement = null;

    const onSectionDragStart = (event, index) => {
      sectionDraggedIndex.value = index;
      event.dataTransfer.effectAllowed = 'move';
    };

    const onSectionDragEnter = (index) => {
      if (sectionDraggedIndex.value !== null && sectionDraggedIndex.value !== index) {
        sectionDragOverIndex.value = index;
      }
    };

    const onSectionDragLeave = () => {
      sectionDragOverIndex.value = null;
    };

    const onSectionDragEnd = () => {
      sectionDraggedIndex.value = null;
      sectionDragOverIndex.value = null;
    };

    const onSectionDrop = (index) => {
      if (sectionDraggedIndex.value !== null && sectionDraggedIndex.value !== index) {
        const newOrder = [...localSettings.value.widgetsOrder];
        const [removed] = newOrder.splice(sectionDraggedIndex.value, 1);
        newOrder.splice(index, 0, removed);
        localSettings.value.widgetsOrder = newOrder;
      }
      sectionDraggedIndex.value = null;
      sectionDragOverIndex.value = null;
    };

    const onTouchStart = (event, index) => {
      touchStartY = event.touches[0].clientY;
      touchCurrentElement = event.currentTarget;
      sectionDraggedIndex.value = index;
    };

    const onTouchMove = (event) => {
      if (sectionDraggedIndex.value === null) return;
      
      const touch = event.touches[0];
      const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);
      
      if (elementAtPoint && elementAtPoint.closest('section')) {
        const sections = Array.from(document.querySelectorAll('.space-y-8 > section, .space-y-8 > template > section'));
        const targetSection = elementAtPoint.closest('section');
        const targetIndex = sections.indexOf(targetSection);
        
        if (targetIndex !== -1 && targetIndex !== sectionDraggedIndex.value) {
          const widgetIds = ['clock', 'weather'];
          const actualIndex = widgetIds.indexOf(localSettings.value.widgetsOrder[targetIndex]);
          if (actualIndex !== -1) {
            sectionDragOverIndex.value = actualIndex;
          }
        }
      }
      
      event.preventDefault();
    };

    const onTouchEnd = () => {
      if (sectionDraggedIndex.value !== null && sectionDragOverIndex.value !== null && 
          sectionDraggedIndex.value !== sectionDragOverIndex.value) {
        const newOrder = [...localSettings.value.widgetsOrder];
        const [removed] = newOrder.splice(sectionDraggedIndex.value, 1);
        newOrder.splice(sectionDragOverIndex.value, 0, removed);
        localSettings.value.widgetsOrder = newOrder;
      }
      
      sectionDraggedIndex.value = null;
      sectionDragOverIndex.value = null;
      touchCurrentElement = null;
    };

    const enabledSearchEnginesList = computed(() => {
      const enabled = localSettings.value.searchEngines || ['google'];
      return allSearchEngines.filter(e => enabled.includes(e.id));
    });

    const isEngineEnabled = (engineId) => {
      return (localSettings.value.searchEngines || []).includes(engineId);
    };

    const isLastEnabledEngine = (engineId) => {
      const engines = localSettings.value.searchEngines || [];
      return engines.length === 1 && engines[0] === engineId;
    };

    const toggleEngine = (engineId) => {
      const engines = [...(localSettings.value.searchEngines || [])];
      const index = engines.indexOf(engineId);
      
      if (index > -1) {
        if (engines.length > 1) {
          engines.splice(index, 1);
          if (localSettings.value.defaultSearchEngine === engineId) {
            localSettings.value.defaultSearchEngine = engines[0];
          }
        }
      } else {
        engines.push(engineId);
      }
      
      localSettings.value.searchEngines = engines;
    };

    const searchCities = async (query) => {
      if (query.length < 3) {
        citySuggestions.value = [];
        return;
      }
      searchingCities.value = true;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&addressdetails=1`,
          {
            headers: {
              'Accept-Language': 'en',
              'User-Agent': 'NouvelOnglet/1.0 (Firefox Extension)'
            }
          }
        );
        if (!response.ok) throw new Error('Search failed');
        const data = await response.json();
        citySuggestions.value = data.map(item => ({
          name: item.address?.city || item.address?.town || item.address?.village || item.name,
          displayName: item.display_name,
          lat: parseFloat(item.lat),
          lon: parseFloat(item.lon)
        }));
      } catch {
        citySuggestions.value = [];
      } finally {
        searchingCities.value = false;
      }
    };

    const handleCityInput = (event) => {
      const query = event.target.value;
      citySearch.value = query;
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => searchCities(query), 500);
    };

    const selectCity = (city) => {
      localSettings.value.weatherCity = city.name;
      localSettings.value.weatherLat = city.lat;
      localSettings.value.weatherLon = city.lon;
      citySearch.value = '';
      citySuggestions.value = [];
    };

    const enableAutoWeather = async () => {
      const granted = await browser.permissions.request({ permissions: ['geolocation'] });
      if (!granted) return;
      localSettings.value.weatherMode = 'auto';
    };

    watch(localSettings, (newSettings) => {
      emit('update', { ...newSettings });
    }, { deep: true });

    watch(() => localSettings.value.newsRssUrl, checkRssPermission);
    watch(() => localSettings.value.newsApiUrl, checkReaderPermission);

    const extractVideoThumbnail = (file) => {
      return new Promise((resolve) => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.muted = true;
        video.src = URL.createObjectURL(file);
        
        video.onloadeddata = () => {
          video.currentTime = 0;
        };
        
        video.onseeked = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0);
          canvas.toBlob((blob) => {
            URL.revokeObjectURL(video.src);
            resolve(blob);
          }, 'image/jpeg', 0.85);
        };
        
        video.onerror = () => {
          URL.revokeObjectURL(video.src);
          resolve(null);
        };
      });
    };

    const handleVideoFile = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      
      videoFileName.value = file.name;
      const thumbnailBlob = await extractVideoThumbnail(file);
      emit('update', { ...localSettings.value, videoBlob: file, thumbnailBlob });
    };

    const handlePictureFile = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      
      pictureFileName.value = file.name;
      emit('update', { ...localSettings.value, pictureBlob: file });
    };

    return {
      localSettings,
      videoFileName,
      pictureFileName,
      handleVideoFile,
      handlePictureFile,
      citySearch,
      citySuggestions,
      searchingCities,
      handleCityInput,
      selectCity,
      enableAutoWeather,
      allSearchEngines,
      enabledSearchEnginesList,
      isEngineEnabled,
      isLastEnabledEngine,
      toggleEngine,
      currentLocale,
      changeLocale,
      availableLocales,
      sectionDraggedIndex,
      sectionDragOverIndex,
      onSectionDragStart,
      onSectionDragEnter,
      onSectionDragLeave,
      onSectionDragEnd,
      onSectionDrop,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      rssPermissionNeeded,
      readerPermissionNeeded,
      grantRssPermission,
      grantReaderPermission
    };
  }
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: currentColor;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: currentColor;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
}
</style>
