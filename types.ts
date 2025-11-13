
export interface Service {
  icon: string;
  title: string;
  description: string;
  details: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  gallery: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}
