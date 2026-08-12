import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Liên hệ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            LIÊN HỆ VỚI VIET P2P
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Đội ngũ tư vấn tài chính luôn sẵn sàng giải đáp thắc mắc của bạn 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 bg-[#006837] text-white rounded-3xl p-8 space-y-6 shadow-xl">
            <h2 className="text-xl font-black uppercase">THÔNG TIN LIÊN HỆ CHÍNH THỨC</h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-white font-bold">Trụ sở chính:</strong>
                  <p className="text-emerald-100">Tầng 12, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, Phường 25, Q. Bình Thạnh, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-white font-bold">Hotline tư vấn 24/7:</strong>
                  <p className="text-emerald-100 font-extrabold text-base">1900 633 999</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-white font-bold">Email hỗ trợ:</strong>
                  <p className="text-emerald-100">cskh@viet-p2p.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-white font-bold">Giờ làm việc:</strong>
                  <p className="text-emerald-100">8:00 – 20:00 (Từ Thứ 2 đến Chủ Nhật)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Callback Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md">
            <h2 className="text-xl font-extrabold text-slate-900 uppercase mb-4">GỬI YÊU CẦU TƯ VẤN TRỰC TIẾP</h2>

            {submitted ? (
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#006837] mx-auto" />
                <h3 className="font-bold text-slate-900 text-base">Cảm ơn bạn đã gửi tin nhắn!</h3>
                <p className="text-xs text-slate-600">
                  Chuyên viên Viet P2P sẽ gọi lại số điện thoại <strong>{phone}</strong> trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Số điện thoại *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nội dung thắc mắc / Cần hỗ trợ</label>
                  <textarea
                    rows={4}
                    placeholder="Tôi muốn hỏi thông tin điều kiện vay theo lương..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#006837] hover:bg-emerald-800 text-white font-extrabold py-3.5 px-4 rounded-xl uppercase tracking-wider text-xs shadow-md"
                >
                  GỬI YÊU CẦU NGAY
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
