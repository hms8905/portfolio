import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Projects.module.scss";

export default function Projects() {
  const projectList = [
    { id: 1, title: "Portfolio Website", desc: "React + Vite + Sass 기반" },
    { id: 2, title: "Landing Page", desc: "GSAP / ScrollTrigger 인터랙션" },
    { id: 3, title: "E-commerce UI", desc: "Redux + API 연동 예시" },
  ];

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides={false}
        slidesPerView={1.15}
        spaceBetween={16}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          480: { slidesPerView: 1.3, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className={styles.swiper}
      >
        {projectList.map((project) => (
          <SwiperSlide key={project.id}>
            <Link className={styles.card} to={`/project/${project.id}`}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}