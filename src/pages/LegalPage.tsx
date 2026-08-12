import React from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';
import { PageRoute } from '../types';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  onNavigate: (route: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isTerms = type === 'terms';

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">{isTerms ? 'Điều khoản sử dụng' : 'Chính sách bảo mật'}</span>
          </div>

          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
            {isTerms ? 'ĐIỀU KHOẢN & ĐIỀU KIỆN SỬ DỤNG VIET P2P' : 'CHÍNH SÁCH BẢO MẬT & XỬ LÝ DỮ LIỆU CÁ NHÂN'}
          </h1>
          <p className="text-xs text-slate-500 font-medium">Cập nhật lần cuối: 10/08/2026</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md space-y-6 text-xs text-slate-700 leading-relaxed">
          {isTerms ? (
            <>
              <h2 className="text-sm font-extrabold text-slate-900 uppercase">1. Quy định chung</h2>
              <p>
                Bằng việc truy cập và đăng ký thông tin vay trên website hoặc ứng dụng di động Viet P2P, bạn cam kết tuân thủ đầy đủ các điều khoản sử dụng được quy định dưới đây.
              </p>

              <h2 className="text-sm font-extrabold text-slate-900 uppercase">2. Quyền và trách nhiệm của người vay</h2>
              <p>
                - Khách hàng có nghĩa vụ khai báo thông tin cá nhân, CCCD và thu nhập chính xác, trung thực.<br />
                - Khách hàng có trách nhiệm thực hiện nghĩa vụ trả nợ đúng hạn theo lịch hợp đồng đã ký kết.
              </p>

              <h2 className="text-sm font-extrabold text-slate-900 uppercase">3. Cam kết dịch vụ</h2>
              <p>
                Viet P2P đóng vai trò là sàn kết nối tài chính công nghệ, đảm bảo minh bạch thông tin lãi suất và phí theo quy định pháp luật Việt Nam.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-sm font-extrabold text-slate-900 uppercase">1. Thu thập dữ liệu cá nhân</h2>
              <p>
                Chúng tôi thu thập các thông tin bao gồm: Họ tên, Số điện thoại, CCCD gắn chip, Email và Thông tin thu nhập nhằm mục đích thẩm định khả năng tín dụng theo đúng quy định.
              </p>

              <h2 className="text-sm font-extrabold text-slate-900 uppercase">2. Bảo mật dữ liệu mã hóa</h2>
              <p>
                Mọi dữ liệu cá nhân của khách hàng được lưu trữ và mã hóa theo tiêu chuẩn an toàn thông tin ISO 27001 và công nghệ mã hóa SSL 256-bit. Viet P2P cam kết KHÔNG bán hoặc tiết lộ thông tin cho bên thứ ba trái phép.
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
