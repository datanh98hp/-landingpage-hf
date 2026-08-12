import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';
import { PageRoute } from '../types';

interface FAQSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Giải đáp thắc mắc phổ biến của khách hàng khi đăng ký vay
            </p>
          </div>

          <button
            onClick={() => onNavigate('faq')}
            className="mt-4 sm:mt-0 inline-flex items-center space-x-1.5 text-xs font-extrabold text-[#006837] hover:underline"
          >
            <span>Xem tất cả câu hỏi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Accordion 2 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQ_ITEMS.slice(0, 6).map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-3 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-[#006837] shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#006837]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in-50 duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
