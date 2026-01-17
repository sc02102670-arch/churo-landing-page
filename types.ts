// 추로LAB 프로젝트에 필요한 진짜 타입 정의입니다.
export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
}

export interface ReferenceItem {
  id: string;
  name: string;
  logo?: string;
}
