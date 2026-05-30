export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  details: {
    overview: string;
    features: string[];
    technologies: string[];
  };
}

export interface Work {
  image: string;
  title: string;
  description: string;
  link: string;
}

export type TabId = "skills" | "education" | "github";
