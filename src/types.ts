export type PageRoute = 
  | 'home' 
  | 'loans' 
  | 'loan-detail'
  | 'eligibility' 
  | 'interest-fees' 
  | 'guide' 
  | 'about' 
  | 'news' 
  | 'news-detail'
  | 'faq' 
  | 'apply' 
  | 'contact' 
  | 'terms' 
  | 'privacy';

export interface LoanPackage {
  id: string;
  name: string;
  badge?: string;
  iconName: string;
  minAmount: number; // in VND
  maxAmount: number; // in VND
  minTermMonths: number;
  maxTermMonths: number;
  interestRateFrom: number; // e.g. 1.1% / month
  description: string;
  benefits: string[];
  eligibilityRequirements: string[];
  requiredDocs: string[];
  popularTag?: boolean;
}

export interface QuickConsultationForm {
  fullName: string;
  phone: string;
  loanType: string;
  city: string;
  expectedAmount?: string;
  referralCode?: string;
}

export interface FullLoanApplication {
  // Step 1: Personal
  fullName: string;
  phone: string;
  email: string;
  referralCode?: string;
  city: string;
  
  // Step 2: Income & Employment
  jobType: 'salaried' | 'business' | 'freelance' | 'other';
  monthlyIncome: number;
  companyName?: string;
  hasSalaryBankTransfer: boolean;

  // Step 3: Loan request
  loanPackageId: string;
  amount: number;
  termMonths: number;
  purpose: string;

  // Step 4: Verification
  agreedToTerms: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'interest' | 'approval' | 'repayment' | 'security';
}

export interface FinancialPartner {
  name: string;
  logoText: string;
  subText: string;
  badgeColor: string;
  category: 'bank' | 'finance_company';
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: 'Cẩm nang vay' | 'Tài chính cá nhân' | 'Tin tức Viet P2P';
  author: string;
  publishedDate: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface SEOPageData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  jsonLdSchema: Record<string, unknown>;
}
