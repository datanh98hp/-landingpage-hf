import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Download, Info, FileText, Landmark } from 'lucide-react';
import { LOAN_PACKAGES } from '../data/mockData';
import { PageRoute } from '../types';

interface LoanPackageDetailPageProps {
  packageId?: string;
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: (packageId?: string) => void;
}

export const LoanPackageDetailPage: React.FC<LoanPackageDetailPageProps> = ({
  packageId = 'vay-mua-oto',
  onNavigate,
  onOpenApplyModal
}) => {
  const pkg = LOAN_PACKAGES.find(p => p.id === packageId) || LOAN_PACKAGES[0];

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 inline-flex">
          <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
          <span>›</span>
          <button onClick={() => onNavigate('loans')} className="hover:text-[#006837]">Vay tín chấp</button>
          <span>›</span>
          <span className="text-[#006837] font-bold">{pkg.name}</span>
        </div>

        {/* Hero Product Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block bg-emerald-100 text-[#006837] text-xs font-black uppercase px-3 py-1 rounded-full">
              Lãi suất ưu đãi từ {pkg.interestRateFrom}% / tháng
            </span>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase">
              {pkg.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {pkg.description}
            </p>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <span className="text-[11px] text-slate-500 font-bold block uppercase">Hạn mức vay</span>
                <strong className="text-lg font-black text-[#006837]">
                  {formatVND(pkg.minAmount)} - {formatVND(pkg.maxAmount)}
                </strong>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <span className="text-[11px] text-slate-500 font-bold block uppercase">Thời hạn vay</span>
                <strong className="text-lg font-black text-slate-900">
                  {pkg.minTermMonths} - {pkg.maxTermMonths} tháng
                </strong>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-slate-500 font-bold block uppercase">Hình thức</span>
                <strong className="text-sm font-extrabold text-slate-800">
                  100% Online / eKYC
                </strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-emerald-50 rounded-3xl p-6 border border-emerald-200 text-center space-y-4">
            <h3 className="text-base font-extrabold text-[#006837] uppercase">
              ĐĂNG KÝ GÓI {pkg.name.toUpperCase()}
            </h3>
            <p className="text-xs text-slate-600">
              Duyệt tự động 15 phút - Giải ngân trực tiếp qua tài khoản ngân hàng chính chủ.
            </p>

            <button
              onClick={() => onOpenApplyModal(pkg.id)}
              className="w-full bg-[#006837] hover:bg-emerald-800 text-white font-extrabold py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider shadow-md"
            >
              NỘP HỒ SƠ VAY NGAY
            </button>
          </div>
        </div>

        {/* Deep Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Benefits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4">
              <h3 className="text-lg font-black text-slate-900 uppercase">
                LỢI ÍCH KHI VAY TẠI VIET P2P
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                {pkg.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#006837] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4">
              <h3 className="text-lg font-black text-slate-900 uppercase">
                ĐIỀU KIỆN ĐĂNG KÝ
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {pkg.eligibilityRequirements.map((req, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#006837]" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4">
              <h3 className="text-lg font-black text-slate-900 uppercase">
                HỒ SƠ CẦN CHUẨN BỊ
              </h3>
              <div className="space-y-2 text-xs text-slate-700">
                {pkg.requiredDocs.map((doc, i) => (
                  <div key={i} className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-[#006837] shrink-0" />
                    <span className="font-semibold">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4">
              <h4 className="font-extrabold text-sm uppercase text-emerald-400">Tư vấn viên trực tuyến 24/7</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bạn cần giải đáp thêm thắc mắc về điều kiện hoặc lãi suất gói vay này? Hotline hỗ trợ miễn phí:
              </p>
              <div className="text-xl font-black text-white bg-slate-800 p-3 rounded-xl text-center border border-slate-700">
                📞 1900 633 999
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
