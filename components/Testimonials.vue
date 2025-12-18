
<script setup lang="ts">
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '陈大伟',
    role: '独立漫画创作者',
    content: '以前完成一个漫剧demo需要一个月，现在用Dramaus配合AI，我三天就能出一个高质量的分镜稿。效率提升真的是革命性的。',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: '2',
    name: '林悦',
    role: '短剧导演',
    content: '协作功能太棒了！我们在剧组筹备阶段，全员在线云端对分镜，避免了大量的沟通成本。这种工业化的流程正是我们需要的。',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: '3',
    name: '张晓晨',
    role: '二次元博主',
    content: 'AI辅助生成的画质非常惊艳，完全不输专业画师的手笔。对于我们这种有创意但手绘基础薄弱的人来说，简直是福音。',
    avatar: 'https://i.pravatar.cc/150?u=3'
  }
];
</script>

<template>
  <section class="py-24 bg-gray-950 relative overflow-hidden text-white">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">来自创作者的声音</h2>
        <p class="text-gray-400">听听他们是如何在 Dramaus 释放无限可能的。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="item in testimonials" :key="item.id" class="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 transition-colors">
          <div class="flex items-center space-x-4 mb-6">
            <img :src="item.avatar" :alt="item.name" class="w-12 h-12 rounded-full border-2 border-indigo-500/30" />
            <div>
              <h4 class="font-bold text-white">{{ item.name }}</h4>
              <p class="text-sm text-gray-500">{{ item.role }}</p>
            </div>
          </div>
          <p class="text-gray-300 leading-relaxed italic">
            "{{ item.content }}"
          </p>
          <div class="mt-6 flex text-yellow-500 space-x-1">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
