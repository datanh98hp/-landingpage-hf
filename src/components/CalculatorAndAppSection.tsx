import React from 'react';
import { CheckCircle2, QrCode, Smartphone, Zap, ShieldCheck, Bell, Sparkles, Download } from 'lucide-react';
import { PageRoute } from '../types';

interface CalculatorAndAppSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: (amount?: number, term?: number) => void;
}

export const CalculatorAndAppSection: React.FC<CalculatorAndAppSectionProps> = () => {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 overflow-hidden relative">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow inside card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#006837]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Trải nghiệm ứng dụng di động</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Tải Ứng Dụng <span className="text-emerald-400">Viet P2P</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                Nộp hồ sơ vay, quản lý hợp đồng và theo dõi lịch trả nợ ngay trên điện thoại thông minh mọi lúc, mọi nơi. Duyệt hồ sơ tự động 24/7 chỉ với CCCD.
              </p>

              {/* Grid 4 Key App Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 bg-slate-800/60 border border-slate-700/60 p-3.5 rounded-2xl">
                  <div className="p-2 bg-[#006837]/30 text-emerald-400 rounded-xl shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Duyệt hồ sơ 15 phút</h4>
                    <p className="text-[11px] text-slate-400">Đăng ký 100% online qua công nghệ eKYC AI</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-800/60 border border-slate-700/60 p-3.5 rounded-2xl">
                  <div className="p-2 bg-[#006837]/30 text-emerald-400 rounded-xl shrink-0">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Thông báo real-time</h4>
                    <p className="text-[11px] text-slate-400">Cập nhật tiến độ giải ngân & nhắc lịch nợ</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-800/60 border border-slate-700/60 p-3.5 rounded-2xl">
                  <div className="p-2 bg-[#006837]/30 text-emerald-400 rounded-xl shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Bảo mật sinh trắc học</h4>
                    <p className="text-[11px] text-slate-400">Đăng nhập nhanh bằng Face ID / Vân tay</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-800/60 border border-slate-700/60 p-3.5 rounded-2xl">
                  <div className="p-2 bg-[#006837]/30 text-emerald-400 rounded-xl shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Quản lý minh bạch</h4>
                    <p className="text-[11px] text-slate-400">Tra cứu chi tiết dư nợ và lịch sử thanh toán</p>
                  </div>
                </div>
              </div>

              {/* Download CTA: Buttons + QR Code */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-2xl transition-all shadow-lg shadow-emerald-900/30 hover:scale-[1.02]">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.12C19.34,12.59 19.34,11.41 18.81,10.88L16.81,8.88L14.75,10.94L14.75,13.06L16.81,15.12M4.88,1.12L15.69,11.94L13.63,14L4.88,1.12M4.88,22.88L13.63,10L15.69,12.06L4.88,22.88Z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="block text-[9px] uppercase tracking-wider text-emerald-200 font-semibold">TẢI TRÊN</span>
                      <span className="block text-sm font-black">Google Play</span>
                    </div>
                  </button>

                  <button className="flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-2xl transition-all shadow-lg shadow-emerald-900/30 hover:scale-[1.02]">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <span className="block text-[9px] uppercase tracking-wider text-emerald-200 font-semibold">TẢI TRÊN</span>
                      <span className="block text-sm font-black">App Store</span>
                    </div>
                  </button>
                </div>

                {/* QR Code */}
                <div className="flex items-center space-x-3 bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700/80">
                  <div className="w-14 h-14 bg-white rounded-xl p-1 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2,2H10V10H2V2M4,4V8H8V4H4M11,2H13V4H11V2M14,2H22V10H14V2M16,4V8H20V4H16M2,14H10V22H2V14M4,16V20H8V16H4M11,6H13V8H11V6M11,10H13V12H11V10M11,14H13V16H11V14M11,18H13V22H11V18M14,11H16V13H14V11M18,11H20V13H18V11M14,14H18V16H14V14M18,16H22V18H18V16M14,18H16V22H14V18M18,20H22V22H18V20Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Quét mã QR</p>
                    <p className="text-[10px] text-slate-400">Tải app tức thì trên điện thoại</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mockup Display (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              {/* Phone Frame */}
              <div className="w-64 sm:w-72 h-[460px] bg-slate-950 rounded-[40px] p-3 shadow-2xl ring-2 ring-slate-700 flex flex-col justify-between overflow-hidden relative">
                {/* Speaker Notch */}
                <div className="w-24 h-4 bg-slate-950 rounded-b-2xl mx-auto absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Simulated App Screen */}
                <div className="bg-gradient-to-b from-slate-900 to-emerald-950 w-full h-full rounded-[32px] p-4 text-white flex flex-col justify-between pt-8 relative overflow-hidden">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-[#006837] flex items-center justify-center font-black text-xs">P2P</div>
                      <div>
                        <p className="font-bold text-xs leading-none">Viet P2P App</p>
                        <p className="text-[9px] text-emerald-400">Công nghệ tài chính 4.0</p>
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[9px] px-2 py-0.5 rounded-full font-bold">Online</span>
                  </div>

                  {/* Active Loan Card */}
                  <div className="bg-[#006837] rounded-2xl p-3.5 space-y-2 shadow-lg relative overflow-hidden">
                    <div className="flex justify-between items-center text-[10px] text-emerald-200">
                      <span>Khoản vay của bạn</span>
                      <span className="font-bold bg-white/20 px-1.5 py-0.5 rounded">Đang duyệt</span>
                    </div>
                    <div className="text-xl font-black text-white">
                      500.000.000 đ
                    </div>
                    <div className="text-[10px] text-emerald-100 flex justify-between pt-1 border-t border-emerald-600/50">
                      <span>Thời hạn: 36 tháng</span>
                      <span>Lãi suất: 0.65%/Tháng</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons Grid */}
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80 text-center font-bold">
                      <p className="text-emerald-400">Nộp hồ sơ vay</p>
                      <p className="text-[8px] text-slate-400">Chỉ cần CCCD</p>
                    </div>
                    <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/80 text-center font-bold">
                      <p className="text-emerald-400">Lịch trả nợ</p>
                      <p className="text-[8px] text-slate-400">Tự động nhắc lịch</p>
                    </div>
                  </div>

                  {/* Bottom Success Banner */}
                  <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-xl p-2.5 text-[10px] text-center font-bold flex items-center justify-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Giải ngân tức thì qua tài khoản ngân hàng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

