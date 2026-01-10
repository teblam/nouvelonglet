<template>
  <div class="weather-widget bg-gradient-to-br from-black/50 to-black/35 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
    <div v-if="loading" class="p-6 text-white text-center flex items-center justify-center h-full">
      <i class="fas fa-spinner fa-spin text-2xl"></i>
    </div>

    <div v-else-if="error" class="p-4 text-white/70 text-sm text-center flex flex-col items-center justify-center h-full">
      <i class="fas fa-cloud-sun text-2xl mb-2 block"></i>
      {{ $t('weather.unavailable') }}
    </div>

    <div v-else-if="weather" class="text-white flex flex-col h-full weather-content">
      <div class="px-4 pt-3 pb-2 flex-1">
        <div class="flex items-start justify-between">
          <div>
            <div class="text-xs font-medium opacity-80 mb-0.5">{{ weather.city }}</div>
            <div class="text-4xl font-light tracking-tight">{{ formatTemperature(weather.temperature) }}°</div>
            <div class="text-xs opacity-70 mt-0.5">{{ getWeatherDescription(weather.weatherCode) }}</div>
          </div>
          <div class="text-5xl mt-1">
            {{ getWeatherIcon(weather.weatherCode, weather.isDay) }}
          </div>
        </div>
      </div>

      <div v-if="hourlyForecast.length" class="border-t border-white/20 px-3 py-2 hourly-forecast">
        <div class="flex justify-between">
          <div 
            v-for="hour in hourlyForecast" 
            :key="hour.time"
            class="flex flex-col items-center flex-1"
          >
            <span class="text-[10px] opacity-70">{{ hour.isNow ? $t('weather.now') : hour.label }}</span>
            <span class="text-lg my-0.5">{{ getWeatherIcon(hour.code, hour.isDay) }}</span>
            <span class="text-xs font-medium">{{ formatTemperature(hour.temp) }}°</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const CACHE_DURATION = 360000;

export default {
  name: 'WeatherWidget',
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { t } = useI18n();
    const weather = ref(null);
    const hourlyForecast = ref([]);
    const loading = ref(false);
    const error = ref(false);

    const formatTemperature = (celsius) => {
      if (props.settings.temperatureUnit === 'fahrenheit') {
        return Math.round(celsius * 9 / 5 + 32);
      }
      return Math.round(celsius);
    };

    const getWeatherIcon = (code, isDay = true) => {
      if (code === 0) return isDay ? '☀️' : '🌙';
      if (code <= 2) return isDay ? '🌤️' : '☁️';
      if (code === 3) return '☁️';
      if (code <= 49) return '🌫️';
      if (code <= 67) return '🌧️';
      if (code <= 77) return '🌨️';
      if (code <= 82) return '🌧️';
      if (code <= 99) return '⛈️';
      return isDay ? '🌤️' : '☁️';
    };

    const getWeatherDescription = (code) => {
      if (code === 0) return t('weather.clear');
      if (code <= 2) return t('weather.partlyCloudy');
      if (code === 3) return t('weather.overcast');
      if (code <= 49) return t('weather.foggy');
      if (code <= 59) return t('weather.drizzle');
      if (code <= 67) return t('weather.rain');
      if (code <= 77) return t('weather.snow');
      if (code <= 82) return t('weather.rainShowers');
      if (code <= 99) return t('weather.thunderstorm');
      return t('weather.unknown');
    };

    const getCityName = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10`
        );
        const data = await response.json();
        return data.address?.city || data.address?.town || data.address?.village || data.address?.municipality || 'Unknown';
      } catch {
        return 'Unknown';
      }
    };

    const isCacheValid = () => {
      const cached = localStorage.getItem('cachedWeatherFull');
      if (!cached) return false;
      const data = JSON.parse(cached);
      return Date.now() - data.timestamp < CACHE_DURATION;
    };

    const fetchWeather = async (lat, lon, cityName = null) => {
      try {
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode,is_day&daily=sunrise,sunset&timezone=auto&forecast_days=2`
        );
        
        if (!weatherResponse.ok) throw new Error('Weather fetch failed');
        const data = await weatherResponse.json();

        if (props.settings.weatherMode === 'manual' && !cityName) {
          return;
        }

        const city = cityName || await getCityName(lat, lon);

        const currentHour = new Date().getHours();
        const hourlyData = [];
        for (let i = 0; i < 6; i++) {
          const hourIndex = currentHour + i;
          const displayHour = hourIndex % 24;
          hourlyData.push({
            time: hourIndex,
            isNow: i === 0,
            label: `${displayHour}h`,
            temp: data.hourly.temperature_2m[hourIndex],
            code: data.hourly.weathercode[hourIndex],
            isDay: data.hourly.is_day[hourIndex] === 1
          });
        }

        weather.value = {
          temperature: data.current_weather.temperature,
          weatherCode: data.current_weather.weathercode,
          isDay: data.current_weather.is_day === 1,
          city
        };
        hourlyForecast.value = hourlyData;

        localStorage.setItem('cachedWeatherFull', JSON.stringify({
          weather: weather.value,
          hourly: hourlyData,
          timestamp: Date.now()
        }));
      } catch (err) {
        console.error('Weather error:', err);
        loadCachedWeather();
      } finally {
        loading.value = false;
      }
    };

    const loadCachedWeather = () => {
      const cached = localStorage.getItem('cachedWeatherFull');
      if (cached) {
        const data = JSON.parse(cached);
        weather.value = data.weather;
        hourlyForecast.value = data.hourly || [];
      } else {
        error.value = true;
      }
    };

    const getLocation = (forceRefresh = false) => {
      if (!forceRefresh && isCacheValid()) {
        loadCachedWeather();
        return;
      }

      if (props.settings.weatherMode === 'manual' && props.settings.weatherLat && props.settings.weatherLon) {
        fetchWeather(props.settings.weatherLat, props.settings.weatherLon, props.settings.weatherCity);
        return;
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (props.settings.weatherMode === 'manual') return;

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            if (isFinite(lat) && isFinite(lon)) {
              fetchWeather(lat, lon);
            } else {
              fetchWeather(48.8566, 2.3522);
            }
          },
          () => {
            if (props.settings.weatherMode === 'manual') return;
            fetchWeather(48.8566, 2.3522);
          },
          { timeout: 5000 }
        );
      } else {
        fetchWeather(48.8566, 2.3522);
      }
    };

    onMounted(() => {
      loadCachedWeather();
      loading.value = false;
      getLocation();
    });

    watch(() => [props.settings.weatherMode, props.settings.weatherLat, props.settings.weatherLon], () => {
      getLocation(true);
    });

    return {
      weather,
      hourlyForecast,
      loading,
      error,
      formatTemperature,
      getWeatherIcon,
      getWeatherDescription
    };
  }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.weather-widget {
  min-width: 320px;
  width: 320px;
  height: 178px;
}

@media (max-width: 640px) {
  .weather-widget {
    min-width: 180px;
    width: 180px;
    height: 160px;
  }
  
  .hourly-forecast {
    display: none;
  }
  
  .weather-content {
    justify-content: center;
  }
}
</style>
