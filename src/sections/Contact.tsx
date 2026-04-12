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
      const q = gsap.utils.selector(contactRef);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl
        .fromTo(
          q(`.${styles.title}`),
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          q(`.${styles.mail}`),
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          q(`.${styles.desc}`),
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          q(`.${styles.primary}`),
          { autoAlpha: 0, y: 20, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contactRef} className={styles.contact}>
      <div className={styles.flex}>
        <div className={styles.text}>
          <h2 className={styles.title}>함께 일할 인재를 찾고 계신가요?</h2>

          <a href="mailto:hms8905@naver.com" className={styles.mail}>hms8905@naver.com</a>

          <p className={styles.desc}>
            저에게 궁금한 점이 있으시다면 언제든지 연락 주세요. <br/>빠르게 답장 드리겠습니다!
          </p>

          <div className={styles.links}>
            <a href="mailto:hms8905@naver.com" className={styles.primary}>
              Email
            </a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src="/images/profile_3.png" alt="" />
        </div>
      </div>
    </div>
  );
}