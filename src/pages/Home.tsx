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
    rootMargin: "-60px 0px -40% 0px",
    threshold: 0.2,
  });

  const aboutSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!aboutSectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(aboutSectionRef.current, {
        background: "radial-gradient(circle at 100% 100%, #93c5fd20, transparent 40%), radial-gradient(circle at 80% 100%, #3b82f620, transparent 50%)",
        ease: "none",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top bottom",
          end: "bottom top",
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
        <section className={styles.heroSection}>
          <Hero />
        </section>

        <section
          id="about"
          ref={aboutSectionRef}
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