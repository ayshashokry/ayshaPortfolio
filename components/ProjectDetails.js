import styles from "../styles/projects.module.scss";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectDetails({ website, index }) {
  return (
    <Row
      className={styles.projectDetails}
      id={index % 2 == 0 ? styles.evenProj : styles.oddProj}>
      <Col sm={{ span: 24 }} lg={{ span: 12 }}>
        <Image
          alt="Project's Photo"
          className={styles.projectImg}
          src={website.img}
        />
      </Col>
      <Col sm={{ span: 24 }} lg={{ span: 12 }}>
        <h3>{website.name}</h3>
        <p>{website.data}</p>
        <div className={styles.linksDiv}>
          <a target="_blank" rel="noreferrer" href={website.demo}>
            <Button>
              <BiLinkExternal />
              Demo
            </Button>
          </a>
          {website.repo !== null && (
            <a rel="noreferrer" target="_blank" href={website.repo}>
              <Button>
                <FiGithub />
                Code
              </Button>
            </a>
          )}
        </div>
      </Col>
    </Row>
  );
}
