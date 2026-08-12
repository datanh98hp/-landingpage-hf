import { LoanPackage, FAQItem, FinancialPartner, NewsArticle } from '../types';

export const LOAN_PACKAGES: LoanPackage[] = [
  {
    id: 'vay-mua-oto',
    name: 'Vay mua ô tô',
    badge: 'Lãi suất ưu đãi',
    iconName: 'car',
    minAmount: 100000000,
    maxAmount: 3000000000,
    minTermMonths: 12,
    maxTermMonths: 96,
    interestRateFrom: 0.65,
    description: 'Hỗ trợ nguồn vốn tài trợ mua xe ô tô mới hoặc xe đã qua sử dụng với hạn mức lên đến 80% giá trị xe, thủ tục nhanh chóng, duyệt hồ sơ linh hoạt.',
    benefits: [
      'Hạn mức cho vay đến 80% giá trị xe',
      'Thời gian vay linh hoạt lên đến 8 năm (96 tháng)',
      'Lãi suất cạnh tranh chỉ từ 0.65%/tháng',
      'Chấp nhận thế chấp bằng chính chiếc xe mua'
    ],
    eligibilityRequirements: [
      'Công dân Việt Nam từ 18 - 65 tuổi',
      'Có nguồn thu nhập ổn định đảm bảo khả năng trả nợ',
      'Không có nợ xấu tại các TCTD (CIC)'
    ],
    requiredDocs: [
      'CCCD gắn chip chính chủ',
      'Hợp đồng mua bán xe & Giấy đặt cọc',
      'Giấy tờ chứng minh thu nhập (Bảng lương/Sao kê/Hợp đồng cho thuê)'
    ],
    popularTag: true
  },
  {
    id: 'vay-mua-nha',
    name: 'Vay mua nhà',
    badge: 'Hạn mức lớn',
    iconName: 'home',
    minAmount: 200000000,
    maxAmount: 10000000000,
    minTermMonths: 24,
    maxTermMonths: 300,
    interestRateFrom: 0.55,
    description: 'Giải pháp tài chính toàn diện giúp bạn sở hữu ngôi nhà mơ ước, căn hộ chung cư hoặc đất ở với thời hạn vay lên đến 25 năm và lãi suất ưu đãi.',
    benefits: [
      'Hạn mức cho vay lên đến 75% giá trị bất động sản',
      'Thời hạn vay dài hạn đến 25 năm (300 tháng)',
      'Lãi suất ưu đãi cố định trong những năm đầu',
      'Phương thức trả nợ linh hoạt phù hợp dòng tiền'
    ],
    eligibilityRequirements: [
      'Công dân Việt Nam từ 18 - 65 tuổi',
      'Có tài sản bảo đảm là BĐS định mua hoặc BĐS khác',
      'Có thu nhập ổn định đủ khả năng trả gốc và lãi'
    ],
    requiredDocs: [
      'CCCD gắn chip / Giấy xác nhận tình trạng hôn nhân',
      'Giấy tờ pháp lý BĐS (Sổ hồng/Sổ đỏ/Hợp đồng mua bán)',
      'Chứng minh nguồn thu nhập trả nợ'
    ]
  },
  {
    id: 'vay-kinh-doanh',
    name: 'Vay kinh doanh',
    badge: 'Bổ sung vốn lưu động',
    iconName: 'briefcase',
    minAmount: 50000000,
    maxAmount: 5000000000,
    minTermMonths: 6,
    maxTermMonths: 120,
    interestRateFrom: 0.7,
    description: 'Nguồn vốn tiếp sức cho cá nhân, hộ kinh doanh và doanh nghiệp nhỏ mở rộng quy mô, mua sắm trang thiết bị và bổ sung vốn lưu động.',
    benefits: [
      'Hạn mức cho vay linh hoạt lên tới 5 tỷ đồng',
      'Thời gian vay từ 6 đến 120 tháng',
      'Hình thức giải ngân và trả nợ linh hoạt theo chu kỳ kinh doanh',
      'Lãi suất ưu đãi chỉ từ 0.70%/tháng'
    ],
    eligibilityRequirements: [
      'Chủ hộ kinh doanh/Doanh nghiệp/Tiểu thương có địa điểm kinh doanh rõ ràng',
      'Có kinh nghiệm hoạt động trong ngành nghề từ 6 tháng trở lên',
      'Phương án kinh doanh khả thi và có lợi nhuận'
    ],
    requiredDocs: [
      'CCCD chủ kinh doanh/Giấy ĐKKD (nếu có)',
      'Sổ sách ghi chép doanh thu/Sao kê tài khoản kinh doanh',
      'Giấy tờ tài sản bảo đảm (nếu vay thế chấp)'
    ]
  },
  {
    id: 'vay-tieu-dung-the-chap',
    name: 'Vay tiêu dùng thế chấp',
    badge: 'Lãi suất cạnh tranh',
    iconName: 'shield-check',
    minAmount: 50000000,
    maxAmount: 2000000000,
    minTermMonths: 12,
    maxTermMonths: 120,
    interestRateFrom: 0.75,
    description: 'Khoản vay dùng tài sản bảo đảm (BĐS, xe ô tô, sổ tiết kiệm) để đáp ứng mọi nhu cầu tiêu dùng lớn như du học, khám chữa bệnh, trang trí nội thất.',
    benefits: [
      'Hạn mức cho vay đến 100% nhu cầu tiêu dùng',
      'Lãi suất thấp hơn hẳn so với vay tín chấp',
      'Thời hạn vay dài giúp chia nhỏ số tiền trả hàng tháng',
      'Duyệt hồ sơ nhanh chóng, thủ tục đơn giản'
    ],
    eligibilityRequirements: [
      'Công dân Việt Nam từ 18 - 60 tuổi',
      'Có tài sản bảo đảm thuộc quyền sở hữu/sử dụng hợp pháp',
      'Thu nhập hàng tháng đảm bảo khả năng trả nợ'
    ],
    requiredDocs: [
      'CCCD gắn chip chính chủ',
      'Giấy tờ chứng minh quyền sở hữu tài sản bảo đảm',
      'Chứng minh thu nhập hàng tháng'
    ]
  }
];

export const FINANCIAL_PARTNERS: FinancialPartner[] = [
  { name: 'VPBank', logoText: 'VPBank', subText: 'Ngân hàng TMCP Việt Nam Thịnh Vượng', badgeColor: 'bg-emerald-600', category: 'bank' },
  { name: 'TPBank', logoText: 'TPBank', subText: 'Ngân hàng TMCP Tiên Phong', badgeColor: 'bg-purple-600', category: 'bank' },
  { name: 'VIB', logoText: 'VIB', subText: 'Ngân hàng Quốc Tế', badgeColor: 'bg-blue-600', category: 'bank' },
  { name: 'FE CREDIT', logoText: 'FE CREDIT', subText: 'Công ty Tài chính VPBank SMBC', badgeColor: 'bg-red-600', category: 'finance_company' },
  { name: 'HOME CREDIT', logoText: 'HOME CREDIT', subText: 'Tập đoàn Tài chính Tiêu dùng', badgeColor: 'bg-red-500', category: 'finance_company' },
  { name: 'MIRAE ASSET', logoText: 'MIRAE ASSET', subText: 'Finance Company', badgeColor: 'bg-amber-600', category: 'finance_company' },
  { name: 'SHB FINANCE', logoText: 'SHB FINANCE', subText: 'Tài chính Ngân hàng SHB', badgeColor: 'bg-orange-600', category: 'finance_company' },
  { name: 'LOTTE FINANCE', logoText: 'LOTTE FINANCE', subText: 'Công ty Tài chính Lotte', badgeColor: 'bg-rose-600', category: 'finance_company' },
  { name: 'HD SAISON', logoText: 'HD SAISON', subText: 'Công ty Tài chính HD SAISON', badgeColor: 'bg-yellow-600', category: 'finance_company' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Vay tín chấp là gì?',
    answer: 'Vay tín chấp là hình thức vay vốn không cần tài sản thế chấp (như nhà đất, xe cộ). Đơn vị tài chính duyệt khoản vay dựa hoàn toàn vào uy tín cá nhân, lịch sử tín dụng CIC và khả năng trả nợ (thu nhập hàng tháng) của người vay.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Lãi suất vay tín chấp tại Viet P2P được tính như thế nào?',
    answer: 'Lãi suất vay tín chấp tại Viet P2P dao động từ 0.95% đến 1.8%/tháng tùy thuộc vào gói vay, điểm tín dụng CIC và hồ sơ minh chứng thu nhập của bạn. Tất cả lãi suất và các chi phí liên quan đều được công khai minh bạch rõ ràng trong hợp đồng trước khi ký duyệt.',
    category: 'interest'
  },
  {
    id: 'faq-3',
    question: 'Thời gian xét duyệt và giải ngân là bao lâu?',
    answer: 'Với hình thức Vay nhanh online qua eKYC, hệ thống AI hỗ trợ xét duyệt chỉ trong 15-30 phút. Các gói vay tiêu dùng hoặc vay theo lương thông thường sẽ được duyệt và giải ngân về tài khoản ngân hàng của bạn trong vòng 24h làm việc.',
    category: 'approval'
  },
  {
    id: 'faq-4',
    question: 'Ai có thể đăng ký vay tín chấp tại Viet P2P?',
    answer: 'Công dân Việt Nam trong độ tuổi từ 18 đến 60 tuổi, có CCCD gắn chip hợp lệ, có nguồn thu nhập ổn định từ 4.5 triệu VNĐ/tháng trở lên và không có nợ xấu thuộc nhóm 3, 4, 5 trên hệ thống CIC.',
    category: 'approval'
  },
  {
    id: 'faq-5',
    question: 'Có những khoản phí nào khi vay tín chấp?',
    answer: 'Viet P2P cam kết KHÔNG thu bất kỳ khoản phí tư vấn hay phí hồ sơ trước nào. Chi phí khoản vay chỉ bao gồm lãi suất đã niêm yết và phí bảo hiểm khoản vay (tự nguyện, giúp chi trả khoản vay khi gặp rủi ro sức khỏe bất khả kháng).',
    category: 'interest'
  },
  {
    id: 'faq-6',
    question: 'Thanh toán khoản vay hàng tháng bằng cách nào?',
    answer: 'Bạn có thể dễ dàng thanh toán khoản vay hàng tháng ngay trên ứng dụng Viet P2P, hoặc chuyển khoản qua Internet Banking, ví điện tử MoMo/ZaloPay, hoặc tại các điểm thu hộ như VNPost, Thế Giới Di Động, FPT Shop.',
    category: 'repayment'
  },
  {
    id: 'faq-7',
    question: 'Thông tin cá nhân của tôi có được bảo mật không?',
    answer: 'Viet P2P áp dụng tiêu chuẩn bảo mật dữ liệu cao nhất (mã hóa SSL 256-bit, chứng nhận ISO 27001). Thông tin đăng ký của bạn hoàn toàn được bảo mật, tuyệt đối không tiết lộ cho bên thứ ba ngoại trừ đối tác thẩm định tín dụng chính thức.',
    category: 'security'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'meo-duyet-vay-tin-chap-100-thanh-cong',
    title: '5 Mẹo Giúp Hồ Sơ Vay Tín Chấp Được Duyệt 100% Trong 15 Phút',
    summary: 'Tìm hiểu các bí quyết chuẩn bị tài liệu, tối ưu điểm CIC và khai báo thu nhập chính xác giúp hồ sơ vay của bạn được xét duyệt ngay lần đầu.',
    content: `
      <h2>1. Kiểm tra và đảm bảo điểm tín dụng CIC sạch</h2>
      <p>Lịch sử tín dụng CIC là yếu tố cốt lõi hàng đầu khi các tổ chức tài chính thẩm định hồ sơ. Trước khi nộp đơn vay, bạn nên đảm bảo không có bất kỳ khoản nợ quá hạn nào từ 10 ngày trở lên.</p>
      
      <h2>2. Cung cấp chứng minh thu nhập rõ ràng</h2>
      <p>Bảng sao kê lương ngân hàng 3-6 tháng gần nhất có mộc đỏ hoặc sao kê điện tử e-banking là minh chứng thuyết phục nhất. Nếu bạn là hộ kinh doanh, hãy chuẩn bị sổ theo dõi thu chi hoặc hóa đơn bán hàng.</p>
      
      <h2>3. Khai báo thông tin trung thực và đồng bộ</h2>
      <p>Thông tin về nơi cư trú, số điện thoại người tham chiếu, địa chỉ công ty phải hoàn toàn trùng khớp giữa CCCD và tờ khai online để tránh bị hệ thống AI nghi ngờ giả mạo.</p>

      <h2>4. Lựa chọn hạn mức vay phù hợp với khả năng trả nợ</h2>
      <p>Quy tắc vàng là tổng số tiền trả góp hàng tháng không nên vượt quá 40% tổng thu nhập thực nhận của bạn.</p>
    `,
    category: 'Cẩm nang vay',
    author: 'Nguyễn Văn Minh (Chuyên gia Tài chính Viet P2P)',
    publishedDate: '10/08/2026',
    readTime: '5 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    tags: ['Vay tín chấp', 'Mẹo duyệt vay', 'CIC', 'Tài chính cá nhân']
  },
  {
    id: 'news-2',
    slug: 'so-sanh-vay-theo-luong-va-vay-tieu-dung',
    title: 'So Sánh Vay Theo Lương Và Vay Tiêu Dùng: Nên Chọn Gói Nào?',
    summary: 'Phân tích chi tiết sự khác biệt về lãi suất, hạn mức và điều kiện giữa hai gói vay tín chấp phổ biến nhất hiện nay.',
    content: `
      <h2>Vay theo lương khác gì so với Vay tiêu dùng cá nhân?</h2>
      <p>Cả hai đều là hình thức vay không thế chấp, tuy nhiên gói Vay theo lương có ưu thế rõ rệt về lãi suất (chỉ từ 0.95%/tháng) và hạn mức lên tới 300 triệu đồng nhờ có chứng minh dòng tiền ổn định từ đơn vị công tác.</p>
      
      <h2>Khi nào nên chọn Vay nhanh tiêu dùng?</h2>
      <p>Nếu bạn cần số tiền dưới 50 triệu gấp trong ngày và muốn thủ tục đơn giản chỉ cần CCCD, gói Vay nhanh tiêu dùng online là lựa chọn hoàn hảo nhất.</p>
    `,
    category: 'Tài chính cá nhân',
    author: 'Trần Thị Thu Thảo',
    publishedDate: '08/08/2026',
    readTime: '4 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    tags: ['So sánh gói vay', 'Vay theo lương', 'Lãi suất']
  },
  {
    id: 'news-3',
    slug: 'cach-tinh-lai-suat-du-no-giam-dan',
    title: 'Hướng Dẫn Cách Tính Lãi Suất Dư Nợ Giảm Dần Chuẩn Xác Nhất',
    summary: 'Giải thích công thức tính lãi suất trên dư nợ giảm dần vs dư nợ ban đầu, giúp bạn tính đúng chính xác khoản tiền phải trả hàng tháng.',
    content: `
      <h2>Lãi suất trên dư nợ giảm dần là gì?</h2>
      <p>Lãi suất dư nợ giảm dần là cách tính tiền lãi chỉ dựa trên số tiền thực tế bạn còn nợ sau khi đã trừ đi tiền gốc đã trả ở các kỳ trước.</p>
      
      <h2>Công thức tính chuẩn:</h2>
      <p><strong>Tiền gốc hàng tháng</strong> = Tổng số tiền vay / Tổng số tháng vay</p>
      <p><strong>Tiền lãi kỳ thứ N</strong> = (Dư nợ gốc còn lại) x (Lãi suất tháng)</p>
      <p><strong>Tổng số tiền phải trả kỳ N</strong> = Tiền gốc + Tiền lãi kỳ N</p>
    `,
    category: 'Cẩm nang vay',
    author: 'Lê Hoàng Nam',
    publishedDate: '05/08/2026',
    readTime: '6 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    tags: ['Lãi suất giảm dần', 'Công thức tính vay', 'Kế hoạch tài chính']
  }
];
