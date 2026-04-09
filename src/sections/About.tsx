import { useEffect, useRef } from "react";
import styles from "./About.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        aboutRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            //once: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className={styles.about}>
      {/* <h2 className={styles.title}>About</h2> */}
      <div className={styles.flex}>
        <div className={styles.photo}>
          <img src="/public/images/profile_2.jpg" alt="" />
        </div>
        <div className={styles.text}>
          <p>
            <b>안녕하세요. 7년 차 웹 퍼블리셔 함명식입니다.</b> <br/>
            <br/>
            웹 표준과 웹 접근성을 준수하며 HTML, CSS, SCSS, JavaScript, React 등을 활용하여 
            웹사이트의 레이아웃과 디자인을 구성하고, Photoshop, figma툴의 숙지로 손쉽게 협업할 수 있습니다.
          </p>
                
          <ul>
            <li><b>work</b></li>
            <li><em>2019. 02 ~ 2025. 04</em> <span>에스제이더블유인터내셔널</span></li>
            <li><em>2017. 06 ~ 2018. 11</em> <span>비즈플로우</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}