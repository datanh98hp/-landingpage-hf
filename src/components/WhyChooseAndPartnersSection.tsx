import React from 'react';
import { Lightbulb, Shield, Handshake, Headphones, ArrowRight, Building2 } from 'lucide-react';
import { FINANCIAL_PARTNERS } from '../data/mockData';
import { PageRoute } from '../types';

interface WhyChooseAndPartnersSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const WhyChooseAndPartnersSection: React.FC<WhyChooseAndPartnersSectionProps> = ({
  onNavigate
}) => {
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Why Choose Viet P2P (4 cols) */}
          <div className="lg:col-span-4 bg-[#006837] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-emerald-900/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-6">
                VÌ SAO CHỌN VIET P2P?
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-emerald-200 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">Minh bạch:</h4>
                    <p className="text-emerald-100 font-medium">Lãi suất, phí rõ ràng</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-emerald-200 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">An toàn:</h4>
                    <p className="text-emerald-100 font-medium">Bảo mật thông tin tuyệt đối</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-emerald-200 mt-0.5">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">Đối tác uy tín:</h4>
                    <p className="text-emerald-100 font-medium">Kết nối với nhiều đơn vị tài chính</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 text-emerald-200 mt-0.5">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">Hỗ trợ tận tâm:</h4>
                    <p className="text-emerald-100 font-medium">Tư vấn chuyên nghiệp 24/7.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-800/80">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-200 hover:text-white transition-colors"
              >
                <span>Tìm hiểu về công nghệ P2P của Viet P2P</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Column: Financial Partners (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-center mb-6">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                  ĐỐI TÁC TÀI CHÍNH
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Kết nối với các đối tác tài chính uy tín
                </p>
              </div>

              {/* Partner Badges Grid matching image */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FINANCIAL_PARTNERS.slice(0, 6).map((partner, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-3 border border-slate-200/80 flex flex-col items-center justify-center text-center shadow-2xs hover:border-emerald-500 transition-colors"
                  >
                    <span className={`text-xs font-black tracking-wider px-2 py-0.5 rounded text-white ${partner.badgeColor} mb-1`}>
                      {partner.logoText}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium line-clamp-1">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4 border-t border-slate-200">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#006837] hover:underline"
              >
                <span>Xem tất cả đối tác</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Stats Grid (3 cols) */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 text-center flex flex-col justify-center">
              <strong className="text-2xl sm:text-3xl font-black text-[#006837]">10.000+</strong>
              <span className="text-xs font-bold text-slate-600 mt-1">Khách hàng tin tưởng</span>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 text-center flex flex-col justify-center">
              <strong className="text-2xl sm:text-3xl font-black text-[#006837]">500+ tỷ</strong>
              <span className="text-xs font-bold text-slate-600 mt-1">Giải ngân thành công</span>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 text-center flex flex-col justify-center">
              <strong className="text-2xl sm:text-3xl font-black text-[#006837]">50+</strong>
              <span className="text-xs font-bold text-slate-600 mt-1">Đối tác tài chính</span>
            </div>

            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 text-center flex flex-col justify-center">
              <strong className="text-2xl sm:text-3xl font-black text-[#006837]">98%</strong>
              <span className="text-xs font-bold text-slate-600 mt-1">Tỷ lệ hài lòng khách hàng</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
