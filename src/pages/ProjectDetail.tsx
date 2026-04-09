import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "@/components/Layout";
import styles from "./ProjectDetail.module.scss";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === Number(id));

  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
          <button
            type="button"
            className={styles.back}
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}
          >
            ← Back to projects
          </button>

            {project ? (
              <>
                <h1 className={styles.title}>{project.title}</h1>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.meta}>
                  {project.period && <span>{project.period}</span>}
                  {project.role && <span>{project.role}</span>}
                  {project.contribution && <span>{project.contribution}</span>}
                </div>
                <div className={styles.actions}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primary}
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondary}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </>
            ) : (
              <p className={styles.desc}>존재하지 않는 프로젝트입니다.</p>
            )}
          </div>
        </section>

        {project && (
          <section className={styles.section}>
            <div className={styles.content}>
              <h2>Overview</h2>
              <p>{project.overview}</p>

              {project.stack && (
                <>
                  <h2>Tech Stack</h2>
                  <ul className={styles.stackList}>
                    {project.stack.map((tech) => (
                      <li key={tech} className={styles.stackItem}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {project.images && project.images.length > 0 && (
                <>
                  <h2>Preview</h2>

                  {project.images.length === 1 ? (
                    <div className={styles.imageWrap}>
                      <img
                        src={project.images[0]}
                        loading="lazy"
                        decoding="async"
                        alt={`${project.title} preview`}
                        className={styles.image}
                      />
                    </div>
                  ) : (
                    <div className={styles.imageWrap}>
                      <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={16}
                        slidesPerView={1}
                        autoHeight= {true}
                        className={styles.previewSwiper}
                      >
                        {project.images.map((image, index) => (
                          <SwiperSlide key={image}>

                              <img
                                src={image}
                                loading="lazy"
                                decoding="async"
                                alt={`${project.title} preview ${index + 1}`}
                                className={styles.image}
                              />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}
                </>
              )}
              {project.features && (
                <>
                  <h2>Key Features</h2>
                  <ul className={styles.list}>
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {project.challenges && (
                <>
                  <h2>Challenges</h2>
                  <ul className={styles.list}>
                    {project.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}