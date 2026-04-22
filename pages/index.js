import Head from "next/head";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.scss";
import Projects from "./projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className={styles.main}>
        <div className={styles.introHeader}>
          <h4>Hi, my name is</h4>
          <h1>Aysha Shokry Abdelfatah</h1>
          <p>
           Senior Frontend Developer specializing in building scalable and high-performance web applications using React and Next.js.
Focused on clean architecture, performance optimization, and delivering seamless user experiences.
          </p>
        </div>
        {/* About Me */}
        <AboutMe />

        {/* Projects */}
        <Projects homePage />
      </div>
    </div>
  );
}
