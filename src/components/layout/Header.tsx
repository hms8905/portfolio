import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

type HeaderProps = {
  activeId?: string;
};

export default function Header({ activeId }: HeaderProps) {

  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const items = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const onClickLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8); // 8px만 내려가도 적용
    };

    onScroll(); // 초기 상태 반영
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${(scrolled || open) ? styles.scrolled : ""} ${open ? styles.open : ""}`}
      >
        <div className={styles.inner}>
          <Link to={`/`}>
            <h1 className={styles.logo}>Myeongsik's Web Portfolio</h1>
          </Link>

          {/* 모바일 햄버거 버튼 */}
          <button
            className={`${styles.menuButton} ${open ? styles.open : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            ref={buttonRef}
          >
            <span></span>
            <span></span>
            <span></span>
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
      <div className={`${styles.prelayers} ${open ? styles.open : ""}`}>
        <div className={styles.prelayer}></div>
        <div className={styles.prelayer}></div>
        <div className={styles.prelayer}></div>
        <div className={styles.prelayer}></div>
        <div className={styles.prelayer}></div>
      </div>
    </>
  );
}