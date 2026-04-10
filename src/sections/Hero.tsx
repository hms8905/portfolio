import { useEffect, useRef, type MouseEvent } from "react";
import styles from "./Hero.module.scss";
import { getImagePath } from "@/utils/getImagePath";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 0.8,
        },
      });
      tl
        .fromTo(
          `.${styles.char}`,
          { y: 60, autoAlpha: 0, rotateX: -90 },
          {
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            stagger: 0.04,
            ease: "back.out(1.7)",
          }
        )
        .fromTo(
          `.${styles.desc}`,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0 },
          "-=0.45"
        )
        .fromTo(
          `.${styles.actions}`,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0 },
          "-=0.35"
        ).fromTo(
          `.${styles.photo}`,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0 },
          "-=0.35"
        );
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { scale: 0.96, autoAlpha: 0.7 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.4,
            ease: "power2.out",
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!photoRef.current) return;

    const el = photoRef.current;

    const handleMove = (e: globalThis.MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      gsap.to(el, {
        x,
        y,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const onClickScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={heroRef} className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.flex}>
          <div className={styles.photo}>
            <img 
              ref={photoRef}
              src={getImagePath("/images/profile_1.png")}
              alt="" 
            />
          </div>
          <div className={styles.profile}>
            <h2 className={styles.title}>
              {["Myeongsik's", "Portfolio"].map((line, idx) => (
                <div key={idx}>
                  {line.split("").map((char, i) => (
                    <span key={i} className={styles.char}>
                      {char}
                    </span>
                  ))}
                </div>
              ))}
            </h2>
            <p className={styles.desc}>
              안녕하세요. 사용자 경험을 중심으로 만드는<br/>
              7년 차 웹 퍼블리셔 함명식입니다.
            </p>
            <div className={styles.actions}>
              <a
                href="#projects"
                className={styles.primary}
                onClick={(e) => onClickScroll(e, "projects")}
              >
                프로젝트
              </a>

              <a
                href="#contact"
                className={styles.secondary}
                onClick={(e) => onClickScroll(e, "contact")}
              >
                연락하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}