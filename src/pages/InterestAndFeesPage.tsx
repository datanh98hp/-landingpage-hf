import React, { useState } from 'react';
import { ShieldCheck, Info, CheckCircle2, Percent, DollarSign, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface InterestAndFeesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: () => void;
}

export const InterestAndFeesPage: React.FC<InterestAndFeesPageProps> = ({ onNavigate, onOpenApplyModal }) => {
  const [loanMethod, setLoanMethod] = useState<'reducing' | 'flat'>('reducing');

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Lãi suất & phí</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            BIỂU LÃI SUẤT & PHÍ VAY TÍN CHẤP
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Viet P2P cam kết 100% minh bạch mọi khoản lãi suất và phí, tuyệt đối không có chi phí ẩn phát sinh.
          </p>
        </div>

        {/* 3 Core Transparent Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#006837] flex items-center justify-center font-black">
              0%
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm uppercase">
              KHÔNG PHÍ HỒ SƠ / PHÍ TƯ VẤN
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Viet P2P không bao giờ thu tiền trước của khách hàng dưới bất kỳ hình thức nào.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#006837] flex items-center justify-center font-black">
              1.1%
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm uppercase">
              LÃI SUẤT CẠNH TRANH TỪ 0.95%
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Mức lãi suất được niêm yết rõ ràng dựa trên gói vay và lịch sử CIC của bạn.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#006837] flex items-center justify-center font-black">
              100%
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm uppercase">
              HIỂN THỊ RÕ TRONG HỢP ĐỒNG
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Tất cả các điều khoản về phí trả chậm, phí tất toán trước hạn đều ghi rõ ràng trước khi ký.
            </p>
          </div>
        </div>

        {/* Interest Rate Table by Loan Product */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 uppercase">
            BẢNG LÃI SUẤT THAM KHẢO THEO SẢN PHẨM
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead>
                <tr className="bg-[#006837] text-white uppercase font-black">
                  <th className="p-3.5 rounded-l-xl">Sản phẩm vay</th>
                  <th className="p-3.5">Hạn mức vay</th>
                  <th className="p-3.5">Lãi suất tháng (Dư nợ giảm dần)</th>
                  <th className="p-3.5">Lãi suất năm (APR)</th>
                  <th className="p-3.5 rounded-r-xl">Phí thẩm định & Hồ sơ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Vay mua ô tô</td>
                  <td className="p-3.5">100 Triệu – 3 Tỷ</td>
                  <td className="p-3.5 text-[#006837] font-bold">0.65% – 0.95% / tháng</td>
                  <td className="p-3.5">7.8% – 11.4% / năm</td>
                  <td className="p-3.5 font-bold text-emerald-800">0 VNĐ (Miễn phí)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Vay mua nhà</td>
                  <td className="p-3.5">200 Triệu – 10 Tỷ</td>
                  <td className="p-3.5 text-[#006837] font-bold">0.55% – 0.85% / tháng</td>
                  <td className="p-3.5">6.6% – 10.2% / năm</td>
                  <td className="p-3.5 font-bold text-emerald-800">0 VNĐ (Miễn phí)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Vay kinh doanh</td>
                  <td className="p-3.5">50 Triệu – 5 Tỷ</td>
                  <td className="p-3.5 text-[#006837] font-bold">0.70% – 1.1% / tháng</td>
                  <td className="p-3.5">8.4% – 13.2% / năm</td>
                  <td className="p-3.5 font-bold text-emerald-800">0 VNĐ (Miễn phí)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Vay tiêu dùng thế chấp</td>
                  <td className="p-3.5">50 Triệu – 2 Tỷ</td>
                  <td className="p-3.5 text-[#006837] font-bold">0.75% – 1.2% / tháng</td>
                  <td className="p-3.5">9.0% – 14.4% / năm</td>
                  <td className="p-3.5 font-bold text-emerald-800">0 VNĐ (Miễn phí)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-200 text-center space-y-4">
          <h3 className="text-xl font-black text-[#006837] uppercase">
            BẠN MUỐN NHẬN BÁO GIÁ LÃI SUẤT CHÍNH XÁC THEO HỒ SƠ CỦA BẠN?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            Hệ thống AI của Viet P2P sẽ phân tích điểm tín dụng và gửi báo giá lãi suất thấp nhất cho bạn trong 5 phút.
          </p>

          <button
            onClick={() => onOpenApplyModal()}
            className="bg-[#006837] hover:bg-emerald-800 text-white font-extrabold px-8 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-md"
          >
            ĐĂNG KÝ VAY ĐỂ NHẬN BÁO GIÁ LÃI SUẤT
          </button>
        </div>

      </div>
    </div>
  );
};
