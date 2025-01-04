import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/navBar.module.scss";
export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.navBar}>
      <Link
        className={router.pathname == "/" ? styles.activeLink : ""}
        href="/">
        Home
      </Link>
      <Link
        className={router.pathname == "/projects" ? styles.activeLink : ""}
        href="/projects">
        Projects
      </Link>
      <a
        className={styles.cvBtn}
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1Pvxzq94Rp7FZzxf0qnJdbgKuoRm5HBST/view?usp=drive_link">
        Resume
      </a>
    </div>
  );
}
