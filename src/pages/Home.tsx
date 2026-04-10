import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Hero, About, Projects, Contact } from "@/sections";
import styles from "./Home.module.scss";
import useScrollSpy from "@/hooks/useScrollSpy";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ids = ["about", "projects", "contact"];
  const activeId = useScrollSpy({
    ids,
    rootMargin: "-40% 0px 0% 0px",
    threshold: 0.2,
  });

  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!aboutSectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        top: '0%',
        ease: "none",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 0%",
          end: "bottom 30%",
          scrub: true,
          // markers: true,
        },
      });
    }, aboutSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout headerProps={{ activeId }}>
      <main className={styles.main}>

        <div className={styles.bgdiv}><div ref={bgRef} className={styles.bg}></div></div>

        <section
          ref={aboutSectionRef}
          className={styles.heroSection}
        >
          <Hero />
        </section>

        <section
          id="about"
          className={styles.aboutSection}
        >
          <div className={styles.sectionInner}>
            <About />
          </div>
        </section>        

        <section id="projects" className={styles.projectsSection}>
          <div className={styles.sectionInner}>
            <Projects />
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className={styles.sectionInner}>
            <Contact />
          </div>
        </section>
      </main>
    </Layout>
  );
}