import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Myeongsik Ham
        </p>

        <div className={styles.links}>
          <a
            href="https://github.com/hms8905"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:your@email.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}