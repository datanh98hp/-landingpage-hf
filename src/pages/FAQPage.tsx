import React, { useState } from 'react';
import { Search, HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';
import { PageRoute } from '../types';

interface FAQPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) || 
                          item.answer.toLowerCase().includes(search.toLowerCase());
    if (activeCategory === 'all') return matchesSearch;
    return matchesSearch && item.category === activeCategory;
  });

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Câu hỏi thường gặp</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            TRUNG TÂM TRỢ GIÚP & HỎI ĐÁP VIET P2P
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Tìm kiếm phản hồi chính xác nhất cho mọi thắc mắc về hồ sơ vay tín chấp.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Nhập từ khóa câu hỏi (ví dụ: lãi suất, nợ xấu, CCCD)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white text-sm font-medium rounded-2xl border border-slate-200/90 shadow-md focus:outline-none focus:ring-2 focus:ring-[#006837]"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'Tất cả câu hỏi' },
            { id: 'general', label: 'Tổng quan' },
            { id: 'interest', label: 'Lãi suất & Phí' },
            { id: 'approval', label: 'Xét duyệt hồ sơ' },
            { id: 'repayment', label: 'Thanh toán khoản vay' },
            { id: 'security', label: 'Bảo mật thông tin' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id ? 'bg-[#006837] text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map(item => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full text-left p-5 flex items-center justify-between space-x-3 font-bold text-slate-900 text-sm hover:bg-slate-50"
                >
                  <span className="flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-[#006837] shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#006837]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
