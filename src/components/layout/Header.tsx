import { useState, useEffect, useRef, type MouseEvent } from "react";
import styles from "./Header.module.scss";

type HeaderProps = {
  activeId?: string;
};

export default function Header({ activeId }: HeaderProps) {

  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);


  const items = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const onClickLink = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    console.log(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false); // 모바일에서 클릭하면 닫기
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>My Portfolio</h1>

        {/* 모바일 햄버거 버튼 */}
        <button
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
          ref={buttonRef}
        >
          ☰
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${open ? styles.open : ""}`}
          ref={navRef}
        >
          {items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => onClickLink(e, id)}
              className={`${styles.link} ${
                activeId === id ? styles.active : ""
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}