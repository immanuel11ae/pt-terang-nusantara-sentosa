export type PagePath = 'beranda' | 'tentang-kami' | 'layanan' | 'klien-testimoni' | 'kontak';

export interface ClientPartner {
  name: string;
  category: string;
  tenure: string;
  icon: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  badge: string;
  icon: string;
  title: string;
  valueLabel: string;
  valueAmount: string;
  resultBadge: string;
  challenge: string;
  solution: string;
  metaLabel: string;
  metaValue: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface ServicePillar {
  id: string;
  pillarNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags?: string[];
  items?: string[];
  footerTag: string;
  isWide?: boolean;
}
