
import React from 'react';
import { WorkItem } from '../types';

const works: WorkItem[] = [
  { id: '1', title: '《赛博纪元：黎明》', coverUrl: 'https://picsum.photos/seed/drama1/600/800' },
  { id: '2', title: '《深空迷航》', coverUrl: 'https://picsum.photos/seed/drama2/600/800' },
  { id: '3', title: '《都市修仙指南》', coverUrl: 'https://picsum.photos/seed/drama3/600/800' },
  { id: '4', title: '《喵星人入侵》', coverUrl: 'https://picsum.photos/seed/drama4/600/800' },
  { id: '5', title: '《古宅惊魂》', coverUrl: 'https://picsum.photos/seed/drama5/600/800' },
  { id: '6', title: '《虚拟恋人》', coverUrl: 'https://picsum.photos/seed/drama6/600/800' },
  { id: '7', title: '《时间裂缝》', coverUrl: 'https://picsum.photos/seed/drama7/600/800' },
];

const WorkShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">热门漫剧作品</h2>
          <p className="text-gray-400">目前已有超过 10,000+ 部优秀作品在 Dramaus 诞生。</p>
        </div>
        <button className="hidden sm:block text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
          查看全部作品 →
        </button>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-4 sm:px-6 lg:px-8 snap-x">
          {works.map((work) => (
            <div 
              key={work.id} 
              className="flex-shrink-0 w-64 md:w-80 snap-start group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <img 
                  src={work.coverUrl} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-600/30 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-2">
                    热门连载
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for padding right */}
          <div className="flex-shrink-0 w-8" />
        </div>
        
        {/* Gradient overlays for horizontal scroll hint */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default WorkShowcase;
