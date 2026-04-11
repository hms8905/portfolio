import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { getImagePath } from "@/utils/getImagePath";
import type { Project } from "@/type/project";
import Popup from "@/components/Popup"; // 팝업 컴포넌트 임포트
import styles from "./Projects.module.scss";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const savedSlide = Number(sessionStorage.getItem("projects-slide") ?? 0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(
        sectionRef.current!.querySelectorAll(".swiper-slide")
      );

      gsap.fromTo(
        slides,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openPopup = (project: Project) => {
    setSelectedProject(project);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <div ref={sectionRef} className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <Swiper
        modules={[Autoplay]}
        initialSlide={savedSlide}
        slidesPerView={1.3}
        spaceBetween={16}
        //loop
        /*
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        */
        breakpoints={{
          480: { slidesPerView: 1.3, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        onSlideChange={(swiper) => {
          sessionStorage.setItem("projects-slide", String(swiper.realIndex));
        }}
        className={styles.swiper}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={styles.card} onClick={() => openPopup(project)}>
              {project.thumbnail && (
                <div className={styles.thumbWrap}>
                  <img
                    src={getImagePath(project.thumbnail)}
                    alt={`${project.title} thumbnail`}
                    className={styles.thumb}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className={styles.cardBody}>
                <h3>{project.title}  <span>Click</span></h3>
                <div className={styles.tags}>
                {project.tag?.map((tag: string, index: number) => (
                  <span key={index} className={styles[tag]}>
                      {tag}
                  </span>
                ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {isPopupOpen && selectedProject && (
        <Popup project={selectedProject} onClose={closePopup} />
      )}
    </div>
  );
}