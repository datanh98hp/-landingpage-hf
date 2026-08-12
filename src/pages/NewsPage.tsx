import React, { useState } from 'react';
import { Clock, User, Tag, ArrowRight, Search } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/mockData';
import { PageRoute } from '../types';

interface NewsPageProps {
  onNavigate: (route: PageRoute, params?: { articleSlug?: string }) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredArticles = NEWS_ARTICLES.filter(a => {
    if (selectedCat === 'all') return true;
    return a.category === selectedCat;
  });

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Tin tức & Cẩm nang</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            CẨM NANG TÀI CHÍNH & TIN TỨC VIET P2P
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Cập nhật kiến thức quản lý tài chính cá nhân, mẹo duyệt hồ sơ vay nhanh và thông tin gói vay mới nhất.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['all', 'Cẩm nang vay', 'Tài chính cá nhân', 'Tin tức Viet P2P'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCat === cat ? 'bg-[#006837] text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'Tất cả bài viết' : cat}
            </button>
          ))}
        </div>

        {/* Articles List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <article
              key={article.id}
              onClick={() => onNavigate('news-detail', { articleSlug: article.slug })}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#006837] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.publishedDate}</span>
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-base font-bold text-slate-900 group-hover:text-[#006837] transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 font-medium line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#006837]">
                <span>Đọc tiếp →</span>
                <span className="text-[10px] text-slate-400 font-normal">{article.author}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
