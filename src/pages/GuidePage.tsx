import React from 'react';
import { Smartphone, CheckCircle2, QrCode, ArrowRight, ShieldCheck, CreditCard, Landmark } from 'lucide-react';
import { PageRoute } from '../types';

interface GuidePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: () => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({ onNavigate, onOpenApplyModal }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Hướng dẫn</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            HƯỚNG DẪN ĐĂNG KÝ VAY & THANH TOÁN
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Tất cả những điều bạn cần biết từ bước nộp hồ sơ, xác thực eKYC đến cách trả nợ hàng tháng.
          </p>
        </div>

        {/* Section 1: Detailed Application Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 uppercase flex items-center space-x-2">
            <span className="w-8 h-8 rounded-full bg-[#006837] text-white flex items-center justify-center text-xs">1</span>
            <span>HƯỚNG DẪN ĐĂNG KÝ VAY ONLINE 4 BƯỚC</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-extrabold text-[#006837] text-sm">Bước 1: Điền thông tin vay</h3>
              <p className="leading-relaxed">
                Truy cập nút "Đăng ký vay ngay" trên website hoặc ứng dụng Viet P2P. Lựa chọn số tiền cần vay và thời hạn vay mong muốn.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-extrabold text-[#006837] text-sm">Bước 2: Chụp CCCD & Xác thực khuôn mặt (eKYC)</h3>
              <p className="leading-relaxed">
                Chụp 2 mặt CCCD gắn chip và quay quét khuôn mặt trực tiếp bằng điện thoại. Hệ thống AI tự động đối soát trong 30 giây.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-extrabold text-[#006837] text-sm">Bước 3: Nhận kết quả & Ký hợp đồng điện tử</h3>
              <p className="leading-relaxed">
                Sau khi hồ sơ được đối tác duyệt, bạn sẽ nhận tin nhắn SMS chứa mã OTP để ký hợp đồng điện tử trực tuyến an toàn.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-extrabold text-[#006837] text-sm">Bước 4: Nhận tiền giải ngân</h3>
              <p className="leading-relaxed">
                Tiền được chuyển thẳng vào tài khoản ngân hàng của bạn. Bạn có thể sử dụng ứng dụng Viet P2P để quản lý lịch trả nợ.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Repayment Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 uppercase flex items-center space-x-2">
            <span className="w-8 h-8 rounded-full bg-[#006837] text-white flex items-center justify-center text-xs">2</span>
            <span>HƯỚNG DẪN THANH TOÁN KHOẢN VAY HÀNG THÁNG</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 space-y-2 text-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#006837] text-white flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#006837] text-sm">CÁCH 1: Qua Ứng Dụng Viet P2P</h3>
              <p className="text-slate-600">
                Đăng nhập app Viet P2P -&gt; Chọn "Khoản vay của tôi" -&gt; Bấm "Thanh toán" qua thẻ ATM / VietQR.
              </p>
            </div>

            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 space-y-2 text-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#006837] text-white flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#006837] text-sm">CÁCH 2: Chuyển Khoản Ngân Hàng</h3>
              <p className="text-slate-600">
                Chuyển khoản đến STK Viet P2P tại VPBank / TPBank với nội dung: <code>TT [Số Hợp Đồng] [Số Điện Thoại]</code>.
              </p>
            </div>

            <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 space-y-2 text-slate-800">
              <div className="w-10 h-10 rounded-xl bg-[#006837] text-white flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#006837] text-sm">CÁCH 3: Ví Điện Tử & Điểm Thu Hộ</h3>
              <p className="text-slate-600">
                Thanh toán qua MoMo / ZaloPay hoặc tại các điểm Thế Giới Di Động, FPT Shop, Viettel Post toàn quốc.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
