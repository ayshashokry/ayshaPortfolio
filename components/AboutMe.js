import React from "react";
import { Row, Col } from "antd";
import styles from "../styles/aboutMe.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiJavascript1, DiReact } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import homeStyles from "../styles/Home.module.scss";
export default function AboutMe() {
const skills = [
  { name: "HTML5", icon: <AiFillHtml5 /> },
  { name: "CSS3", icon: <DiCss3 /> },
  { name: "SASS", icon: <DiSass /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "TypeScript", icon: <SiTypescript /> },

  { name: "React.js", icon: <DiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },

  { name: "React Query" },
  { name: "Zustand" },

  { name: "React Hook Form" },
  { name: "Zod" },

  { name: "REST APIs" },
  { name: "SSR / SSG / ISR" },
  { name: "Code Splitting" },

  { name: "Jest" },
  { name: "Git" },
];
  return (
    <div className={styles.aboutSection}>
      <h4 className={homeStyles.mainTitle}>About me</h4>
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <p>
 Senior Frontend Developer with 7+ years of experience building scalable and high-performance web applications using React and Next.js.
  I specialize in designing maintainable architectures, optimizing performance, and delivering seamless user experiences.
  I have strong experience collaborating with backend engineers and business stakeholders to deliver reliable and efficient solutions.
  Currently, I focus on building complex dashboard systems and continuously improving frontend architecture and performance.
</p>

<p>
  I’m passionate about writing clean, maintainable code and building user-focused, accessible, and high-quality web applications.
</p>
        </Col>
        <Col
          style={{ textAlign: "center", width: "100%" }}
          sm={{ span: 24 }}
          md={{ span: 18 }}
          lg={{ span: 12 }}>
          <div className={styles.imgParent}>
            <img
              className={styles.userImg}
              src="/userImg.jpeg"
              alt="Aysha's image"
              height={400}
            />
          </div>
        </Col>
      </Row>
 <h4 style={{ paddingTop: "90px" }} className={homeStyles.mainTitle}>
  Technical Skills
</h4>

<ul className={styles.skillsList}>
  {skills.map((s, index) => (
    <li key={index}>
      {s.icon && <span>{s.icon}</span>}
      {s.name}
    </li>
  ))}
</ul>
    </div>
  );
}
