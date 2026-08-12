import React, { useState } from 'react';
import { ShoppingBag, Wallet, Zap, Store, ShieldCheck, Check, ArrowRight, Search, Filter } from 'lucide-react';
import { LOAN_PACKAGES } from '../data/mockData';
import { PageRoute } from '../types';

interface LoansPageProps {
  onNavigate: (route: PageRoute, params?: { packageId?: string }) => void;
  onOpenApplyModal: (packageId?: string) => void;
}

export const LoansPage: React.FC<LoansPageProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPackages = LOAN_PACKAGES.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && pkg.id === selectedCategory;
  });

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Danh mục gói vay tín chấp</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            CÁC GÓI VAY TÍN CHẤP CÁ NHÂN VIET P2P
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Lựa chọn giải pháp vay không thế chấp phù hợp nhất với hạn mức từ 5 triệu đến 500 triệu đồng.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Tìm kiếm gói vay..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 text-xs font-medium rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]/30"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'all' ? 'bg-[#006837] text-white shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả gói vay
            </button>
            {LOAN_PACKAGES.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedCategory(p.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === p.id ? 'bg-[#006837] text-white shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loan Package Cards Detailed List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPackages.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-[#006837]">
                    Lãi suất từ {pkg.interestRateFrom}% / tháng
                  </span>
                  {pkg.badge && (
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  {pkg.name}
                </h2>

                <p className="text-xs text-slate-600 font-medium mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Specs Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-[11px] text-slate-500 font-semibold block uppercase">Hạn mức vay</span>
                    <strong className="text-base font-extrabold text-[#006837]">
                      {formatVND(pkg.minAmount)} – {formatVND(pkg.maxAmount)}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-500 font-semibold block uppercase">Thời hạn vay</span>
                    <strong className="text-base font-extrabold text-slate-900">
                      {pkg.minTermMonths} – {pkg.maxTermMonths} tháng
                    </strong>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Ưu điểm nổi bật:</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {pkg.benefits.map((b, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[#006837] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('loan-detail', { packageId: pkg.id })}
                  className="text-xs font-bold text-[#006837] hover:underline"
                >
                  Xem chi tiết gói vay →
                </button>

                <button
                  onClick={() => onOpenApplyModal(pkg.id)}
                  className="bg-[#006837] hover:bg-emerald-800 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md"
                >
                  LIÊN HỆ TƯ VẤN
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
          <h3 className="text-xl font-extrabold text-slate-900 uppercase mb-4">
            BẢNG SO SÁNH CÁC GÓI VAY TÍN CHẤP
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead>
                <tr className="bg-slate-100 text-slate-900 uppercase font-black">
                  <th className="p-3 rounded-l-xl">Tên gói vay</th>
                  <th className="p-3">Hạn mức</th>
                  <th className="p-3">Thời hạn</th>
                  <th className="p-3">Lãi suất</th>
                  <th className="p-3">Thủ tục chính</th>
                  <th className="p-3 rounded-r-xl">Thời gian duyệt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {LOAN_PACKAGES.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{p.name}</td>
                    <td className="p-3 text-[#006837] font-bold">{formatVND(p.minAmount)} - {formatVND(p.maxAmount)}</td>
                    <td className="p-3">{p.minTermMonths} - {p.maxTermMonths} tháng</td>
                    <td className="p-3">Từ {p.interestRateFrom}%/tháng</td>
                    <td className="p-3 text-slate-600">{p.requiredDocs[0]}</td>
                    <td className="p-3 font-bold text-emerald-800">24h làm việc</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
