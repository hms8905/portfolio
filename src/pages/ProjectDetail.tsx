import { useParams, Link } from "react-router-dom";
import styles from "./ProjectDetail.module.scss";

export default function ProjectDetail() {
  const { id } = useParams();

  const projectData = {
    1: {
      title: "Portfolio Website",
      desc: "React + Vite + Sass로 구성된 개인 포트폴리오 사이트입니다.",
    },
    2: {
      title: "Landing Page",
      desc: "GSAP ScrollTrigger를 이용한 인터랙티브 랜딩 페이지입니다.",
    },
    3: {
      title: "E-commerce UI",
      desc: "Redux 및 REST API 연동이 포함된 쇼핑몰 UI 샘플입니다.",
    },
  };

  const project = projectData[Number(id) as keyof typeof projectData];

  return (
    <div className={styles.detail}>
      <Link to="/" className={styles.back}>
        ← Back
      </Link>

      {project ? (
        <>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.text}>{project.desc}</p>
        </>
      ) : (
        <p className={styles.text}>존재하지 않는 프로젝트입니다.</p>
      )}
    </div>
  );
}
