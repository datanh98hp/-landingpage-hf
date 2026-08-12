import React from 'react';
import { UserCheck, FileSearch, FileSignature, Landmark, ArrowRight } from 'lucide-react';

export const LoanProcessSection: React.FC = () => {
  const steps = [
    {
      stepNum: 1,
      title: 'ĐĂNG KÝ TƯ VẤN',
      desc: 'Điền thông tin online trên website hoặc ứng dụng',
      icon: UserCheck
    },
    {
      stepNum: 2,
      title: 'XÉT DUYỆT HỒ SƠ',
      desc: 'Đối tác tài chính thẩm định và liên hệ xác nhận',
      icon: FileSearch
    },
    {
      stepNum: 3,
      title: 'KÝ HỢP ĐỒNG',
      desc: 'Ký hợp đồng điện tử hoặc tại điểm giao dịch',
      icon: FileSignature
    },
    {
      stepNum: 4,
      title: 'GIẢI NGÂN',
      desc: 'Giải ngân nhanh chóng vào tài khoản của bạn',
      icon: Landmark
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">
            QUY TRÌNH VAY TÍN CHẤP 4 BƯỚC
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold">
            Đơn giản – Nhanh chóng – Minh bạch
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.stepNum} className="relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs text-center flex flex-col items-center">
                
                {/* Arrow connector for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                {/* Step Badge Number matching image */}
                <div className="w-8 h-8 rounded-full bg-[#006837] text-white text-xs font-black flex items-center justify-center mb-4 shadow-md">
                  {step.stepNum}
                </div>

                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#006837] mb-4">
                  <IconComp className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
