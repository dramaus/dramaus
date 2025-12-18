
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { generateSiteImage } from '../services/gemini';

const bgImage = ref('https://picsum.photos/id/42/1920/1080');
const isLoading = ref(true);

onMounted(async () => {
  const img = await generateSiteImage("futuristic cinema director workspace with multiple holograms and AI interfaces");
  if (img) {
    bgImage.value = img;
  }
  isLoading.value = false;
});
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        :style="{ backgroundImage: `url(${bgImage})`, filter: 'brightness(0.4)' }"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-transparent to-gray-950" />
      <div class="hero-glow" />
      
      <!-- Animated Particles -->
      <div class="absolute inset-0 pointer-events-none">
        <div 
          v-for="i in 20" 
          :key="i"
          class="absolute bg-indigo-500/20 rounded-full animate-pulse"
          :style="{
            width: Math.random() * 4 + 'px',
            height: Math.random() * 4 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            animationDuration: (Math.random() * 3 + 2) + 's'
          }"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-white">
        人人都是<br />
        <span class="gradient-text">自己的导演</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        全球领先的AI漫剧短剧创作平台。集成顶级AI绘图、智能剧本助手与云端协作，让想象力瞬间跃然屏上。
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="w-full sm:w-auto px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-200 transition-all text-lg shadow-xl">
          立即体验
        </button>
        <button class="w-full sm:w-auto px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-all text-lg">
          查看演示
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-1">
        <div class="w-1 h-2 bg-gray-400 rounded-full" />
      </div>
    </div>
  </section>
</template>
