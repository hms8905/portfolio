import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.scss";

export default function Projects() {
  const navigate = useNavigate();

  const projectList = [
    { id: 1, title: "Portfolio Website", desc: "React + Vite + Sass 기반" },
    { id: 2, title: "Landing Page", desc: "GSAP / ScrollTrigger 인터랙션" },
    { id: 3, title: "E-commerce UI", desc: "Redux + API 연동 예시" },
  ];

  const handleClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500, // 3.5초마다 자동 슬라이드
          disableOnInteraction: false, // 사용자가 클릭해도 멈추지 않음
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {projectList.map((project) => (
          <SwiperSlide key={project.id}>
            <div
              className={styles.card}
              onClick={() => handleClick(project.id)}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
