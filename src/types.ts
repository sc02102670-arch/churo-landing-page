export interface ProgramItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    overview: string;
    target: string;
    duration: string;
    method: string;
    reviews: Array<{ author: string; content: string }>;
    curriculum: Array<{ step: string; title: string; content: string }>;
    strengths: string[];
  };
}

export interface ReferenceItem {
  id: string;
  name: string;
  category: string;
  logo: string;
}
