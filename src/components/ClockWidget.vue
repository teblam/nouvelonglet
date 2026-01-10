<template>
  <div class="clock-widget bg-gradient-to-br from-black/50 to-black/35 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
    <div v-if="clockType === 'digital'" class="text-white text-center px-4">
      <div class="font-light tracking-tight tabular-nums" :class="clockFormat === '12h' ? 'digital-time-12h' : 'digital-time'">{{ time }}</div>
      <div class="text-xs opacity-70 mt-1.5">{{ date }}</div>
    </div>

    <div v-else class="relative w-[120px] h-[120px]">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        
        <g v-for="i in 12" :key="i">
          <line
            :x1="50 + 40 * Math.cos((i - 3) * 30 * Math.PI / 180)"
            :y1="50 + 40 * Math.sin((i - 3) * 30 * Math.PI / 180)"
            :x2="50 + 44 * Math.cos((i - 3) * 30 * Math.PI / 180)"
            :y2="50 + 44 * Math.sin((i - 3) * 30 * Math.PI / 180)"
            stroke="rgba(255,255,255,0.6)"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>

        <line
          :x1="50"
          :y1="50"
          :x2="50 + 22 * Math.cos((hourAngle - 90) * Math.PI / 180)"
          :y2="50 + 22 * Math.sin((hourAngle - 90) * Math.PI / 180)"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
        />

        <line
          :x1="50"
          :y1="50"
          :x2="50 + 32 * Math.cos((minuteAngle - 90) * Math.PI / 180)"
          :y2="50 + 32 * Math.sin((minuteAngle - 90) * Math.PI / 180)"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />

        <line
          :x1="50"
          :y1="50"
          :x2="50 + 36 * Math.cos((secondAngle - 90) * Math.PI / 180)"
          :y2="50 + 36 * Math.sin((secondAngle - 90) * Math.PI / 180)"
          stroke="rgba(239,68,68,0.9)"
          stroke-width="1"
          stroke-linecap="round"
        />

        <circle cx="50" cy="50" r="4" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'ClockWidget',
  props: {
    clockType: {
      type: String,
      default: 'digital'
    },
    clockFormat: {
      type: String,
      default: '24h'
    }
  },
  setup(props) {
    const { locale } = useI18n();
    const now = ref(new Date());
    let interval = null;

    const time = computed(() => {
      let h = now.value.getHours();
      const m = now.value.getMinutes().toString().padStart(2, '0');
      
      if (props.clockFormat === '12h') {
        const period = h >= 12 ? 'PM' : 'AM';
        h = h % 12 || 12;
        return `${h}:${m} ${period}`;
      }
      return `${h.toString().padStart(2, '0')}:${m}`;
    });

    const date = computed(() => {
      return now.value.toLocaleDateString(locale.value, { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      });
    });

    const hours = computed(() => now.value.getHours());
    const minutes = computed(() => now.value.getMinutes());
    const seconds = computed(() => now.value.getSeconds());

    const hourAngle = computed(() => (hours.value % 12) * 30 + minutes.value * 0.5);
    const minuteAngle = computed(() => minutes.value * 6 + seconds.value * 0.1);
    const secondAngle = computed(() => seconds.value * 6);

    onMounted(() => {
      interval = setInterval(() => {
        now.value = new Date();
      }, 1000);
    });

    onUnmounted(() => {
      if (interval) clearInterval(interval);
    });

    return {
      time,
      date,
      hourAngle,
      minuteAngle,
      secondAngle
    };
  }
};
</script>

<style scoped>
.clock-widget {
  width: 180px;
  height: 178px;
}

.digital-time {
  font-size: 3rem;
}

.digital-time-12h {
  font-size: 2.25rem;
}

@media (max-width: 640px) {
  .clock-widget {
    width: 140px;
    height: 160px;
  }
  
  .digital-time {
    font-size: 2.25rem;
  }
  
  .digital-time-12h {
    font-size: 1.75rem;
  }
}
</style>
