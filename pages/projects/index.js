import homeStyles from "../../styles/Home.module.scss";
import styles from "../../styles/projects.module.scss";
import Head from "next/head";
import ProjectDetails from "../../components/ProjectDetails";
import { Button } from "antd";
import Link from "next/link";

export default function Projects(props) {
  const websites = [
    {
      name: "Training system",
      demo: "http://194.163.177.27/training-system/",
      repo: null,
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Courses website ",
    },
    {
      name: "Decision Support System",
      demo: "http://194.163.177.27/fron/",
      repo: null,
      img: "https://lh5.googleusercontent.com/M_gtO49L0yQ3v3zyvJDRy1mQsAUlr897KMnKd_RwLpeY0SzxMAMO8crpm5Dq4LFAeUo=w2400",
      data: "",
    },
    {
      name: "Engineering Approval Companies",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Eastern Portal",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Ryiadh Portal",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Akhdar Makkah",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Map Explorer",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Mahamy",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Task manager to add tasks and manage it.",
    },

    {
      name: "Pretty Woman",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img:"https://lh4.googleusercontent.com/ZgSqLu8YmSrDEgX9hBsmbtQjyCADJJdJzWH3PpUoYM-AaUn7bm5xV_NIQERf-NE-iGw=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "The business hub",
      demo: "https://tbh-1.vercel.app/",
      repo: "https://github.com/ayshashokry/tbh1",
      img: "https://lh6.googleusercontent.com/u--pxOK46_vru_FjaTIk-WdFkOetqz742V-EE9XW-amRADbf5sNkEDmXavcBhN8E5R8=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Lirten website#1",
      demo: "https://lirten-1.vercel.app/",
      repo: "https://github.com/ayshashokry/Lirten-1",
      img: "https://lh5.googleusercontent.com/vkxgvn4GSmxQSHea_9y6c7WisSnkWjm315F_QlKNF94trYyhgAh7Z-chZaZGLfXu6Qk=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Lirten website#2",
      demo: "https://vercel.com/ayshashokry/lirten-2",
      repo: "https://github.com/ayshashokry/Lirten-2",
      img: "https://lh3.googleusercontent.com/h9VQmr0esrcZcrdFirJ_9cInCfdwhrmZFahsqXnvHqxhBYQF5fFMWc5LvqwckBIfmUY=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Fly Pyramids",
      demo: "https://vercel.com/ayshashokry/fly-pyramids",
      repo: "https://github.com/ayshashokry/Fly-Pyramids",
      img: "https://lh6.googleusercontent.com/s4BPcVOXeKAInTA37-WFPIldlnSmbvTNzfOv6e6Sf4QqhHbl2cc1ORIxbWo7we2B_FM=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Al-Dawoudy",
      demo: "https://vercel.com/ayshashokry/dawoudyy",
      repo: "https://github.com/ayshashokry/Dawoudyy",
      img: "https://lh4.googleusercontent.com/SITmxBh7sIm5I2cWMEn1E8sSZjw8gopArExw8jVrIp6kVVOevJ5n7kUu6fON34H4b2Q=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "OTIC",
      demo: "https://otic-avi.vercel.app/",
      repo: "https://github.com/ayshashokry/OTIC-AVI",
      img: "https://lh6.googleusercontent.com/WpZOjZpoSuHdDlmxlV6DZfyRbb4cY67nJc_ItDT9bEFQHUfrjC7V9U8VVMGPtyU0_1U=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Elesol",
      demo: "https://otic-avi.vercel.app/",
      repo: "https://github.com/ayshashokry/OTIC-AVI",
      img: "https://lh6.googleusercontent.com/dlF3pWEMfpxqCdGdmAiHdB_wNLTFMyi_Z8Qk00IicLgFx2UhPVP-2I5rgGWL9Lq5DoE=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Home Made",
      demo: "https://home-made.vercel.app/",
      repo: "https://github.com/ayshashokry/homemade",
      img: "https://lh5.googleusercontent.com/hMMUp48zlo4VgOLB48O2VQZA4oF8rJvpFLcIzVLaQyMM1A_z4iMsBB6nIuwxTspTpVc=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "My Reads",
      demo: "https://my-reads-delta-three.vercel.app/",
      repo: "https://github.com/ayshashokry/myreads",
img:"https://lh3.googleusercontent.com/_itcjzRuRlhJMFIBkDHhe_86zb4SUKth7r83bR0hyEgoD8OY26YzyPs0o4RfJEWWbxY=w2400",      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Bezel",
      demo: "https://bezel-chi.vercel.app/",
      repo: "https://github.com/ayshashokry/bezel",
      img: "https://lh3.googleusercontent.com/0bYZhkaKXyyRxrTjy68x10E92a41dkg4lg3yD4RXvDub-a7aFpnA5K6zGtcRG7WqR1E=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "U-Code",
      demo: "https://u-code.vercel.app/",
      repo: "https://github.com/ayshashokry/u-code",
      img: "https://lh3.googleusercontent.com/rb8tXnr-43zBCqg_5QlhQiwePhOg0SBMstAyKsX6JSI-Bo-NDxHULhAb3LpalJGisHs=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Angora",
      demo: "https://angora1.vercel.app/",
      repo: "https://github.com/ayshashokry/Angora1",
      img: "https://lh6.googleusercontent.com/ZFZk4W0L5puMCN8-UPJVU8Ut2qpZkyc9EhYPTIBhW3HR0hTXo0z4BvgZy0DFLA9l_w0=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },

    {
      name: "Fokir",
      demo: "https://fokir-omega.vercel.app/",
      repo: "https://github.com/ayshashokry/fokir",
      img: "https://lh4.googleusercontent.com/j2rSiSsF-_J0Md8H5b8xkjzMZbLpjVfXbLEVugWYhpj8NmqedXutbLqVEJqrTtNCzy0=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Engage",
      demo: "https://engage-topaz.vercel.app/",
      repo: "https://github.com/ayshashokry/engage",
      img: "https://lh5.googleusercontent.com/gi6Ad1eWhkM51KKJVCLDMN-hNjMyiYvr44-is2wWY7Ky4aLeCdQXMFBgl-P_5uksfM0=w2400",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    },
    {
      name: "Start Bootstrap",
      demo: "https://start-bootstrap.vercel.app/",
      repo: "https://github.com/ayshashokry/Start-Bootstrap",
      img: "https://lh6.googleusercontent.com/xVR-9PxYEUBo5WC4NiTYWaqISLNUZ9xxVSm_k-des2k6BWq2gIMOw19wwtUCCGvK6V4=w2400",
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
