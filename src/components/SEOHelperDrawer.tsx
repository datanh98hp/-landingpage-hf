import React, { useState } from 'react';
import { X, Search, Code, CheckCircle, Copy, Check, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { SEOPageData } from '../types';

interface SEOHelperDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pageSeoData: SEOPageData;
  currentPageName: string;
}

export const SEOHelperDrawer: React.FC<SEOHelperDrawerProps> = ({
  isOpen,
  onClose,
  pageSeoData,
  currentPageName
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'snippet' | 'meta' | 'jsonld'>('snippet');

  if (!isOpen) return null;

  const handleCopyJsonLd = () => {
    navigator.clipboard.writeText(JSON.stringify(pageSeoData.jsonLdSchema, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200">
        
        {/* Drawer Header */}
        <div className="bg-[#006837] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-extrabold text-base">CÔNG CỤ TỐI ƯU SEO TRANG WEB</h3>
              <p className="text-[11px] text-emerald-200">Kiểm tra Meta Tags & Schema JSON-LD Chuẩn Google</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-emerald-800 text-emerald-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex space-x-2 text-xs font-bold text-slate-700">
          <button
            onClick={() => setActiveTab('snippet')}
            className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'snippet' ? 'bg-white shadow-2xs text-[#006837]' : 'hover:bg-slate-200/60'}`}
          >
            Google Search Preview
          </button>
          <button
            onClick={() => setActiveTab('meta')}
            className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'meta' ? 'bg-white shadow-2xs text-[#006837]' : 'hover:bg-slate-200/60'}`}
          >
            Meta Tags ({currentPageName})
          </button>
          <button
            onClick={() => setActiveTab('jsonld')}
            className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'jsonld' ? 'bg-white shadow-2xs text-[#006837]' : 'hover:bg-slate-200/60'}`}
          >
            Structured Data JSON-LD
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {/* TAB 1: Google Search Preview */}
          {activeTab === 'snippet' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-sm">Xem trước kết quả tìm kiếm Google (SERP):</h4>
              
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md space-y-1 font-sans">
                <div className="flex items-center space-x-2 text-[11px] text-slate-600 truncate mb-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-800">https://viet-p2p.com</span>
                  <span className="text-slate-400">› {currentPageName.toLowerCase()}</span>
                </div>
                <h3 className="text-base font-semibold text-blue-800 hover:underline cursor-pointer leading-tight">
                  {pageSeoData.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed pt-1">
                  {pageSeoData.description}
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 space-y-2 text-slate-700">
                <div className="flex items-center space-x-1.5 font-bold text-[#006837]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Đánh giá chuẩn SEO On-Page:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Tiêu đề:</strong> {pageSeoData.title.length} ký tự (Tối ưu trong khoảng 50 - 60 ký tự)</li>
                  <li><strong>Thẻ Mô tả:</strong> {pageSeoData.description.length} ký tự (Tối ưu trong khoảng 120 - 160 ký tự)</li>
                  <li><strong>Cấu trúc URL Canonical:</strong> <code className="bg-white px-1.5 py-0.5 rounded text-[10px]">{pageSeoData.canonicalUrl}</code></li>
                  <li><strong>Ngôn ngữ khai báo:</strong> <code>lang="vi"</code> chính xác cho thị trường Việt Nam</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: Meta Tags Details */}
          {activeTab === 'meta' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-sm">Danh sách các thẻ HTML Head đang hoạt động:</h4>

              <div className="space-y-2">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-500 block mb-1">meta name="title":</span>
                  <p className="font-semibold text-slate-900">{pageSeoData.title}</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-500 block mb-1">meta name="description":</span>
                  <p className="font-medium text-slate-800">{pageSeoData.description}</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-500 block mb-1">meta name="keywords":</span>
                  <p className="font-medium text-slate-800">{pageSeoData.keywords}</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-500 block mb-1">Open Graph Title (og:title):</span>
                  <p className="font-medium text-slate-800">{pageSeoData.title}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: JSON-LD Schema */}
          {activeTab === 'jsonld' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-800 text-sm">Schema Markup (Structured Data):</h4>
                <button
                  onClick={handleCopyJsonLd}
                  className="flex items-center space-x-1 px-3 py-1 bg-[#006837] text-white rounded-lg text-[11px] font-bold hover:bg-emerald-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Đã sao chép' : 'Sao chép Schema'}</span>
                </button>
              </div>

              <pre className="bg-slate-900 text-emerald-400 p-4 rounded-2xl font-mono text-[11px] overflow-x-auto max-h-[350px] leading-relaxed">
                {JSON.stringify(pageSeoData.jsonLdSchema, null, 2)}
              </pre>

              <p className="text-[11px] text-slate-500">
                Thẻ Schema chuẩn Google trợ giúp công cụ tìm kiếm hiểu rõ thực thể dịch vụ tài chính, bảng giá lãi suất và FAQ của Viet P2P.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
