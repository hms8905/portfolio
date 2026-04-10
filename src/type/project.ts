export type Project = {
  id: number;
  title: string;
  desc?: string;
  thumbnail?: string;
  overview?: string;
  tag?: string[];
  github?: string;
  url?: string;
  images?: string[];
  period?: string;
  role?: string;
  contribution?: string;
  features?: string[];
  challenges?: string[];
};