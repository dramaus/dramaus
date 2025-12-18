
<script setup lang="ts">
import type { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'ai-creation',
    title: '顶级AI辅助创作',
    description: '集成最新Generative AI技术，从剧本构思到分镜绘制，全程智能辅助。',
    imageUrl: 'https://picsum.photos/seed/ai-art/800/600',
    aspectRatio: '4:3'
  },
  {
    id: 'collaboration',
    title: '工业级协作能力',
    description: '支持多人实时在线协作，云端版本管理，满足专业制片团队的严苛需求。',
    imageUrl: 'https://picsum.photos/seed/collab/800/600',
    aspectRatio: '4:3'
  },
  {
    id: 'assets',
    title: '内置专业素材资源',
    description: '海量高精角色模组、动态场景与正版音效库，让你的作品更具质感。',
    imageUrl: 'https://picsum.photos/seed/assets/800/600',
    aspectRatio: '4:3'
  }
];
</script>

<template>
  <section id="features" class="py-24 bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-white">全流程专业创作工具</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          从创意萌芽到最终成片，我们为你提供了一站式的专业级解决方案。
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.id" class="group cursor-default">
          <div class="relative overflow-hidden rounded-2xl mb-6 bg-gray-900 aspect-[4/3]">
            <img 
              :src="feature.imageUrl" 
              :alt="feature.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
            {{ feature.title }}
          </h3>
          <p class="text-gray-400 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
