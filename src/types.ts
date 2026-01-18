
export interface Review {
  author: string;
  content: string;
}

export interface Curriculum {
  step: string;
  title: string;
  content: string;
}

export interface ProgramItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  // 상세 데이터 추가
  details: {
    overview: string;
    target: string;
    duration: string;
    method: string;
    reviews: Review[];
    curriculum: Curriculum[];
    strengths: string[];
  };
}

export interface ReferenceItem {
  id: string;
  name: string;
  category: string;
  logo: string; // 로고 이미지 경로 추가
}
