import type { Project } from "@/type/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "시원스쿨 시험영어",
    period: "2026.03",
    tag: ["React", "TypeScript", "Sass"],
    contribution: "프론트 80%",
    thumbnail: "/images/projects/project_lab-mo1.jpg",
    images: [
      "/images/projects/project_lab-mo1.jpg",
      "/images/projects/project_lab-mo2.jpg",
      "/images/projects/project_lab-mo3.jpg",
      "/images/projects/project_lab-mo4.jpg",
      "/images/projects/project_lab-pc1.jpg",
      "/images/projects/project_lab-pc2.jpg",
      "/images/projects/project_lab-pc3.jpg"
    ],
  },
  {
    id: 2,
    title: "시원스쿨 진짜학습지",
    period: "2026.03",
    tag: ["Sass", "jQuery", "ScrollTrigger"],
    thumbnail: "/images/projects/products_daily-mo1.jpg",
    contribution: "프론트 100%",
    images: [
      "/images/projects/products_daily-mo1.jpg",
      "/images/projects/products_daily-pc1.jpg"
    ],
  },
  {
    id: 3,
    title: "시원스쿨 초등영어",
    period: "2026.03",
    tag: ["Sass", "jQuery","GSAP"],
    contribution: "프론트 50%",
    thumbnail: "/images/projects/products_junior-mo1.jpg",
    images: [
      "/images/projects/products_junior-mo1.jpg",
      "/images/projects/products_junior-pc1.jpg"
    ],
  },
  {
    id: 4,
    title: "시원스쿨 일본어",
    period: "2026.03",
    tag: ["Sass", "jQuery"],
    contribution: "퍼블리싱 100%",
    thumbnail: "/images/projects/products_japan-mo1.jpg",
    images: [
      "/images/projects/products_japan-mo1.jpg",
      "/images/projects/products_japan-pc1.jpg"
    ],
  },
    {
    id: 5,
    title: "시원스쿨 리크루트",
    period: "2026.03",
    tag: ["Sass", "javascript"],
    contribution: "퍼블리싱 100%",
    thumbnail: "/images/projects/products_recruit.jpg",
    images: ["/images/projects/products_recruit.jpg"],
  },
];