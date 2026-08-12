import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, HelpCircle, FileCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface EligibilityPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenApplyModal: () => void;
}

export const EligibilityPage: React.FC<EligibilityPageProps> = ({ onNavigate, onOpenApplyModal }) => {
  // Quiz State
  const [ageRange, setAgeRange] = useState<'valid' | 'invalid' | ''>('');
  const [hasCccd, setHasCccd] = useState<'yes' | 'no' | ''>('');
  const [incomeType, setIncomeType] = useState<'salary' | 'business' | 'none' | ''>('');
  const [cicStatus, setCicStatus] = useState<'clean' | 'bad' | ''>('');

  const isEligible = ageRange === 'valid' && hasCccd === 'yes' && (incomeType === 'salary' || incomeType === 'business') && cicStatus === 'clean';

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006837]">Trang chủ</button>
            <span>›</span>
            <span className="text-[#006837] font-bold">Điều kiện vay</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
            ĐIỀU KIỆN & HỒ SƠ VAY TÍN CHẤP
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Kiểm tra ngay khả năng được xét duyệt khoản vay của bạn chỉ trong 1 phút!
          </p>
        </div>

        {/* Interactive 1-Minute Eligibility Checker Quiz */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl max-w-3xl mx-auto space-y-6">
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#006837]">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base uppercase">
                CÔNG CỤ TỰ ĐỘNG KIỂM TRA ĐIỀU KIỆN VAY
              </h3>
              <p className="text-xs text-slate-500">Trả lời 4 câu hỏi đơn giản để kiểm tra tỷ lệ duyệt hồ sơ</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Q1: Age */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <label className="font-bold text-slate-800 block">1. Độ tuổi của bạn?</label>
              <select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value as any)}
                className="w-full p-2.5 bg-white rounded-xl border border-slate-200 font-medium"
              >
                <option value="">-- Chọn độ tuổi --</option>
                <option value="valid">Từ 20 tuổi đến 60 tuổi</option>
                <option value="invalid">Dưới 20 tuổi hoặc trên 60 tuổi</option>
              </select>
            </div>

            {/* Q2: CCCD */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <label className="font-bold text-slate-800 block">2. Bạn có CCCD gắn chip chính chủ?</label>
              <select
                value={hasCccd}
                onChange={(e) => setHasCccd(e.target.value as any)}
                className="w-full p-2.5 bg-white rounded-xl border border-slate-200 font-medium"
              >
                <option value="">-- Chọn trạng thái --</option>
                <option value="yes">Có CCCD gắn chip còn hiệu lực</option>
                <option value="no">Không có / Đã hết hạn</option>
              </select>
            </div>

            {/* Q3: Income */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <label className="font-bold text-slate-800 block">3. Nguồn thu nhập hàng tháng?</label>
              <select
                value={incomeType}
                onChange={(e) => setIncomeType(e.target.value as any)}
                className="w-full p-2.5 bg-white rounded-xl border border-slate-200 font-medium"
              >
                <option value="">-- Chọn hình thức thu nhập --</option>
                <option value="salary">Đi làm hưởng lương (Lương ck / Tiền mặt &gt; 4.5Tr)</option>
                <option value="business">Kinh doanh / Tiểu thương / Bán hàng online</option>
                <option value="none">Không có thu nhập cố định</option>
              </select>
            </div>

            {/* Q4: CIC */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <label className="font-bold text-slate-800 block">4. Lịch sử tín dụng CIC?</label>
              <select
                value={cicStatus}
                onChange={(e) => setCicStatus(e.target.value as any)}
                className="w-full p-2.5 bg-white rounded-xl border border-slate-200 font-medium"
              >
                <option value="">-- Chọn lịch sử CIC --</option>
                <option value="clean">Không có nợ xấu (Trả đúng hạn)</option>
                <option value="bad">Đang có nợ xấu quá hạn trên 90 ngày</option>
              </select>
            </div>
          </div>

          {/* Result box */}
          {ageRange && hasCccd && incomeType && cicStatus && (
            <div className={`p-5 rounded-2xl border text-center space-y-2 animate-in fade-in duration-200 ${
              isEligible ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}>
              <div className="flex items-center justify-center space-x-2 font-black text-base uppercase">
                {isEligible ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-[#006837]" />
                    <span>XIN CHÚC MỪNG! HỒ SƠ CỦA BẠN ĐỦ ĐIỀU KIỆN VAY LÊN TỚI 98%</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-rose-600" />
                    <span>HỒ SƠ CẦN BỔ SUNG HOẶC CHƯA ĐỦ ĐIỀU KIỆN TIÊU CHUẨN</span>
                  </>
                )}
              </div>

              <p className="text-xs font-medium">
                {isEligible 
                  ? 'Bạn có thể đăng ký vay ngay bây giờ để nhận gói giải ngân trong vòng 24 giờ.' 
                  : 'Vui lòng liên hệ Hotline 1900 633 999 để được chuyên viên hỗ trợ giải pháp riêng biệt.'
                }
              </p>

              {isEligible && (
                <button
                  onClick={() => onOpenApplyModal()}
                  className="mt-2 bg-[#006837] hover:bg-emerald-800 text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md inline-flex items-center space-x-2"
                >
                  <span>ĐĂNG KÝ VAY NGAY HÔM NAY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* General Criteria Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase text-[#006837]">
              1. Điều kiện nhân thân
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>• Quốc tịch: Việt Nam, sinh sống tại các tỉnh thành toàn quốc.</li>
              <li>• Độ tuổi: Từ 18 - 60 tuổi tại thời điểm nộp hồ sơ.</li>
              <li>• Giấy tờ: CCCD gắn chip chính chủ còn hiệu lực.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase text-[#006837]">
              2. Điều kiện thu nhập
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>• Người đi làm: Lương tối thiểu từ 4.5 triệu VNĐ/tháng.</li>
              <li>• Tiểu thương: Hoạt động kinh doanh ổn định &gt; 6 tháng.</li>
              <li>• Tài khoản: Có tài khoản ngân hàng chính chủ để giải ngân.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase text-[#006837]">
              3. Lịch sử tín dụng CIC
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>• Điểm CIC: Tốt hoặc trung bình (Không nợ xấu nhóm 3, 4, 5).</li>
              <li>• Khoản vay hiện tại: Không có quá 3 khoản vay tín chấp song song.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
