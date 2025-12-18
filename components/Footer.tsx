
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text mb-6 inline-block">Dramaus</a>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Dramaus 是全球领先的 AI 漫剧短剧创作平台，致力于用技术驱动创意，让每一个人都能轻松创作属于自己的数字影像。
            </p>
            <div className="flex space-x-4">
              {['微信', '微博', '抖音', 'Bilibili'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-500 hover:text-white hover:bg-indigo-600 transition-all text-xs">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">产品</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">AI 剧本助手</a></li>
              <li><a href="#" className="hover:text-white transition-colors">分镜工坊</a></li>
              <li><a href="#" className="hover:text-white transition-colors">素材商城</a></li>
              <li><a href="#" className="hover:text-white transition-colors">移动端 App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">支持</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="hover:text-white transition-colors">社区论坛</a></li>
              <li><a href="#" className="hover:text-white transition-colors">更新日志</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">法律</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">版权申明</a></li>
              <li><a href="#" className="hover:text-white transition-colors">创作者守则</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs gap-4">
          <p>© 2024 Dramaus AI Studio. 保留所有权利。</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">沪ICP备XXXXXXXX号-X</a>
            <a href="#" className="hover:text-gray-400">网络视听许可XXXXXXXXXX</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
