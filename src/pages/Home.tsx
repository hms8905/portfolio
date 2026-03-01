import Layout from "@/components/Layout";
import { About, Projects, Contact } from "@/sections";
import styles from "@/App.module.scss";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Home() {
  const ids = ["about", "projects", "contact"];
  const activeId = useScrollSpy({
    ids,
    rootMargin: "-60px 0px -40% 0px",
    threshold: 0.2,
  });

  return (
    <Layout headerProps={{ activeId }}>
      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <About />
        </section>

        <section id="projects" className={styles.section}>
          <Projects />
        </section>

        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>
    </Layout>
  );
}
