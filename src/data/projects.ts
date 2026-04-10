export type Project = {
  id: number;
  title: string;
  desc: string;
  thumbnail?: string;
  overview?: string;
  stack?: string[];
  github?: string;
  demo?: string;
  images?: string[];
  period?: string;
  role?: string;
  contribution?: string;
  features?: string[];
  challenges?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "시원스쿨 시험영어",
    desc: "React 일부와 Sass로 구성된 사이트입니다.",
    thumbnail: "/images/projects/project_lab-mo1.jpg",
    overview:
      "포트폴리오 사이트로, 반응형 레이아웃과 프로젝트 상세 페이지, 접근성 개선을 포함하고 있습니다.",
    stack: ["React", "TypeScript", "Vite", "Sass"],
    github: "https://github.com/your-repo",
    demo: "https://hms8905.github.io/portfolio/",
    images: [
      "/images/projects/project_lab-mo1.jpg",
      "/images/projects/project_lab-mo2.jpg",
      "/images/projects/project_lab-mo3.jpg",
      "/images/projects/project_lab-mo4.jpg",
      "/images/projects/project_lab-pc1.jpg",
      "/images/projects/project_lab-pc2.jpg",
      "/images/projects/project_lab-pc3.jpg"
    ],
    period: "2026.03",
    role: "개인 프로젝트",
    contribution: "기획 · 디자인 · 개발 100%",
    features: [
      "반응형 레이아웃 구현",
      "프로젝트 상세 페이지 라우팅",
      "Swiper 기반 프로젝트 캐러셀",
    ],
    challenges: [
      "sticky header와 anchor scroll offset 문제 해결",
      "React Router 이동 시 스크롤 위치 초기화 처리",
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "React + Vite + Sass로 구성된 개인 포트폴리오 사이트입니다.",
    thumbnail: "/projects/portfolio-cover1.jpg",
    overview:
      "포트폴리오 사이트로, 반응형 레이아웃과 프로젝트 상세 페이지, 접근성 개선을 포함하고 있습니다.",
    stack: ["React", "TypeScript", "Vite", "Sass"],
    github: "https://github.com/your-repo",
    demo: "https://hms8905.github.io/portfolio/",
    images: ["/projects/portfolio-cover1.jpg", "/projects/portfolio-cover1-2.jpg"],
    period: "2026.03",
    role: "개인 프로젝트",
    contribution: "기획 · 디자인 · 개발 100%",
    features: [
      "반응형 레이아웃 구현",
      "프로젝트 상세 페이지 라우팅",
      "Swiper 기반 프로젝트 캐러셀",
    ],
    challenges: [
      "sticky header와 anchor scroll offset 문제 해결",
      "React Router 이동 시 스크롤 위치 초기화 처리",
    ],
  },
  {
    id: 3,
    title: "Landing Page",
    desc: "GSAP ScrollTrigger를 이용한 인터랙티브 랜딩 페이지입니다.",
    thumbnail: "/projects/portfolio-cover2.jpg",
    overview:
      "스크롤 기반 애니메이션과 인터랙션을 중심으로 구현한 랜딩 페이지입니다.",
    stack: ["React", "GSAP", "ScrollTrigger", "Sass"],
    images: ["/projects/portfolio-cover2.jpg"],
    period: "2026.03",
    role: "개인 프로젝트",
    contribution: "기획 · 디자인 · 개발 100%",
    features: [
      "반응형 레이아웃 구현",
      "프로젝트 상세 페이지 라우팅",
      "Swiper 기반 프로젝트 캐러셀",
    ],
    challenges: [
      "sticky header와 anchor scroll offset 문제 해결",
      "React Router 이동 시 스크롤 위치 초기화 처리",
    ],
  },
  {
    id: 4,
    title: "E-commerce UI",
    desc: "Redux 및 REST API 연동이 포함된 쇼핑몰 UI 샘플입니다.",
    thumbnail: "/projects/portfolio-cover3.jpg",
    overview:
      "상품 목록, 필터링, 상태 관리, API 연동 흐름을 포함한 UI 샘플 프로젝트입니다.",
    stack: ["React", "Redux", "REST API", "Sass"],
    images: ["/projects/portfolio-cover3.jpg"],
    period: "2026.03",
    role: "개인 프로젝트",
    contribution: "기획 · 디자인 · 개발 100%",
    features: [
      "반응형 레이아웃 구현",
      "프로젝트 상세 페이지 라우팅",
      "Swiper 기반 프로젝트 캐러셀",
    ],
    challenges: [
      "sticky header와 anchor scroll offset 문제 해결",
      "React Router 이동 시 스크롤 위치 초기화 처리",
    ],
  },
];