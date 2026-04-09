import { useEffect, useRef } from "react";
import styles from "./Contact.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contactRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contactRef.current,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contactRef} className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>

      <p className={styles.desc}>
        프로젝트 협업이나 문의가 있으시면 언제든지 연락 주세요.
      </p>

      <div className={styles.links}>
        <a href="mailto:your@email.com" className={styles.primary}>
          Email
        </a>

        <a
          href="https://github.com/hms8905"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}