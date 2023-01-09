import homeStyles from "../../styles/Home.module.scss";
import styles from "../../styles/projects.module.scss";
import Head from "next/head";
import ProjectDetails from "../../components/ProjectDetails";
import { Button } from "antd";
import Link from "next/link";

//images
import prettywoman from "../../public/images/prettywoman.PNG";
import tbh from "../../public/images/tbh.PNG";
import lirten1 from "../../public/images/lirten1.PNG";
import lirten2 from "../../public/images/lirten2.PNG";
import dawoudy from "../../public/images/dawoudy.PNG";
import elesol from "../../public/images/elesol.PNG";
import flypyramid from "../../public/images/flypyramid.PNG";
import otic from "../../public/images/otic.PNG";
import bezel from "../../public/images/bezel.PNG";
import angora from "../../public/images/angora.PNG";
import fokir from "../../public/images/fokir.PNG";
import ucode from "../../public/images/ucode.PNG";
import homemade from "../../public/images/homemade.PNG";
import engage from "../../public/images/engage.PNG";
import myreads from "../../public/images/myreads.PNG";

import startbootstrap from "../../public/images/startbootstrap.PNG";

export default function Projects(props) {
  const websites = [
    {
      name: "Training system",
      demo: "http://194.163.177.27/training-system/",
      repo: null,
      img: prettywoman,
      data: "Courses website ",
    },
    {
      name: "Decision Support System",
      demo: "http://194.163.177.27/fron/",
      repo: null,
      img: prettywoman,
      data: "",
    },
    {
      name: "Engineering Approval Companies",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: prettywoman,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Eastern Portal",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: prettywoman,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Ryiadh Portal",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: prettywoman,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Akhdar Makkah",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: prettywoman,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Map Explorer",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: prettywoman,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Mahamy",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: prettywoman,
      data: "Task manager to add tasks and manage it.",
    },

    {
      name: "Pretty Woman",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: prettywoman,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "The business hub",
      demo: "https://tbh-1.vercel.app/",
      repo: "https://github.com/ayshashokry/tbh1",
      img: tbh,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Lirten website#1",
      demo: "https://lirten-1.vercel.app/",
      repo: "https://github.com/ayshashokry/Lirten-1",
      img: lirten1,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Lirten website#2",
      demo: "https://vercel.com/ayshashokry/lirten-2",
      repo: "https://github.com/ayshashokry/Lirten-2",
      img: lirten2,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Fly Pyramids",
      demo: "https://vercel.com/ayshashokry/fly-pyramids",
      repo: "https://github.com/ayshashokry/Fly-Pyramids",
      img: flypyramid,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Al-Dawoudy",
      demo: "https://vercel.com/ayshashokry/dawoudyy",
      repo: "https://github.com/ayshashokry/Dawoudyy",
      img: dawoudy,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "OTIC",
      demo: "https://otic-avi.vercel.app/",
      repo: "https://github.com/ayshashokry/OTIC-AVI",
      img: otic,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Elesol",
      demo: "https://otic-avi.vercel.app/",
      repo: "https://github.com/ayshashokry/OTIC-AVI",
      img: elesol,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Home Made",
      demo: "https://home-made.vercel.app/",
      repo: "https://github.com/ayshashokry/homemade",
      img: homemade,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "My Reads",
      demo: "https://my-reads-delta-three.vercel.app/",
      repo: "https://github.com/ayshashokry/myreads",
      img: myreads,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Bezel",
      demo: "https://bezel-chi.vercel.app/",
      repo: "https://github.com/ayshashokry/bezel",
      img: bezel,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "U-Code",
      demo: "https://u-code.vercel.app/",
      repo: "https://github.com/ayshashokry/u-code",
      img: ucode,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Angora",
      demo: "https://angora1.vercel.app/",
      repo: "https://github.com/ayshashokry/Angora1",
      img: angora,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },

    {
      name: "Fokir",
      demo: "https://fokir-omega.vercel.app/",
      repo: "https://github.com/ayshashokry/fokir",
      img: fokir,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Engage",
      demo: "https://engage-topaz.vercel.app/",
      repo: "https://github.com/ayshashokry/engage",
      img: engage,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Start Bootstrap",
      demo: "https://start-bootstrap.vercel.app/",
      repo: "https://github.com/ayshashokry/Start-Bootstrap",
      img: startbootstrap,
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
  ];
  const websitesToShow = props.homePage ? websites.slice(0, 4) : websites;
  return (
    <div className={styles.main} id={!props.homePage && styles.projMain}>
      {!props.homePage && (
        <Head>
          <title>Projects</title>
        </Head>
      )}
      <h4 className={styles.mainTitle}>Some Websites I’ve Built</h4>
      {props.homePage && (
        <div style={{ textAlign: "center" }}>
          <Link href="/projects">
            <Button className={styles.allProjBtn}> View all projects</Button>
          </Link>
        </div>
      )}
      <div className={styles.projectsDiv}>
        {websitesToShow.map((w, index) => (
          <div key={index}>
            <ProjectDetails website={w} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
