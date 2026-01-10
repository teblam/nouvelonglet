<template>
  <div class="absolute inset-0 w-full h-full">
    <div
      v-if="backgroundType === 'solid'"
      class="absolute inset-0 w-full h-full"
      :style="{ background: solidColor }"
    ></div>

    <div
      v-else-if="backgroundType === 'color'"
      class="absolute inset-0 w-full h-full"
      :style="{ background: `linear-gradient(${gradientAngle}deg, ${gradientColor1}, ${gradientColor2})` }"
    ></div>

    <template v-else-if="backgroundType === 'picture' && pictureUrl">
      <img
        :src="pictureUrl"
        class="absolute inset-0 w-full h-full object-cover"
        :style="{ opacity: pictureOpacity / 100 }"
      />
      <div 
        v-if="pictureBlur > 0"
        class="absolute inset-0 bg-black/20"
        :style="{ backdropFilter: `blur(${pictureBlur}px)` }"
      ></div>
    </template>

    <template v-else-if="backgroundType === 'video' && videoUrl">
      <img
        v-if="thumbnailUrl && !videoReady"
        :src="thumbnailUrl"
        class="absolute inset-0 w-full h-full object-cover"
        :style="{ opacity: opacity / 100 }"
      />
      <video
        ref="videoRef"
        :key="videoUrl"
        :src="videoUrl"
        class="absolute inset-0 w-full h-full object-cover"
        :style="{ opacity: opacity / 100 }"
        autoplay
        loop
        muted
        playsinline
        @canplaythrough="videoReady = true"
        @error="handleVideoError"
      />
      <div 
        v-if="blur > 0"
        class="absolute inset-0 bg-black/20"
        :style="{ backdropFilter: `blur(${blur}px)` }"
      ></div>
    </template>

    <div
      v-else
      class="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"
    ></div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  name: 'BackgroundVideo',
  props: {
    blur: {
      type: Number,
      default: 10
    },
    backgroundType: {
      type: String,
      default: 'color'
    },
    solidColor: {
      type: String,
      default: '#1e293b'
    },
    gradientColor1: {
      type: String,
      default: '#0f172a'
    },
    gradientColor2: {
      type: String,
      default: '#1e3a5f'
    },
    gradientAngle: {
      type: Number,
      default: 135
    },
    pictureUrl: {
      type: String,
      default: ''
    },
    pictureBlur: {
      type: Number,
      default: 0
    },
    pictureOpacity: {
      type: Number,
      default: 100
    },
    videoUrl: {
      type: String,
      default: ''
    },
    thumbnailUrl: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number,
      default: 100
    }
  },
  setup(props) {
    const videoRef = ref(null);
    const videoReady = ref(false);

    const playVideo = () => {
      if (videoRef.value) {
        videoRef.value.play().catch(() => {});
      }
    };

    const handleVideoError = () => {
      console.error('Video failed to load');
    };

    onMounted(() => {
      if (props.backgroundType === 'video') {
        playVideo();
      }
    });

    watch(() => props.videoUrl, () => {
      videoReady.value = false;
      if (props.backgroundType === 'video') {
        playVideo();
      }
    });

    return {
      videoRef,
      videoReady,
      handleVideoError
    };
  }
};
</script>
