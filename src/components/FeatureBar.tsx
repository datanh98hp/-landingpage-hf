import React from 'react';
import { Zap, ShieldCheck, Users, Headphones } from 'lucide-react';

export const FeatureBar: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'ĐĂNG KÝ NHANH',
      subtitle: '100% trực tuyến'
    },
    {
      icon: ShieldCheck,
      title: 'BẢO MẬT TUYỆT ĐỐI',
      subtitle: 'An toàn thông tin'
    },
    {
      icon: Users,
      title: '10.000+',
      subtitle: 'Khách hàng tin tưởng'
    },
    {
      icon: Headphones,
      title: 'HỖ TRỢ 24/7',
      subtitle: 'Tư vấn mọi lúc, mọi nơi'
    }
  ];

  return (
    <section className="bg-white py-6 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center space-x-3.5 p-2 sm:p-3 ${idx !== 0 ? 'pt-4 md:pt-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#006837] shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight uppercase">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {feat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
