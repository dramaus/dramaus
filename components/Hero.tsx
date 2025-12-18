
import React, { useEffect, useState } from 'react';
import { generateSiteImage } from '../services/gemini';

const Hero: React.FC = () => {
  const [bgImage, setBgImage] = useState('https://picsum.photos/id/42/1920/1080');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImage = async () => {
      const img = await generateSiteImage("futuristic cinema director workspace with multiple holograms and AI interfaces");
      if (img) setBgImage(img);
      setIsLoading(false);
    };
    fetchHeroImage();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dynamic effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${bgImage})`, filter: 'brightness(0.4)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-transparent to-gray-950" />
        <div className="hero-glow" />
        
        {/* Animated Particles Simulation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-indigo-500/20 rounded-full animate-pulse"
              style={{
                width: Math.random() * 4 + 'px',
                height: Math.random() * 4 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (Math.random() * 3 + 2) + 's'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          人人都是<br />
          <span className="gradient-text">自己的导演</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          全球领先的AI漫剧短剧创作平台。集成顶级AI绘图、智能剧本助手与云端协作，让想象力瞬间跃然屏上。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-200 transition-all text-lg shadow-xl">
            立即体验
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-all text-lg">
            查看演示
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
