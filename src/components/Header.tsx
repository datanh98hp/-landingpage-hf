import React, { useState } from 'react';
import { Download, ShieldCheck, Menu, X, ChevronDown, Search, Award } from 'lucide-react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute, params?: { packageId?: string; articleSlug?: string }) => void;
  onOpenApplyModal: (packageId?: string) => void;
  onOpenSeoDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenApplyModal,
  onOpenSeoDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navLinks: { label: string; route: PageRoute; hasDropdown?: boolean }[] = [
    { label: 'Vay tín chấp', route: 'loans', hasDropdown: true },
    { label: 'Điều kiện vay', route: 'eligibility' },
    { label: 'Lãi suất & phí', route: 'interest-fees' },
    { label: 'Hướng dẫn', route: 'guide' },
    { label: 'Về Viet P2P', route: 'about' },
    { label: 'Tin tức', route: 'news' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs transition-all">
      {/* Top micro bar */}
      <div className="bg-[#006837] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Nền tảng kết nối vay tín chấp P2P 100% Online</span>
            </span>
            <span className="hidden md:inline-block text-emerald-200">|</span>
            <span className="hidden md:inline-block text-emerald-100">
              Hotline tư vấn 24/7: <strong className="text-white">1900 633 999</strong>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenSeoDrawer}
              className="flex items-center space-x-1 text-[11px] bg-emerald-800/80 hover:bg-emerald-800 px-2 py-0.5 rounded text-emerald-100 font-medium transition-colors"
              title="Xem Công cụ Tối ưu SEO & JSON-LD"
            >
              <Award className="w-3 h-3 text-amber-300" />
              <span>SEO Inspector</span>
            </button>
            <span className="text-emerald-200">|</span>
            <span className="text-emerald-100 hidden sm:inline">Duyệt hồ sơ siêu tốc</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#006837] flex items-center justify-center text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V7l-9-5zm-2 16l-4-4 1.41-1.41L10 15.17l6.59-6.59L18 10l-8 8z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="text-xl font-extrabold tracking-tight text-[#006837]">Viet P2P</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-none">Vay tín chấp cá nhân</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm text-slate-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentRoute === 'home' ? 'text-[#006837] bg-emerald-50' : 'hover:text-[#006837] hover:bg-slate-100'
            }`}
          >
            Trang chủ
          </button>

          {/* Vay tín chấp (with Dropdown) */}
          <div className="relative group">
            <button
              onClick={() => handleNavClick('loans')}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              className={`px-3 py-2 rounded-lg flex items-center space-x-1 transition-colors ${
                currentRoute === 'loans' || currentRoute === 'loan-detail' ? 'text-[#006837] bg-emerald-50' : 'hover:text-[#006837] hover:bg-slate-100'
              }`}
            >
              <span>Vay tín chấp</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>

            {/* Dropdown menu */}
            <div className="absolute left-0 top-full pt-2 w-64 hidden group-hover:block z-50">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 space-y-1">
                <button
                  onClick={() => handleNavClick('loans')}
                  className="w-full text-left px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-slate-600"
                >
                  Tất cả các gói vay →
                </button>
                <div className="h-px bg-slate-100 my-1" />
                <button
                  onClick={() => { onNavigate('loan-detail', { packageId: 'vay-mua-oto' }); setProductsDropdownOpen(false); }}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 text-sm font-semibold flex items-center space-x-2 group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:scale-125 transition-transform" />
                  <span>Vay mua ô tô</span>
                </button>
                <button
                  onClick={() => { onNavigate('loan-detail', { packageId: 'vay-mua-nha' }); setProductsDropdownOpen(false); }}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 text-sm font-semibold flex items-center space-x-2 group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:scale-125 transition-transform" />
                  <span>Vay mua nhà</span>
                </button>
                <button
                  onClick={() => { onNavigate('loan-detail', { packageId: 'vay-kinh-doanh' }); setProductsDropdownOpen(false); }}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 text-sm font-semibold flex items-center space-x-2 group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:scale-125 transition-transform" />
                  <span>Vay kinh doanh</span>
                </button>
                <button
                  onClick={() => { onNavigate('loan-detail', { packageId: 'vay-tieu-dung-the-chap' }); setProductsDropdownOpen(false); }}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 text-sm font-semibold flex items-center space-x-2 group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover/item:scale-125 transition-transform" />
                  <span>Vay tiêu dùng thế chấp</span>
                </button>
              </div>
            </div>
          </div>

          {/* <button
            onClick={() => handleNavClick('guide')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentRoute === 'guide' ? 'text-[#006837] bg-emerald-50' : 'hover:text-[#006837] hover:bg-slate-100'
            }`}
          >
            Hướng dẫn
          </button> */}

          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentRoute === 'about' ? 'text-[#006837] bg-emerald-50' : 'hover:text-[#006837] hover:bg-slate-100'
            }`}
          >
            Về Viet P2P
          </button>

          <button
            onClick={() => handleNavClick('news')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentRoute === 'news' || currentRoute === 'news-detail' ? 'text-[#006837] bg-emerald-50' : 'hover:text-[#006837] hover:bg-slate-100'
            }`}
          >
            Tin tức
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('guide')}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl border border-emerald-600/40 text-emerald-800 hover:bg-emerald-50 font-semibold text-xs transition-all shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 text-[#006837]" />
            <div className="text-left leading-tight">
              <span className="block font-bold">Tải ứng dụng</span>
              <span className="block text-[9px] text-slate-500 font-normal">Quản lý khoản vay</span>
            </div>
          </button>

          <button
            onClick={() => onOpenApplyModal()}
            className="bg-[#006837] hover:bg-emerald-800 active:scale-98 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wide transition-all shadow-md shadow-emerald-900/15 flex items-center space-x-1"
          >
            <span>ĐĂNG KÝ VAY NGAY</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => onOpenApplyModal()}
            className="bg-[#006837] text-white px-3 py-1.5 rounded-lg text-xs font-bold"
          >
            VAY NGAY
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-[#006837] hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1 font-semibold text-slate-800">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2 rounded-lg ${currentRoute === 'home' ? 'bg-emerald-50 text-[#006837]' : ''}`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => handleNavClick('loans')}
              className={`text-left px-3 py-2 rounded-lg ${currentRoute === 'loans' ? 'bg-emerald-50 text-[#006837]' : ''}`}
            >
              Vay tín chấp
            </button>
            {/* <button
              onClick={() => handleNavClick('guide')}
              className={`text-left px-3 py-2 rounded-lg ${currentRoute === 'guide' ? 'bg-emerald-50 text-[#006837]' : ''}`}
            >
              Hướng dẫn
            </button> */}
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3 py-2 rounded-lg ${currentRoute === 'about' ? 'bg-emerald-50 text-[#006837]' : ''}`}
            >
              Về Viet P2P
            </button>
            <button
              onClick={() => handleNavClick('news')}
              className={`text-left px-3 py-2 rounded-lg ${currentRoute === 'news' ? 'bg-emerald-50 text-[#006837]' : ''}`}
            >
              Tin tức & Cẩm nang
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3 py-2 rounded-lg ${currentRoute === 'contact' ? 'bg-emerald-50 text-[#006837]' : ''}`}
            >
              Liên hệ
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => onOpenApplyModal()}
              className="w-full bg-[#006837] text-white text-center py-3 rounded-xl font-bold text-sm uppercase shadow-md"
            >
              ĐĂNG KÝ VAY NGAY
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
