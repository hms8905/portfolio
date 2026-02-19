import { MouseEvent } from "react";
import styles from "./Header.module.scss";

type HeaderProps = {
  activeId?: string; // 현재 활성 섹션 id
};

export default function Header({ activeId }: HeaderProps) {
  const items = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const onClickLink = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>My Portfolio</h1>
        <nav className={styles.nav}>
          {items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => onClickLink(e, id)}
              className={`${styles.link} ${activeId === id ? styles.active : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}