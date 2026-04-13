export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  focusArea?: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl: string;
  studioLogoUrl?: string;
  gameLogoUrl?: string;
  color?: string;
  invertLogo?: boolean;
  logoScale?: number;
  useColorForLogo?: boolean;
  platforms?: string[];
}

export interface Writing {
  id: string;
  title: string;
  publication: string;
  date: string;
  link: string;
  category: string;
}
