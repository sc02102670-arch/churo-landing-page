import { ProgramItem, ReferenceItem } from './types';

export const PROGRAMS: ProgramItem[] = [
  {
    id: '1',
    category: '조직커뮤니케이션',
    title: 'The 완벽한타인 소통 RE:SPECT',
    description: '세대와 직급을 잇는 소통의 기술! 조직 내 진짜 대화를 통해 일의 효율을 높이는 방법을 제시합니다.',
    image: 'https://i.imgur.com/7vgaCjN.png',
    tags: ['소통', '세대차이', '직급'],
    details: {
      overview: "서로 다른 배경을 가진 구성원들이 '타인'이 아닌 '동료'로서 연결되는 심리적 안전감을 구축합니다.",
      target: "전사 임직원 및 팀장/팀원",
      duration: "4시간 / 8시간 (조정 가능)",
      method: "토론, 사례 연구, 소통 게임",
      reviews: [
        { author: "K사 팀장", content: "세대 차이를 '틀림'이 아닌 '다름'으로 이해하게 된 계기였습니다." },
        { author: "H사 신입사원", content: "선배님들과의 대화가 이렇게 즐거울 수 있다는 걸 처음 알았어요." }
      ],
      curriculum: [
        { step: "Module 1", title: "심리적 안전감", content: "솔직한 대화가 가능한 조직 문화의 기초 이해" },
        { step: "Module 2", title: "세대별 언어 코드", content: "베이비부머부터 Z세대까지, 각자의 소통 방식 분석" },
        { step: "Module 3", title: "RE:SPECT 기술", content: "비폭력 대화법(NVC)을 활용한 갈등 관리 실습" }
      ],
      strengths: ["현업 실제 갈등 사례 기반의 롤플레잉", "즉각적으로 사용 가능한 소통 툴킷 제공", "심리학 기반의 체계적인 접근"]
    }
  },
  {
    id: '2',
    category: '특이민원응대',
    title: '차이나는 민원 소통 클래스',
    description: '매뉴얼은 명확하게! 감정은 정리하는 진짜 민원의 깊이를 알아봅니다.',
    image: 'https://i.imgur.com/LqTLRUr.png',
    tags: ['민원', 'CS', '감정관리'],
    details: {
      overview: "악성 민원으로부터 담당자를 보호하고, 법적/심리적 대응 체계를 구축하여 서비스 질을 높입니다.",
      target: "대민 서비스 담당자, 공공기관 상담원",
      duration: "4시간",
      method: "법률 케이스 스터디, 감정 조절 워크숍",
      reviews: [
        { author: "O구청 공무원", content: "막무가내 민원인에게 어떻게 대처해야 할지 명확한 가이드라인을 얻었습니다." },
        { author: "S공사 상담원", content: "교육 후 스트레스 관리법이 큰 도움이 되었습니다." }
      ],
      curriculum: [
        { step: "Module 1", title: "민원 유형 분석", content: "특이 민원의 심리학적 배경과 유형 분류" },
        { step: "Module 2", title: "법적 대응 가이드", content: "정당한 권리 행사와 위법 행위의 경계 구분" },
        { step: "Module 3", title: "마음 근육 강화", content: "감정 노동 후 회복탄력성을 높이는 셀프 코칭" }
      ],
      strengths: ["최신 판례 및 고용노동부 가이드라인 반영", "실전 거절 화법 '쿠션 스피치' 집중 훈련", "담당자 심리 치유 세션 포함"]
    }
  },
  {
    id: '3',
    category: '팀빌딩',
    title: '같이의 가치',
    description: '함께 웃고 성장하는 팀의 에너지를 만듭니다. 협업과 신뢰를 높이는 팀 프로그램.',
    image: 'https://i.imgur.com/8beUu0C.png',
    tags: ['협업', '신뢰', '팀워크'],
    details: {
      overview: "단순한 놀이를 넘어, 우리 팀의 공동 목표와 핵심 가치를 공유하는 액티비티 중심 과정입니다.",
      target: "신규 팀, 프로젝트 TFT, 전사 워크숍",
      duration: "6시간 ~ 1박 2일",
      method: "아웃도어/인도어 팀 액션, 가치 경매",
      reviews: [
        { author: "L그룹 대리", content: "서로의 강점을 발견하고 신뢰가 두터워지는 소중한 시간이었습니다." },
        { author: "T사 팀장", content: "팀원들의 웃음소리를 이렇게 오래 들은 건 처음이네요." }
      ],
      curriculum: [
        { step: "Module 1", title: "아이스브레이킹", content: "심리적 장벽을 허무는 역동적 관계 맺기" },
        { step: "Module 2", title: "팀 챌린지", content: "한정된 자원으로 공동의 목표 달성하기" },
        { step: "Module 3", title: "Value 공유", content: "우리 팀만의 일하는 원칙(Ground Rule) 수립" }
      ],
      strengths: ["팀별 맞춤형 미션 설계", "결과보다 과정 중심의 디브리핑", "모든 구성원의 소외 없는 참여 유도"]
    }
  },
  {
    id: '4',
    category: '코드레드(협업)',
    title: 'CODE:RED',
    description: '각기 다른 역량을 가진 우리의 집단 지성 협업 플레이를 경험하세요.',
    image: 'https://i.imgur.com/bIPV1Jg.png',
    tags: ['집단지성', '문제해결'],
    details: {
      overview: "위기 상황을 가정하여 팀원들이 각자의 전문성을 발휘해 문제를 해결하는 몰입형 교육입니다.",
      target: "전략 수립 부서, 핵심 인재, 신입사원",
      duration: "4시간",
      method: "게이미피케이션, 상황 시뮬레이션",
      reviews: [
        { author: "G사 과장", content: "협업이 안 되면 절대 풀 수 없는 구조라 소통의 중요성을 뼈저리게 느꼈습니다." },
        { author: "M사 교육담당자", content: "학습자 몰입도가 역대급이었습니다. 강추합니다." }
      ],
      curriculum: [
        { step: "Step 1", title: "Mission Briefing", content: "위기 상황 인지 및 개인별 역할(Role) 부여" },
        { step: "Step 2", title: "Problem Solving", content: "단서 수집 및 집단지성을 활용한 논리적 해결" },
        { step: "Step 3", title: "Retro", content: "현업에서의 협업 프로세스 개선점 도출" }
      ],
      strengths: ["자체 개발 고퀄리티 시나리오", "데이터 기반의 팀 성과 분석 리포트 제공", "강력한 재미와 학습의 조화"]
    }
  },
  {
    id: '5',
    category: '스파이미스테리',
    title: 'Team Influence 스파이미스테리',
    description: '논리적 추리부터 감정적 호소까지! 학습자의 영향력을 최대로 끌어올리는 크라임씬 게이미피케이션 교육.',
    image: 'https://i.imgur.com/8BxMQh5.png',
    tags: ['리더십', '추리', '게이미피케이션'],
    details: {
      overview: "리더십의 핵심인 '영향력'을 미스테리 해결 과정을 통해 실전처럼 연습합니다.",
      target: "관리자, 차세대 리더",
      duration: "4시간",
      method: "역할극(Role Play), 증거 분석, 토론",
      reviews: [
        { author: "S건설 현장소장", content: "내 말이 상대에게 어떻게 전달되는지 객관적으로 볼 수 있었습니다." },
        { author: "J사 매니저", content: "설득의 기술이 단순히 말발이 아니라는 걸 배웠네요." }
      ],
      curriculum: [
        { step: "Act 1", title: "사건 발생", content: "미스테리 상황 속 각자의 캐릭터와 목표 파악" },
        { step: "Act 2", title: "상호 검증", content: "질문과 답변을 통한 정보 취득 및 영향력 행사" },
        { step: "Act 3", title: "결론 도출", content: "설득 전략 분석 및 리더십 스타일 성찰" }
      ],
      strengths: ["심리 전술과 논증 기술의 실전 결합", "개인별 커뮤니케이션 스타일 피드백", "높은 몰입도의 공간 연출 가이드"]
    }
  },
  {
    id: '6',
    category: '서비스마인드/CS',
    title: '고객 여정 지도 (Customer Journey Map)',
    description: '대기업 노하우 16년! 현장의 고객경험을 리터치하는 우리의 진짜 이야기를 함께 합니다.',
    image: 'https://i.imgur.com/45SmDCr.png',
    tags: ['고객경험', 'CX', '리터칭'],
    details: {
      overview: "고객이 우리 서비스를 만나는 모든 접점을 시각화하여 문제점을 찾고 혁신 포인트를 설계합니다.",
      target: "서비스 기획자, 마케터, 현장 서비스 인력",
      duration: "8시간 (워크숍 형태)",
      method: "맵핑(Mapping), 디자인 씽킹",
      reviews: [
        { author: "L유통 점장", content: "고객 입장에서 우리 매장이 어떻게 보이는지 적나라하게 알게 되었습니다." },
        { author: "C통신 기획팀", content: "단순 친절 교육이 아닌 서비스 프로세스 개선 교육이라 유익했습니다." }
      ],
      curriculum: [
        { step: "Stage 1", title: "Persona 설정", content: "우리의 핵심 타겟 고객 정의 및 고충 파악" },
        { step: "Stage 2", title: "Pain Point 발견", content: "고객 여정상의 감정 곡선 분석 및 결정적 순간(MOT) 추출" },
        { step: "Stage 3", title: "Service Retouch", content: "와우(WOW) 포인트를 만드는 서비스 시나리오 재설계" }
      ],
      strengths: ["16년 현장 전문가의 실무 밀착 피드백", "추상적인 구호가 아닌 실행 가능한 Action Plan 도출", "디지털/오프라인 통합 경험 설계"]
    }
  },
  {
    id: '7',
    category: '보이스트레이닝',
    title: 'Speech 설득의 힘',
    description: '목소리는 나의 첫인상이자 설득의 힘입니다. 발성/발음/호흡을 다듬어 자신감 있는 전달력을 완성합니다.',
    image: 'https://i.imgur.com/2FZmq6w.png',
    tags: ['스피치', '자신감', '설득'],
    details: {
      overview: "전문적인 발성과 발음 훈련을 통해 신뢰감을 주는 목소리를 만들고 비즈니스 커뮤니케이션을 강화합니다.",
      target: "강사, 임원, 영업직군, 사내 발표자",
      duration: "3시간 * 4회차 (또는 원데이)",
      method: "실시간 레코딩, 개별 코칭, 스크립트 실습",
      reviews: [
        { author: "Y사 인사팀", content: "발표 공포증이 있었는데 목소리에 힘이 생기니 자신감이 생겼습니다." },
        { author: "개인 수강생", content: "아나운서실에서 배운 것 같은 체계적인 훈련법이었어요." }
      ],
      curriculum: [
        { step: "Day 1", title: "발성의 원리", content: "복식호흡과 공명을 통한 울림 있는 소리 만들기" },
        { step: "Day 2", title: "발음 교정", content: "조음 기관 훈련 및 명확한 딜리버리 실습" },
        { step: "Day 3", title: "말의 온도", content: "강조와 멈춤(Pause)을 활용한 드라마틱한 전달" }
      ],
      strengths: ["Before/After 영상 비교 분석", "개인별 맞춤형 보이스 처방전 제공", "비즈니스 실전에 바로 쓰는 스피치 스킬"]
    }
  },
  {
    id: '8',
    category: '비즈니스 매너',
    title: '직장인의 품격 BUSINESS MANNER',
    description: '각기 다른 우주의 개인들이 모여 약속된 조직 플레이의 기본을 지원합니다. 인사, 복장, 이메일 매너 중심.',
    image: 'https://i.imgur.com/QQ20jhd.png',
    tags: ['매너', '신입사원', '비즈니스'],
    details: {
      overview: "프로 직장인으로서 갖춰야 할 기본적인 에티켓을 넘어, 관계의 호감을 얻는 비즈니스 스킬을 익힙니다.",
      target: "신입사원, 주니어 그룹",
      duration: "4시간",
      method: "시연, 실습, 퀴즈 배틀",
      reviews: [
        { author: "A사 신입사원", content: "이메일 쓰는 법부터 식사 예절까지, 누구도 안 알려준 걸 배워서 든든해요." },
        { author: "D사 인사담당자", content: "직원들의 태도가 한결 정중해진 게 느껴집니다." }
      ],
      curriculum: [
        { step: "Module 1", title: "첫인상의 공식", content: "T.P.O에 맞는 복장과 신뢰를 주는 인사법" },
        { step: "Module 2", title: "Digital 매너", content: "이메일, 메신저, 화상회의 에티켓 가이드" },
        { step: "Module 3", title: "Office 에티켓", content: "상하좌우 동료와의 원만한 관계를 위한 선 넘지 않는 대화" }
      ],
      strengths: ["Z세대의 감성에 맞춘 실용적 매너 교육", "꼰대스럽지 않은 관계 기술 제시", "즉시 활용 가능한 템플릿 제공"]
    }
  },
  {
    id: '9',
    category: '팔로워십',
    title: '조직의 게임체인저 슈퍼팔로워십',
    description: '리더와 팔로워가 함께 성장하는 조직 문화를 만듭니다. 상호 신뢰 기반의 소통 and 협력을 경험합니다.',
    image: 'https://i.imgur.com/jPc6cNa.png',
    tags: ['협력', '조직문화', '신뢰'],
    details: {
      overview: "팔로워는 시키는 일을 하는 사람이 아니라, 조직의 방향을 함께 결정하는 파트너임을 인식합니다.",
      target: "실무진, 중간 관리자",
      duration: "4시간",
      method: "자가진단, 그룹 토론, 사례 분석",
      reviews: [
        { author: "P사 대리", content: "내가 리더를 어떻게 도와야 조직이 성장하는지 깨달았습니다." },
        { author: "K사 부장", content: "우리 팀원들이 이 교육을 듣고 나서 훨씬 주도적으로 변했습니다." }
      ],
      curriculum: [
        { step: "Module 1", title: "팔로워십의 재정의", content: "켈리의 팔로워십 유형 진단 및 나의 위치 파악" },
        { step: "Module 2", title: "상사 관리(Upward)", content: "리더의 의도를 파악하고 성과로 연결하는 지원 기술" },
        { step: "Module 3", title: "수평적 협력", content: "동료와의 시너지를 만드는 건설적인 피드백" }
      ],
      strengths: ["수동적인 태도를 능동적으로 바꾸는 마인드셋 전환", "실전 상사 소통 전략(Managing Up)", "조직 내 존재감 향상 비법"]
    }
  },
  {
    id: '10',
    category: '문해력',
    title: '성인을 위한 문해력 점프-업',
    description: '읽기/이해/표현의 힘으로 생각하는 근육을 키웁니다. 텍스트를 넘어 상황을 읽는 사고력 중심 교육.',
    image: 'https://i.imgur.com/5DKTs8p.png',
    tags: ['사고력', '이해력', '표현'],
    details: {
      overview: "쏟아지는 정보 속에서 핵심을 파악하고, 논리적인 문장으로 생각을 정리하는 비즈니스 기본기를 강화합니다.",
      target: "보고서 작성이 잦은 직장인, 정보 선별이 어려운 현대인",
      duration: "4시간 ~ 8시간",
      method: "요약하기 실습, 팩트 체크 훈련, 논증 글쓰기",
      reviews: [
        { author: "F사 마케터", content: "복잡한 기획안을 한 페이지로 요약하는 힘이 생겼습니다." },
        { author: "S사 전략팀", content: "단순히 글을 읽는 게 아니라 행간의 의미를 파악하는 법을 배웠어요." }
      ],
      curriculum: [
        { step: "Module 1", title: "핵심 파악의 기술", content: "긴 텍스트에서 3줄 핵심 요약을 만드는 알고리즘" },
        { step: "Module 2", title: "비판적 사고", content: "논리적 오류 찾기 및 팩트 기반의 의사결정" },
        { step: "Module 3", title: "비즈니스 라이팅", content: "가독성 높은 두괄식 보고서 작성법" }
      ],
      strengths: ["유튜브/SNS 시대의 맞춤형 문해력 처방", "실제 비즈니스 문서 기반의 첨삭 지도", "논리적 사고 도구(Logic Tree 등) 활용"]
    }
  },
  {
    id: '11',
    category: '마인드셋',
    title: 'Grow and Grow (직급별 교육)',
    description: '조직의 방향과 비전을 함께 그립니다. 공동 목표 수립과 가치 내재화를 위한 실천전략을 제시합니다.',
    image: 'https://i.imgur.com/pGtZLPk.png',
    tags: ['비전', '가치', '성장'],
    details: {
      overview: "개인의 성장이 조직의 성장으로 이어지는 'Growth Mindset'을 장착하고 직급별 책임감을 고취합니다.",
      target: "신입, 주임/대리, 과/차장 각 그룹별 별도 운영",
      duration: "8시간",
      method: "비전 맵핑, 성찰 일기, 액션 플래닝",
      reviews: [
        { author: "N사 과장", content: "매너리즘에 빠져 있었는데 내가 왜 이 일을 하는지 다시 찾았습니다." },
        { author: "E사 인사담당", content: "조직의 가치가 직원들의 가슴 속에 전달된 느낌입니다." }
      ],
      curriculum: [
        { step: "Module 1", title: "Self-Reflection", content: "현재 나의 역량 상태와 업무 태도 객관화" },
        { step: "Module 2", title: "Growth Mindset", content: "실패를 배움으로 바꾸는 사고의 전환" },
        { step: "Module 3", title: "Alignment", content: "회사의 비전과 나의 커리어 로드맵 연결하기" }
      ],
      strengths: ["직급별 맞춤 시나리오 및 페인포인트 공략", "강력한 동기부여 스토리텔링", "교육 후 유지 관리 챌린지 프로그램 제공"]
    }
  },
  {
    id: '12',
    category: '목표관리',
    title: 'JUMP UP! 목표관리',
    description: '결과가 동반되는 목표는 다짐이 아니라 전략입니다. 성과를 향한 실행 계획과 자기 점검 루틴 설계.',
    image: 'https://i.imgur.com/bARgTal.png',
    tags: ['성과', '루틴', '전략'],
    details: {
      overview: "연초 세운 목표가 작심삼일이 되지 않도록, 과학적인 목표 설정 기법과 실행 도구를 학습합니다.",
      target: "성과를 내고 싶은 실무자, OKR/KPI 도입 조직",
      duration: "4시간",
      method: "OKR 수립 실습, 루틴 추적기 만들기",
      reviews: [
        { author: "V사 영업팀", content: "막연했던 목표가 숫자로 보이고, 당장 오늘 할 일이 명확해졌습니다." },
        { author: "K사 대표", content: "우리 회사의 지표가 드디어 한 방향으로 흐르기 시작했네요." }
      ],
      curriculum: [
        { step: "Module 1", title: "목표 설정의 과학", content: "SMART 기법을 넘어선 OKR 방식의 목표 수립" },
        { step: "Module 2", title: "실행의 마법", content: "IF-THEN 전략과 루틴 설계를 통한 의지력 극대화" },
        { step: "Module 3", title: "피드백과 회고", content: "데일리/위클리 성과 체크 및 경로 수정 기술" }
      ],
      strengths: ["실제로 작동하는 플래너/툴킷 제공", "뇌과학 기반의 습관 형성 원리 적용", "개인과 조직의 목표 정렬(Alignment) 집중"]
    }
  },
];

export const REFERENCES: ReferenceItem[] = [
  { id: 'r1', name: '롯데백화점', category: '유통/서비스', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lotte_Department_Store_logo.svg/512px-Lotte_Department_Store_logo.svg.png' },
  { id: 'r2', name: 'HD현대중공업', category: '제조/산업', logo: 'https://www.hhi.co.kr/Common/Images/header_logo.png' },
  { id: 'r3', name: '한국콜마', category: '뷰티/제조', logo: 'https://www.kolmar.co.kr/resources/img/common/logo.png' },
  { id: 'r4', name: '공영쇼핑', category: '방송/유통', logo: 'https://m.gongyoungshop.kr/static/common/images/common/logo_gongyoung.png' },
  { id: 'r5', name: '한전KPS', category: '에너지/공공', logo: 'https://upload.wikimedia.org/wikipedia/ko/c/c5/Kepco_kps_logo.png' },
  { id: 'r6', name: '서울시인재개발원', category: '공공/교육', logo: 'https://hrd.seoul.go.kr/common/img/common/logo.png' },
  { id: 'r7', name: '전남도청인재개발원', category: '공공/교육', logo: 'https://jeonnam.nhi.go.kr/center/img/common/logo.png' },
  { id: 'r8', name: '대구 달성군청', category: '지방자치단체', logo: 'https://www.dalseong.daegu.kr/images/kor/common/logo.png' },
  { id: 'r9', name: '영동군청', category: '지방자치단체', logo: 'https://www.yd21.go.kr/images/kr/common/logo.png' },
  { id: 'r10', name: '광주 서구청', category: '지방자치단체', logo: 'https://www.seogu.gwangju.kr/images/common/logo.png' },
  { id: 'r11', name: '광주 북구청', category: '지방자치단체', logo: 'https://www.bukgu.gwangju.kr/images/common/logo.png' },
  { id: 'r12', name: '광주 동구청', category: '지방자치단체', logo: 'https://www.donggu.gwangju.kr/images/common/logo.png' },
  { id: 'r13', name: '광주 남부경찰서', category: '공공/치안', logo: 'https://www.gjpolice.go.kr/common/img/sub/symbol_mark01.png' },
  { id: 'r14', name: '코레일', category: '공공/운송', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Korail_logo.svg/512px-Korail_logo.svg.png' },
  { id: 'r15', name: '전남대학교', category: '교육/대학', logo: 'https://www.jnu.ac.kr/images/common/logo.png' },
  { id: 'r16', name: '조선대학교', category: '교육/대학', logo: 'https://www.chosun.ac.kr/images/common/logo.png' },
  { id: 'r17', name: '동양미래대학교', category: '교육/대학', logo: 'https://www.dongyang.ac.kr/images/common/logo.png' },
  { id: 'r18', name: '호남대학교', category: '교육/대학', logo: 'https://www.honam.ac.kr/images/common/logo.png' },
  { id: 'r19', name: '한국상하수도협회', category: '공공/유관기관', logo: 'https://www.kwwa.or.kr/images/common/logo.png' },
  { id: 'r20', name: '도로교통공단', category: '공공/치안', logo: 'https://www.koroad.or.kr/images/common/logo.png' },
];
