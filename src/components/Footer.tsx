import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, Facebook, Youtube } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute, params?: { packageId?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#002d18] text-slate-300 text-xs pt-12 pb-8 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Brand & Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-emerald-900/60 gap-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#006837] shadow-md">
              <svg className="w-6 h-6 fill-current text-[#006837]" viewBox="0 0 24 24">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V7l-9-5zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight">Viet P2P</span>
              <p className="text-[10px] text-emerald-300 font-medium">Vay tín chấp cá nhân</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-slate-400 font-bold text-xs mr-1">Kết nối với chúng tôi:</span>
            <a href="#facebook" className="w-8 h-8 rounded-full bg-emerald-900/80 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#zalo" className="w-8 h-8 rounded-full bg-emerald-900/80 hover:bg-emerald-700 text-white flex items-center justify-center font-bold text-[10px] transition-colors">
              Zalo
            </a>
            <a href="#youtube" className="w-8 h-8 rounded-full bg-emerald-900/80 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 5 Footer Columns Grid matching image */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 leading-relaxed">
          
          {/* Col 1: SẢN PHẨM */}
          <div>
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider mb-3">SẢN PHẨM</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => onNavigate('loan-detail', { packageId: 'vay-mua-oto' })} className="hover:text-emerald-300 transition-colors">
                  Vay mua ô tô
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('loan-detail', { packageId: 'vay-mua-nha' })} className="hover:text-emerald-300 transition-colors">
                  Vay mua nhà
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('loan-detail', { packageId: 'vay-kinh-doanh' })} className="hover:text-emerald-300 transition-colors">
                  Vay kinh doanh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('loan-detail', { packageId: 'vay-tieu-dung-the-chap' })} className="hover:text-emerald-300 transition-colors">
                  Vay tiêu dùng thế chấp
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: HỖ TRỢ */}
          <div>
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider mb-3">HỖ TRỢ</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => onNavigate('eligibility')} className="hover:text-emerald-300 transition-colors">
                  Điều kiện vay
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('eligibility')} className="hover:text-emerald-300 transition-colors">
                  Hồ sơ vay
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('interest-fees')} className="hover:text-emerald-300 transition-colors">
                  Lãi suất & phí
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guide')} className="hover:text-emerald-300 transition-colors">
                  Hướng dẫn vay
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: VỀ CHÚNG TÔI */}
          <div>
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider mb-3">VỀ CHÚNG TÔI</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-emerald-300 transition-colors">
                  Giới thiệu Viet P2P
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-emerald-300 transition-colors">
                  Tin tức & Cẩm nang
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-emerald-300 transition-colors">
                  Câu hỏi thường gặp
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-emerald-300 transition-colors">
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: LIÊN HỆ */}
          <div>
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider mb-3">LIÊN HỆ</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white text-sm">1900 633 999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>cskh@viet-p2p.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>8:00 – 20:00 (T2 – CN)</span>
              </li>
            </ul>
          </div>

          {/* Col 5: TẢI ỨNG DỤNG NGAY */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider mb-3">TẢI ỨNG DỤNG NGAY</h4>
            <div className="flex items-center space-x-3 bg-emerald-950 p-2.5 rounded-2xl border border-emerald-900">
              <div className="w-14 h-14 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2,2H10V10H2V2M4,4V8H8V4H4M11,2H13V4H11V2M14,2H22V10H14V2M16,4V8H20V4H16M2,14H10V22H2V14M4,16V20H8V16H4M11,6H13V8H11V6M11,10H13V12H11V10M11,14H13V16H11V14M11,18H13V22H11V18M14,11H16V13H14V11M18,11H20V13H18V11M14,14H18V16H14V14M18,16H22V18H18V16M14,18H16V22H14V18M18,20H22V22H18V20Z" />
                </svg>
              </div>
              <div className="space-y-1 text-[10px]">
                <span className="block text-emerald-200 font-bold">iOS & Android</span>
                <span className="block text-slate-400">Quét mã QR để tải ứng dụng Viet P2P</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar matching image */}
        <div className="pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© 2025 Viet P2P. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => onNavigate('terms')} className="hover:text-emerald-300 transition-colors">
              Điều khoản sử dụng
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('privacy')} className="hover:text-emerald-300 transition-colors">
              Chính sách bảo mật
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-emerald-300 transition-colors">
              Chính sách xử lý dữ liệu cá nhân
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
