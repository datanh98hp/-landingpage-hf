import React, { useState, useEffect, useMemo } from 'react';
import { PageRoute, SEOPageData, QuickConsultationForm } from './types';
import { LOAN_PACKAGES, NEWS_ARTICLES, FAQ_ITEMS } from './data/mockData';

// Components
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureBar } from './components/FeatureBar';
import { LoanPackagesSection } from './components/LoanPackagesSection';
import { CalculatorAndAppSection } from './components/CalculatorAndAppSection';
import { LoanProcessSection } from './components/LoanProcessSection';
import { WhyChooseAndPartnersSection } from './components/WhyChooseAndPartnersSection';
import { FAQSection } from './components/FAQSection';
import { BottomCTABanner } from './components/BottomCTABanner';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { SEOHelperDrawer } from './components/SEOHelperDrawer';

// Sub-pages
import { LoansPage } from './pages/LoansPage';
import { LoanPackageDetailPage } from './pages/LoanPackageDetailPage';
import { EligibilityPage } from './pages/EligibilityPage';
import { InterestAndFeesPage } from './pages/InterestAndFeesPage';
import { GuidePage } from './pages/GuidePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activePackageId, setActivePackageId] = useState<string>('vay-mua-oto');
  const [activeArticleSlug, setActiveArticleSlug] = useState<string>('meo-duyet-vay-tin-chap-100-thanh-cong');

  // Modal & Drawer State
  const [applyModalOpen, setApplyModalOpen] = useState<boolean>(false);
  const [applyModalPkgId, setApplyModalPkgId] = useState<string>('vay-mua-oto');
  const [applyModalAmount, setApplyModalAmount] = useState<number>(50000000);
  const [applyModalTerm, setApplyModalTerm] = useState<number>(24);

  const [seoDrawerOpen, setSeoDrawerOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll to top on navigation change
  const handleNavigate = (route: PageRoute, params?: { packageId?: string; articleSlug?: string }) => {
    if (params?.packageId) setActivePackageId(params.packageId);
    if (params?.articleSlug) setActiveArticleSlug(params.articleSlug);
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApplyModal = (pkgId?: string | unknown, amount?: number, term?: number) => {
    if (typeof pkgId === 'string' && pkgId.trim()) {
      setApplyModalPkgId(pkgId);
    } else {
      setApplyModalPkgId('vay-mua-oto');
    }
    if (typeof amount === 'number') setApplyModalAmount(amount);
    if (typeof term === 'number') setApplyModalTerm(term);
    setApplyModalOpen(true);
  };

  const handleQuickConsultSubmitted = (data: QuickConsultationForm) => {
    setToastMessage(`Đã gửi thông tin tư vấn thành công cho KH: ${data.fullName} (${data.phone})`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  // Generate dynamic SEO metadata based on active route
  const activeSeoData: SEOPageData = useMemo(() => {
    switch (currentRoute) {
      case 'home':
        return {
          title: 'Viet P2P - Vay Tín Chấp Cá Nhân Online | Lãi Suất Minh Bạch, Duyệt Nhanh 24/7',
          description: 'Nền tảng vay tín chấp cá nhân online uy tín tại Việt Nam. Vay từ 5 đến 500 triệu, thủ tục đơn giản 100% online, giải ngân nhanh trong ngày.',
          keywords: 'vay tín chấp, vay tiêu dùng, vay theo lương, vay nhanh online, Viet P2P, vay tiền online',
          canonicalUrl: 'https://viet-p2p.com/',
          ogImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Viet P2P Financial Technologies",
            "url": "https://viet-p2p.com/",
            "telephone": "1900 633 999",
            "priceRange": "5,000,000 VND - 500,000,000 VND",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh",
              "addressLocality": "TP. Hồ Chí Minh",
              "addressCountry": "VN"
            }
          }
        };

      case 'loans':
        return {
          title: 'Danh Mục Các Gói Vay Tín Chấp Online | Viet P2P',
          description: 'So sánh và lựa chọn gói vay tiêu dùng, vay theo lương, vay nhanh online 15 phút, vay tiểu thương với lãi suất ưu đãi nhất.',
          keywords: 'gói vay tín chấp, so sánh vay tiền, vay theo lương ngân hàng, vay hộ kinh doanh',
          canonicalUrl: 'https://viet-p2p.com/loans',
          ogImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Danh mục sản phẩm vay Viet P2P",
            "itemListElement": LOAN_PACKAGES.map((p, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "name": p.name,
              "description": p.description
            }))
          }
        };

      case 'loan-detail': {
        const pkg = LOAN_PACKAGES.find(p => p.id === activePackageId) || LOAN_PACKAGES[0];
        return {
          title: `${pkg.name} | Duyệt Nhanh 24/7 Tại Viet P2P`,
          description: `${pkg.description} Hạn mức vay lên đến ${pFormatVND(pkg.maxAmount)}, lãi suất từ ${pkg.interestRateFrom}%/tháng.`,
          keywords: `${pkg.name}, vay tín chấp ${pkg.name}, hạn mức ${pkg.maxAmount}`,
          canonicalUrl: `https://viet-p2p.com/loans/${pkg.id}`,
          ogImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": pkg.name,
            "amount": {
              "@type": "MonetaryAmount",
              "currency": "VND",
              "minValue": pkg.minAmount,
              "maxValue": pkg.maxAmount
            },
            "annualPercentageRate": `${pkg.interestRateFrom * 12}%`
          }
        };
      }

      case 'eligibility':
        return {
          title: 'Điều Kiện & Hồ Sơ Vay Tín Chấp Online | Viet P2P',
          description: 'Kiểm tra ngay điều kiện vay tín chấp cá nhân chỉ trong 1 phút. Yêu cầu độ tuổi 18-60, CCCD gắn chip, không có nợ xấu.',
          keywords: 'điều kiện vay tín chấp, hồ sơ vay tiền, kiểm tra CIC, điều kiện vay theo lương',
          canonicalUrl: 'https://viet-p2p.com/eligibility',
          ogImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Cách kiểm tra điều kiện vay tín chấp tại Viet P2P",
            "step": [
              { "@type": "HowToStep", "text": "Kiểm tra độ tuổi từ 18-60" },
              { "@type": "HowToStep", "text": "Chuẩn bị CCCD gắn chip" },
              { "@type": "HowToStep", "text": "Xác nhận nguồn thu nhập hàng tháng" }
            ]
          }
        };

      case 'interest-fees':
        return {
          title: 'Biểu Lãi Suất & Phí Vay Tín Chấp Minh Bạch | Viet P2P',
          description: 'Xem bảng lãi suất vay tín chấp tính theo dư nợ giảm dần từ 0.95%/tháng. Cam kết 100% không thu phí ẩn, không phí hồ sơ.',
          keywords: 'lãi suất vay tín chấp, tính lãi dư nợ giảm dần, phí vay tiền online, APR',
          canonicalUrl: 'https://viet-p2p.com/interest-and-fees',
          ogImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "priceCurrency": "VND",
            "price": "0",
            "valueAddedTaxIncluded": true
          }
        };

      case 'guide':
        return {
          title: 'Hướng Dẫn Nộp Hồ Sơ & Thanh Toán Khoản Vay | Viet P2P',
          description: 'Hướng dẫn 4 bước đăng ký vay online nhanh nhất và 3 phương thức thanh toán lịch trả nợ hàng tháng linh hoạt.',
          keywords: 'hướng dẫn vay tiền, cách thanh toán khoản vay Viet P2P, eKYC xác thực',
          canonicalUrl: 'https://viet-p2p.com/guide',
          ogImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "Guide",
            "name": "Hướng dẫn nộp hồ sơ vay online"
          }
        };

      case 'about':
        return {
          title: 'Giới Thiệu Viet P2P | Nền Tảng Công Nghệ Tài Chính P2P Leading',
          description: 'Tìm hiểu về Viet P2P - Công ty tiên phong ứng dụng công nghệ AI & eKYC kết nối người vay và các đối tác ngân hàng hàng đầu.',
          keywords: 'về Viet P2P, P2P lending Việt Nam, công nghệ tài chính fintech',
          canonicalUrl: 'https://viet-p2p.com/about-us',
          ogImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Viet P2P",
            "founder": "Viet P2P Team",
            "foundingDate": "2025"
          }
        };

      case 'news':
      case 'news-detail':
        return {
          title: 'Cẩm Nang Tài Chính & Mẹo Vay Tiền Online | Viet P2P News',
          description: 'Tổng hợp bài viết hướng dẫn lập kế hoạch tài chính cá nhân, mẹo nâng cao điểm tín dụng CIC và cập nhật lãi suất.',
          keywords: 'cẩm nang vay tiền, tài chính cá nhân, kinh nghiệm duyệt vay 100%',
          canonicalUrl: 'https://viet-p2p.com/news',
          ogImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Tin tức & Cẩm nang Viet P2P"
          }
        };

      case 'faq':
        return {
          title: 'Câu Hỏi Thường Gặp (FAQ) Về Vay Tín Chấp | Viet P2P',
          description: 'Giải đáp thắc mắc chi tiết về thủ tục, nợ xấu, cách tính lãi và thời gian giải ngân tại Viet P2P.',
          keywords: 'hỏi đáp vay tín chấp, FAQ Viet P2P, câu hỏi vay tiền online',
          canonicalUrl: 'https://viet-p2p.com/faq',
          ogImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ITEMS.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          }
        };

      case 'contact':
        return {
          title: 'Liên Hệ Viet P2P | Hotline 1900 633 999 Hỗ Trợ 24/7',
          description: 'Địa chỉ trụ sở chính và thông tin đường dây nóng cskh@viet-p2p.com tiếp nhận giải đáp thắc mắc.',
          keywords: 'liên hệ Viet P2P, hotline 1900 633 999, địa chỉ Viet P2P',
          canonicalUrl: 'https://viet-p2p.com/contact',
          ogImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Trang liên hệ Viet P2P"
          }
        };

      default:
        return {
          title: 'Viet P2P - Vay Tín Chấp Cá Nhân Online',
          description: 'Nền tảng vay tín chấp cá nhân online uy tín.',
          keywords: 'vay tín chấp online',
          canonicalUrl: 'https://viet-p2p.com/',
          ogImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
          jsonLdSchema: { "@context": "https://schema.org", "@type": "WebSite", "name": "Viet P2P" }
        };
    }
  }, [currentRoute, activePackageId]);

  // Update browser Document Title dynamically for SEO
  useEffect(() => {
    document.title = activeSeoData.title;
  }, [activeSeoData]);

  // Helper formatting
  function pFormatVND(val: number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(val);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-emerald-300 px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500/40 text-xs font-bold flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Sticky Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
      />

      {/* Main Route View Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenApplyModal={handleOpenApplyModal}
              onFormSubmitted={handleQuickConsultSubmitted}
            />
            <FeatureBar />
            <LoanPackagesSection
              onNavigate={handleNavigate}
              onOpenApplyModal={handleOpenApplyModal}
            />
            <CalculatorAndAppSection
              onNavigate={handleNavigate}
              onOpenApplyModal={handleOpenApplyModal}
            />
            <LoanProcessSection />
            <WhyChooseAndPartnersSection onNavigate={handleNavigate} />
            <FAQSection onNavigate={handleNavigate} />
            <BottomCTABanner
              onNavigate={handleNavigate}
              onOpenApplyModal={handleOpenApplyModal}
            />
          </>
        )}

        {currentRoute === 'loans' && (
          <LoansPage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}

        {currentRoute === 'loan-detail' && (
          <LoanPackageDetailPage
            packageId={activePackageId}
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}

        {currentRoute === 'eligibility' && (
          <EligibilityPage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}

        {currentRoute === 'interest-fees' && (
          <InterestAndFeesPage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}

        {currentRoute === 'guide' && (
          <GuidePage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}

        {currentRoute === 'about' && (
          <AboutUsPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'news' && (
          <NewsPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'news-detail' && (
          <NewsDetailPage
            articleSlug={activeArticleSlug}
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}

        {currentRoute === 'faq' && (
          <FAQPage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'terms' && (
          <LegalPage type="terms" onNavigate={handleNavigate} />
        )}

        {currentRoute === 'privacy' && (
          <LegalPage type="privacy" onNavigate={handleNavigate} />
        )}
      </main>

      {/* Main Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Application Modal */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultPackageId={applyModalPkgId}
        defaultAmount={applyModalAmount}
        defaultTerm={applyModalTerm}
      />

      {/* Interactive SEO Inspector & Structured Data Drawer */}
      <SEOHelperDrawer
        isOpen={seoDrawerOpen}
        onClose={() => setSeoDrawerOpen(false)}
        pageSeoData={activeSeoData}
        currentPageName={currentRoute.toUpperCase()}
      />

    </div>
  );
}
