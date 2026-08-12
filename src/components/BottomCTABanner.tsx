import React from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';

interface BottomCTABannerProps {
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: () => void;
}

export const BottomCTABanner: React.FC<BottomCTABannerProps> = ({
  onNavigate,
  onOpenApplyModal
}) => {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#006837] rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl shadow-emerald-950/20 text-white">
          
          {/* Decorative background vectors */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Content left */}
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Giải ngân trong 24 giờ</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Sẵn sàng vay vốn? <br className="hidden sm:inline" />
                Đăng ký ngay hôm nay!
              </h2>

              <p className="text-sm sm:text-base text-emerald-100 font-medium max-w-xl">
                Viet P2P đồng hành cùng bạn trên mọi chặng đường tài chính với quy trình 100% online đơn giản, bảo mật.
              </p>
            </div>

            {/* Actions right */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onOpenApplyModal()}
                className="bg-white hover:bg-emerald-50 text-[#006837] font-extrabold px-6 py-4 rounded-2xl text-sm shadow-lg transition-all flex flex-col items-center justify-center group"
              >
                <div className="flex items-center space-x-1.5">
                  <span className="uppercase tracking-wider">ĐĂNG KÝ VAY NGAY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[11px] font-normal text-slate-500">Nhận tư vấn miễn phí</span>
              </button>

              <button
                onClick={() => onNavigate('guide')}
                className="bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-600/60 text-white font-bold px-6 py-4 rounded-2xl text-sm transition-all flex flex-col items-center justify-center"
              >
                <div className="flex items-center space-x-1.5">
                  <Download className="w-4 h-4 text-emerald-200" />
                  <span>TẢI ỨNG DỤNG</span>
                </div>
                <span className="text-[11px] font-normal text-emerald-200">Trên iOS & Android</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
