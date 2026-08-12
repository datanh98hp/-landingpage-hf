import React from 'react';
import { ShieldCheck, Award, Users, Building2, CheckCircle2, Globe, Lock } from 'lucide-react';
import { PageRoute } from '../types';
import { FINANCIAL_PARTNERS } from '../data/mockData';

interface AboutUsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Về Viet P2P</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            NỀN TẢNG CÔNG NGHỆ TÀI CHÍNH VIET P2P
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Tiên phong trong việc kết nối nhu cầu vay vốn tín chấp cá nhân với các đối tác tài chính uy tín thông qua công nghệ P2P Lending tiên tiến.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-[#006837]">
              Sứ mệnh của chúng tôi
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Bình dân hóa tiếp cận nguồn vốn an toàn, minh bạch cho mọi người dân Việt Nam
            </h2>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Viet P2P được thành lập với mục tiêu ứng dụng công nghệ dữ liệu lớn (Big Data) và Trí tuệ nhân tạo (AI) để rút ngắn thời gian xét duyệt tín dụng từ vài ngày xuống còn vài phút, giúp hàng triệu cá nhân và hộ kinh doanh tiếp cận dòng vốn dễ dàng.
            </p>
          </div>

          <div className="bg-emerald-950 text-white p-6 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-sm uppercase text-emerald-400">
              CON SỐ ẤN TƯỢNG (2025 - 2026)
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-800">
                <strong className="text-2xl font-black text-white block">10.000+</strong>
                <span className="text-[10px] text-emerald-200">Khách hàng tin dùng</span>
              </div>
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-800">
                <strong className="text-2xl font-black text-white block">500+ Tỷ</strong>
                <span className="text-[10px] text-emerald-200">Đã giải ngân</span>
              </div>
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-800">
                <strong className="text-2xl font-black text-white block">50+</strong>
                <span className="text-[10px] text-emerald-200">Đối tác Ngân hàng & FinCo</span>
              </div>
              <div className="bg-emerald-900/60 p-3 rounded-2xl border border-emerald-800">
                <strong className="text-2xl font-black text-white block">98%</strong>
                <span className="text-[10px] text-emerald-200">Tỷ lệ hài lòng</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Technology Standard */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 uppercase">
            TIÊU CHUẨN BẢO MẬT & CÔNG NGHỆ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <Lock className="w-6 h-6 text-[#006837]" />
              <h3 className="font-extrabold text-slate-900 text-sm">Mã hóa dữ liệu 256-bit SSL</h3>
              <p className="text-slate-600">
                Toàn bộ thông tin cá nhân và tài liệu eKYC truyền tải qua cổng bảo mật tiêu chuẩn ngân hàng quốc tế.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#006837]" />
              <h3 className="font-extrabold text-slate-900 text-sm">Chứng nhận ISO 27001</h3>
              <p className="text-slate-600">
                Hệ thống quản lý an toàn thông tin được kiểm định và cấp chứng chỉ tuân thủ nghiêm ngặt.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <Globe className="w-6 h-6 text-[#006837]" />
              <h3 className="font-extrabold text-slate-900 text-sm">Thuật toán eKYC & AI Score</h3>
              <p className="text-slate-600">
                Phân tích điểm tín dụng chính xác, ngăn ngừa rủi ro giả mạo tài khoản và nợ xấu.
              </p>
            </div>
          </div>
        </div>

        {/* All Financial Partners */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 uppercase text-center">
            MẠNG LƯỚI ĐỐI TÁC TÀI CHÍNH LIÊN KẾT
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FINANCIAL_PARTNERS.map((partner, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-1">
                <span className={`text-xs font-black tracking-wider px-2 py-0.5 rounded text-white ${partner.badgeColor}`}>
                  {partner.logoText}
                </span>
                <p className="font-bold text-slate-900 text-xs">{partner.name}</p>
                <p className="text-[10px] text-slate-500">{partner.subText}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
