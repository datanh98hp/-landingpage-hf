import React from 'react';
import { Clock, User, ArrowLeft, Share2, Tag, Calendar } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/mockData';
import { PageRoute } from '../types';

interface NewsDetailPageProps {
  articleSlug?: string;
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: () => void;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({
  articleSlug,
  onNavigate,
  onOpenApplyModal
}) => {
  const article = NEWS_ARTICLES.find(a => a.slug === articleSlug) || NEWS_ARTICLES[0];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back navigation */}
        <button
          onClick={() => onNavigate('news')}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 hover:text-[#006837] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh sách bài viết</span>
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg space-y-6">
          <div className="space-y-3">
            <span className="inline-block bg-emerald-100 text-[#006837] text-xs font-black uppercase px-3 py-1 rounded-full">
              {article.category}
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-2 border-t border-slate-100">
              <span className="flex items-center space-x-1">
                <User className="w-4 h-4 text-[#006837]" />
                <strong className="text-slate-800">{article.author}</strong>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{article.publishedDate}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-80 object-cover rounded-2xl shadow-sm"
          />

          {/* Article HTML Content */}
          <div 
            className="prose prose-emerald max-w-none text-slate-700 text-sm leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" />
            {article.tags.map(t => (
              <span key={t} className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner Inside Article */}
        <div className="bg-[#006837] text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-4">
          <h3 className="text-xl font-black uppercase">
            CẦN VAY TÍN CHẤP DUYỆT NHANH HÔM NAY?
          </h3>
          <p className="text-xs text-emerald-100 max-w-md mx-auto">
            Đăng ký chỉ trong 3 phút, nhận ngay tư vấn ưu đãi từ Viet P2P.
          </p>
          <button
            onClick={() => onOpenApplyModal()}
            className="bg-white text-[#006837] font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md hover:bg-emerald-50 transition-colors"
          >
            ĐĂNG KÝ VAY ONLINE NGAY
          </button>
        </div>

      </div>
    </div>
  );
};
