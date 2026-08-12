import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, User, Phone, Mail, CreditCard, Building, FileText, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { LOAN_PACKAGES } from '../data/mockData';
import { VIETNAM_CITIES } from '../data/cities';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackageId?: string;
  defaultAmount?: number;
  defaultTerm?: number;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultPackageId = 'vay-mua-oto',
  defaultAmount = 500000000,
  defaultTerm = 36
}) => {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [selectedPkgId, setSelectedPkgId] = useState<string>(defaultPackageId);
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [termMonths, setTermMonths] = useState<number>(defaultTerm);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [city, setCity] = useState('TP. Hồ Chí Minh');

  const [jobType, setJobType] = useState('salaried');
  const [monthlyIncome, setMonthlyIncome] = useState('15000000');
  const [companyName, setCompanyName] = useState('');

  const [agreedTerms, setAgreedTerms] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentPkg = LOAN_PACKAGES.find(p => p.id === selectedPkgId) || LOAN_PACKAGES[0];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="bg-[#006837] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
            <div>
              <h3 className="font-extrabold text-base leading-tight">ĐĂNG KÝ VAY TÍN CHẤP ONLINE</h3>
              <p className="text-[11px] text-emerald-200">Duyệt hồ sơ tự động 100% online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-emerald-800 text-emerald-200 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stepper Header */}
        {!submitted && (
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
            <div className={`flex items-center space-x-1.5 ${step >= 1 ? 'text-[#006837]' : ''}`}>
              <span className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-black ${step >= 1 ? 'bg-[#006837] text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
              <span>Chọn khoản vay</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div className={`flex items-center space-x-1.5 ${step >= 2 ? 'text-[#006837]' : ''}`}>
              <span className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-black ${step >= 2 ? 'bg-[#006837] text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
              <span>Thông tin cá nhân</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div className={`flex items-center space-x-1.5 ${step >= 3 ? 'text-[#006837]' : ''}`}>
              <span className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center font-black ${step >= 3 ? 'bg-[#006837] text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
              <span>Thu nhập & Xác nhận</span>
            </div>
          </div>
        )}

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006837] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-slate-900">NỘP HỒ SƠ ĐĂNG KÝ THÀNH CÔNG!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Mã hồ sơ: <strong className="text-slate-900 font-mono bg-slate-100 px-2 py-0.5 rounded">P2P-2026-88912</strong>. Hệ thống AI đã ghi nhận hồ sơ vay <strong>{formatVND(amount)}</strong> của bạn.
              </p>

              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <p className="font-extrabold text-[#006837]">Thông tin tóm tắt khoản vay:</p>
                <div className="flex justify-between border-b border-emerald-200/60 pb-1">
                  <span className="text-slate-600">Khách hàng:</span>
                  <strong className="text-slate-900">{fullName}</strong>
                </div>
                <div className="flex justify-between border-b border-emerald-200/60 pb-1">
                  <span className="text-slate-600">Số điện thoại:</span>
                  <strong className="text-slate-900">{phone}</strong>
                </div>
                <div className="flex justify-between border-b border-emerald-200/60 pb-1">
                  <span className="text-slate-600">Gói vay:</span>
                  <strong className="text-slate-900">{currentPkg.name}</strong>
                </div>

              </div>

              <button
                onClick={onClose}
                className="bg-[#006837] text-white font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md hover:bg-emerald-800 transition-colors"
              >
                ĐÓNG CỬA SỔ
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-4">
              
              {/* STEP 1: Loan Request Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Chọn gói vay phù hợp</label>
                    <div className="grid grid-cols-2 gap-2">
                      {LOAN_PACKAGES.map(pkg => (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => setSelectedPkgId(pkg.id)}
                          className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                            selectedPkgId === pkg.id 
                              ? 'border-[#006837] bg-emerald-50 text-[#006837] ring-1 ring-[#006837]' 
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span className="block">{pkg.name}</span>
                          <span className="block text-[10px] text-slate-500 font-normal mt-0.5">Lãi từ {pkg.interestRateFrom}%/tháng</span>
                        </button>
                      ))}
                    </div>
                  </div>


                </div>
              )}

              {/* STEP 2: Personal Info */}
              {step === 2 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Họ và tên *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="NGUYEN VAN A"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#006837]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Số điện thoại *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="0912 345 678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mã giới thiệu (nếu có)</label>
                      <div className="relative">
                        <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="Nhập mã giới thiệu (không bắt buộc)"
                          value={referralCode}
                          onChange={(e) => setReferralCode(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tỉnh / Thành phố sinh sống *</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:bg-white"
                    >
                      {VIETNAM_CITIES.map((cityName) => (
                        <option key={cityName} value={cityName}>
                          {cityName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: Income & Submit */}
              {step === 3 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Hình thức công việc</label>
                    <select
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:bg-white"
                    >
                      <option value="salaried">Đi làm hưởng lương (Công ty / Doanh nghiệp)</option>
                      <option value="business">Kinh doanh / Hộ tiểu thương</option>
                      <option value="freelance">Làm tự do / Freelancer</option>
                      <option value="other">Hình thức khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Thu nhập hàng tháng (VNĐ)</label>
                    <select
                      value={monthlyIncome}
                      onChange={(e) => setMonthlyIncome(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 text-sm rounded-xl border border-slate-200 focus:bg-white"
                    >
                      <option value="5000000">Dưới 7 triệu VNĐ</option>
                      <option value="15000000">7 - 15 triệu VNĐ</option>
                      <option value="25000000">15 - 30 triệu VNĐ</option>
                      <option value="50000000">Trên 30 triệu VNĐ</option>
                    </select>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-xs text-slate-700 space-y-1">
                    <p className="font-bold text-[#006837]">Cam kết bảo mật thông tin khoản vay:</p>
                    <p className="text-[11px] text-slate-600">
                      Bằng cách bấm Gửi hồ sơ, bạn đồng ý để Viet P2P chuyển thông tin đăng ký đến đối tác thẩm định tín dụng chính thức theo quy định pháp luật.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="w-4 h-4 text-[#006837] rounded focus:ring-[#006837]"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-slate-600 font-medium">
                      Tôi đã đọc và đồng ý với <span className="text-[#006837] font-bold">Điều khoản sử dụng</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center space-x-1 text-xs font-bold text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Quay lại</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  disabled={step === 3 && !agreedTerms}
                  className="bg-[#006837] hover:bg-emerald-800 disabled:opacity-50 text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md"
                >
                  <span>{step === 3 ? 'NỘP HỒ SƠ VAY' : 'TIẾP TỤC'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
