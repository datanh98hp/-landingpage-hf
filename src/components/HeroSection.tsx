import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Lock, User, Phone, Download, ArrowRight, Sparkles, MapPin, Tag } from 'lucide-react';
import { QuickConsultationForm, PageRoute } from '../types';
import { VIETNAM_CITIES } from '../data/cities';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: (packageId?: string) => void;
  onFormSubmitted: (data: QuickConsultationForm) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenApplyModal,
  onFormSubmitted
}) => {
  const [formData, setFormData] = useState<QuickConsultationForm>({
    fullName: '',
    phone: '',
    loanType: 'vay-mua-oto',
    city: 'TP. Hồ Chí Minh'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
    onFormSubmitted(formData);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white py-8 lg:py-12 border-b border-slate-200/60">
      {/* Background decorative blurred glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Bullets & CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-[#006837] text-xs font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Nền tảng P2P Lending Uy Tín</span>
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                VAY TÍN CHẤP <br className="hidden sm:inline" />
                <span className="text-[#006837]">CÁ NHÂN ONLINE</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-600 font-semibold">
                Đăng ký dễ dàng – Giải ngân nhanh chóng
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 font-medium text-slate-700 text-sm sm:text-base">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#006837] shrink-0 mt-0.5 fill-emerald-100" />
                <span><strong>Không cần</strong> tài sản bảo đảm</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#006837] shrink-0 mt-0.5 fill-emerald-100" />
                <span>Đăng ký <strong>100% online</strong></span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#006837] shrink-0 mt-0.5 fill-emerald-100" />
                <span>Lãi suất <strong>minh bạch</strong>, không phí ẩn</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#006837] shrink-0 mt-0.5 fill-emerald-100" />
                <span><strong>Giải ngân nhanh</strong> trong ngày*</span>
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenApplyModal()}
                className="bg-[#006837] hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all flex flex-col items-center justify-center group"
              >
                <div className="flex items-center space-x-1.5">
                  <span className="uppercase tracking-wide">ĐĂNG KÝ VAY NGAY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[11px] font-normal text-emerald-200">Nhận tư vấn miễn phí</span>
              </button>

              <button
                onClick={() => onNavigate('guide')}
                className="bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-600/40 font-semibold px-5 py-3.5 rounded-xl text-sm transition-all flex flex-col items-center justify-center shadow-2xs"
              >
                <div className="flex items-center space-x-1.5">
                  <Download className="w-4 h-4 text-[#006837]" />
                  <span>TẢI ỨNG DỤNG</span>
                </div>
                <span className="text-[11px] font-normal text-slate-500">Quản lý khoản vay</span>
              </button>
            </div>

            {/* Social Proof Avatars */}
            <div className="pt-2 flex items-center space-x-3 text-xs text-slate-600 font-semibold">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Khách hàng Viet P2P" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Khách hàng Viet P2P" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Khách hàng Viet P2P" />
              </div>
              <p>
                <strong className="text-slate-900 font-bold">10.000+</strong> khách hàng đã đăng ký và hài lòng
              </p>
            </div>
          </div>

          {/* Center Column: Hero Photo & Floating Badge (3.5 cols) */}
          <div className="lg:col-span-3 relative flex justify-center py-4 lg:py-0">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Green Glow Backdrop */}
              <div className="absolute inset-0 bg-emerald-600/10 rounded-3xl transform rotate-2 scale-105" />
              
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Khách hàng vay vốn Viet P2P"
                className="relative z-10 w-full h-[380px] sm:h-[420px] object-cover rounded-3xl shadow-xl border-4 border-white"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-2 right-2 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-[#006837] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">Duyệt hồ sơ nhanh</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Theo điều kiện của bạn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Form (3.5 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#006837]" />

              <h3 className="text-base sm:text-lg font-black text-slate-900 text-center uppercase tracking-tight mb-4">
                ĐĂNG KÝ TƯ VẤN VAY NHANH
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-base">Gửi yêu cầu thành công!</h4>
                  <p className="text-xs text-slate-600">
                    Chuyên viên Viet P2P sẽ liên hệ lại với bạn qua SĐT <strong>{formData.phone}</strong> trong 15 phút tới.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/30 focus:border-[#006837] font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/30 focus:border-[#006837] font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nhu cầu vay</label>
                    <select
                      value={formData.loanType}
                      onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/30 focus:border-[#006837] font-medium"
                    >
                      <option value="vay-mua-oto">Vay mua ô tô</option>
                      <option value="vay-mua-nha">Vay mua nhà</option>
                      <option value="vay-kinh-doanh">Vay kinh doanh</option>
                      <option value="vay-tieu-dung-the-chap">Vay tiêu dùng thế chấp</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tỉnh / Thành phố sinh sống</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none z-10" />
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-9 pr-8 py-2.5 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/30 focus:border-[#006837] font-medium"
                      >
                        {VIETNAM_CITIES.map((cityName) => (
                          <option key={cityName} value={cityName}>
                            {cityName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mã giới thiệu (nếu có)</label>
                    <div className="relative">
                      <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Nhập mã giới thiệu (không bắt buộc)"
                        value={formData.referralCode || ''}
                        onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/30 focus:border-[#006837] font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#006837] hover:bg-emerald-800 active:scale-98 text-white font-bold py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider shadow-md shadow-emerald-900/15 transition-all mt-2"
                  >
                    NHẬN TƯ VẤN NGAY
                  </button>

                  <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-500 pt-1">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>Thông tin của bạn được bảo mật tuyệt đối</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
