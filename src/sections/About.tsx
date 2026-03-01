import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>Myeongsik Ham</h2>
      <p>안녕하세요. 7년 차 웹 퍼블리셔 함명식입니다. <br/>저는 니즈를 파악하여, 어떠한 사용자에게든 편리하고 좋은 웹 페이지를 만듭니다!</p>
    </div>
  );
}
