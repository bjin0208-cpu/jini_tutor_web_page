export const categories = [
  { id: 'all', name: '전체 클래스', icon: '✨' },
  { 
    id: 'ai', 
    name: 'AI 활용 마스터', 
    icon: '🤖', 
    description: '생성형 AI로 업무 자동화부터 콘텐츠 창작까지 10배 빠르게!',
    crystalIcon: '🔮',
    bgGradient: 'from-purple-600/30 to-indigo-600/30'
  },
  { 
    id: 'canva', 
    name: '캔바 디렉팅', 
    icon: '🎨', 
    description: '디자인 전공 없이도 3분 만에 전문가급 마케팅 에셋 제작',
    crystalIcon: '💎',
    bgGradient: 'from-blue-600/30 to-cyan-600/30'
  },
  { 
    id: 'organize', 
    name: '정리수납 기술', 
    icon: '🧹', 
    description: '공간 가치를 200% 올려주는 전문가 실전 정리수납 노하우',
    crystalIcon: '✨',
    bgGradient: 'from-amber-600/30 to-yellow-600/30'
  },
  { 
    id: 'handicraft', 
    name: '수공예품 만들기', 
    icon: '🧵', 
    description: '나만의 리빙 브랜드 창업이 가능한 감성 수공예 클래스',
    crystalIcon: '👑',
    bgGradient: 'from-emerald-600/30 to-teal-600/30'
  },
];

export const coursesData = [
  {
    id: 1,
    title: 'ChatGPT & Claude 실전 비즈니스 마스터 클래스',
    category: 'ai',
    categoryName: 'AI 활용 마스터',
    type: 'online', // online, ebook, offline
    typeName: '온라인 동영상',
    instructor: '지니 튜터',
    rating: 4.98,
    reviewsCount: 142,
    studentsCount: 1280,
    price: 99000,
    discountPrice: 69000,
    isBest: true,
    passAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'AI 도구를 활용해 프롬프트 작성부터 문서 자동화, 마케팅 문구 작성까지 한번에 끝내는 커리큘럼입니다.',
    sampleVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder sample
    features: ['강의 시청 100% 온라인', '실습용 프롬프트 100선 제공', 'Q&A 단톡방 참여권']
  },
  {
    id: 2,
    title: '캔바(Canva)로 완성하는 인스타그램 & 카드뉴스 디자인',
    category: 'canva',
    categoryName: '캔바 디렉팅',
    type: 'online',
    typeName: '온라인 동영상',
    instructor: '지니 튜터',
    rating: 4.95,
    reviewsCount: 98,
    studentsCount: 850,
    price: 89000,
    discountPrice: 59000,
    isBest: true,
    passAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    description: '디자인 감각이 없어도 괜찮습니다. 캔바 템플릿 제작 및 3D 그래픽 활용법을 아주 쉽게 알려드립니다.',
    sampleVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['지니 튜터 전용 캔바 템플릿 50종', '상업적 이용 가능 폰트 가이드']
  },
  {
    id: 3,
    title: '우리 집 10평 넓혀주는 전문가 정리수납 법칙 (전자책+VOD)',
    category: 'organize',
    categoryName: '정리수납 기술',
    type: 'ebook',
    typeName: '전자책 + VOD',
    instructor: '지니 튜터',
    rating: 5.0,
    reviewsCount: 76,
    studentsCount: 620,
    price: 49000,
    discountPrice: 35000,
    isBest: false,
    passAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: '공간 컨설턴트 1급 자격 소지 지니 튜터가 전해주는 구역별 정리 프로세스와 수납함 추천 리스트.',
    sampleVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['120페이지 PDF 다운로드', '구역별 체크리스트 템플릿']
  },
  {
    id: 4,
    title: '감성 레진아트 & 수공예품 브랜드 창업 클래스',
    category: 'handicraft',
    categoryName: '수공예품 만들기',
    type: 'offline',
    typeName: '오프라인 워크숍',
    instructor: '지니 튜터',
    rating: 4.97,
    reviewsCount: 54,
    studentsCount: 310,
    price: 150000,
    discountPrice: 120000,
    isBest: true,
    passAvailable: false, // offline is single purchase
    thumbnail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    description: '소수정예 소품 수공예 제작 실습과 아이디어스/스마트스토어 판매 세팅까지 맞춤 지도합니다.',
    sampleVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['재료 키트 전원 무료 현장 제공', '스마트스토어 판매 가이드북']
  },
  {
    id: 5,
    title: 'Midjourney & DALL-E 3 미드저니 3D 일러스트 디렉팅',
    category: 'ai',
    categoryName: 'AI 활용 마스터',
    type: 'online',
    typeName: '온라인 동영상',
    instructor: '지니 튜터',
    rating: 4.99,
    reviewsCount: 110,
    studentsCount: 940,
    price: 110000,
    discountPrice: 79000,
    isBest: false,
    passAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    description: '3D 글래스모피즘 아이콘과 고퀄리티 로고/캐릭터를 만드는 미드저니 전문 프롬프팅 매뉴얼.',
    sampleVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['스타일별 프롬프트 키워드집', '초고화질 업스케일링 팁']
  },
  {
    id: 6,
    title: '손쉬운 공간 배치 & 옷장 정리 3시간 마스터 워크숍',
    category: 'organize',
    categoryName: '정리수납 기술',
    type: 'offline',
    typeName: '오프라인 워크숍',
    instructor: '지니 튜터',
    rating: 4.92,
    reviewsCount: 41,
    studentsCount: 220,
    price: 80000,
    discountPrice: 65000,
    isBest: false,
    passAvailable: false,
    thumbnail: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    description: '강남 스튜디오에서 진행되는 실전 옷장 접기/배치 실습 클래스입니다.',
    sampleVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: ['실습용 수납 도구 증정', '1:1 공간 진단 컨설팅 15분']
  }
];

export const reviewsData = [
  {
    id: 1,
    name: '김지현 수강생',
    course: 'ChatGPT & Claude 비즈니스',
    rating: 5,
    date: '2026.07.28',
    comment: '원래 "AI 강사라는 사람 진짜 전문가 맞아?" 하고 반신반의했는데, 무료 맛보기 듣고 바로 수강 결정했습니다. 업무 속도가 5배는 빨라졌어요!',
    tag: '업무효율 500% 증대'
  },
  {
    id: 2,
    name: '박서준 창업가',
    course: '캔바 디렉팅 클래스',
    rating: 5,
    date: '2026.07.25',
    comment: '외주 디자인 맡기던 비용만 한 달에 100만 원이었는데, 지니 튜터님 강의 덕분에 하루 만에 카드뉴스 다 만들고 있습니다. 3D 크리스탈 템플릿 최고예요!',
    tag: '외주비용 100만원 절감'
  },
  {
    id: 3,
    name: '최유진 주부',
    course: '전문가 정리수납 기술',
    rating: 5,
    date: '2026.07.22',
    comment: '집안일로 지쳐있었는데 정리수납 시스템을 배우고 집안이 카페처럼 변했습니다. 전자책 가이드북이 정말 세심하게 써있어서 감동이었어요.',
    tag: '공간의 재발견'
  },
  {
    id: 4,
    name: '이민호 크리에이터',
    course: '미드저니 3D 일러스트',
    rating: 5,
    date: '2026.07.19',
    comment: '몽환적인 3D 유리아트 느낌 내는 프롬프트 공식을 알려주셔서 제 브랜드 로고와 썸네일을 직접 만들었습니다. 가성비 최고의 1개월 이용권 수강입니다.',
    tag: '브랜드 퀄리티 수직상승'
  },
  {
    id: 5,
    name: '한소희 대표',
    course: '수공예품 창업 클래스',
    rating: 5,
    date: '2026.07.15',
    comment: '오프라인 워크숍에서 1:1로 피드백 주신 덕분에 아이디어스 입점 하루 만에 첫 주문을 받았습니다! 지니 튜터님 경력이 괜히 화려한 게 아니었어요.',
    tag: '첫 창업 주문 달성'
  }
];

export const instructorInfo = {
  name: '지니 튜터 (Jini Tutor)',
  role: '지니튜터클래스 메인 디렉터 & 교육 비즈니스 대표',
  credentials: [
    '누적 수강생 3,400+명 배출',
    '국내 주요 기업 & 기관 AI / 브랜딩 특강 총 120회+',
    '공간 컨설턴트 1급 & 디지털 콘텐츠 디렉터 전문 자격',
    '네이버 블로그/인스타그램 총 누적 방문 150만 돌파'
  ],
  philosophy: '“배움은 어렵거나 거창하지 않아야 합니다. 누구나 첫날부터 실생활과 비즈니스에 바로 써먹을 수 있는 최고 품질의 실용 콘텐츠를 전달합니다.”'
};

export const faqsData = [
  {
    q: '1개월 전 과목 이용권은 어떻게 작동하나요?',
    a: '1개월 이용권 결제 시, 30일 동안 지니튜터클래스의 모든 온라인 동영상 강의와 전자책을 자유롭게 수강하실 수 있습니다. 강제로 자동 결제되지 않으며, 만료 7일 전 안내 이메일을 받아보신 뒤 원하실 때 마이페이지에서 직접 갱신 결제하시면 됩니다.'
  },
  {
    q: '무료 맛보기 강의는 어떻게 볼 수 있나요?',
    a: '회원가입 없이도 누구나 각 강의의 [무료 맛보기] 버튼을 누르시면 1강 요약 동영상과 커리큘럼, 강사 이력을 바로 확인하실 수 있습니다.'
  },
  {
    q: '환불 규정은 어떻게 되나요?',
    a: '지니튜터클래스는 투명한 환불 정책을 준수합니다. 온라인 강의는 첫 강 시청 전까지 100% 환불, 오프라인 강좌는 개강 3일 전까지 100% 환불 가능합니다. 단, 전자책(PDF) 파일은 전달/다운로드 특성상 다운로드 후 환불이 불가합니다.'
  },
  {
    q: '오프라인 클래스는 어디서 진행되나요?',
    a: '오프라인 워크숍은 서울 강남/성수 지니튜터 스튜디오에서 소규모 정예(6~8명)로 진행됩니다. 결제 완료 즉시 장소 및 세부 주소, 준수 사항이 이메일/문자로 자동 발송됩니다.'
  }
];
