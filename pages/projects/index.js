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
      img: "https://i.postimg.cc/DytRn8Jz/training-System.png",
      data: "it's a training system that shows courses, coaches, and trainees, you can create an account to attend classes and get certificates.",
      role: "UI development",
      userData: { username: "admin@admin.com", password: "P@$$w0rd@a" },
    },
    {
      name: "Decision Support Systems",
      demo: "http://194.163.177.27/fron/",
      repo: null,
      img: "https://i.postimg.cc/LX2pRhWP/dsc.png",
      data: "website for an indicator developed by Simon Anholt and implemented by Ipsos. It aims to identify the impressions of individuals from (20) countries and their opinions about (60) countries in the world, within six general axes in all, and it has been implemented annually since 2008.",
      role: "UI development",
    },
    // {
    //   name: "Engineering Approval Companies",
    //   demo: "https://webgis.eamana.gov.sa/engApproval/",
    //   repo: null,
    //   img: "https://lh3.googleusercontent.com/GG-R76fD1P5JtAZpYItQTb2TSdwxGij2RMH8cPwyPX6scmmxzGDpKlloxxj8PYg4SAg=w2400",
    //   data: "This website belongs to eastern Portal and is used to create an engineering office account, edit existing accounts and view all office data and approve or cancel requests as an admin.",
    //   role: "UI/UX development",
    // },
    {
      name: "Eastern Portal",
      demo: "http://77.30.168.86/home/",
      repo: null,
      img: "https://i.postimg.cc/HkMDyQD5/e-portal.png",
      data: "It is an electronic portal that includes several electronic services for the General Administration of Geographic Information Systems. ",
      role: "UI/UX development",
    },
    {
      name: "Riyadh Portal",
      demo: "http://77.30.168.86/homery/",
      repo: null,
      img: "https://i.postimg.cc/15gbkpzT/riyadh-Portal.png",
      data: "The electronic services portal is an electronic portal through which citizens, residents, companies and government agencies from anywhere can access the services of the Riyadh Municipality and carry out transactions with them quickly and efficiently, as it is considered the gateway to the municipality's electronic services. ",
      role: "UI/UX development",
    },
    {
      name: "Akhdar Makkah",
      demo: "http://77.30.168.84/greenmakkah/",
      repo: null,
      img: "https://i.postimg.cc/50gMtbcR/akhdar.png",
      data: "The Green Makkah Project is part of the Saudi Green Initiative, which consolidates the direction of the Kingdom and the region in protecting land and nature and placing it in a road map with clear landmarks that contribute strongly to achieving a sustainable environment. The initiative also aims to expand the green areas in the region and rehabilitate the vegetation cover.",
      role: "UI/UX development",
    },
  
    {
      name: "Mahamy",
      demo: "http://77.30.168.86/mahamy/",
      repo: null,
      img: "https://i.postimg.cc/CKVyHzS2/mahamy.png",
      data: "Mahamy is a task manager website to add, arrange and manage employee tasks.",
      role: "UI/UX development",
      userData: { username: "mman1", password: "Aa123456@a" },
    },

    {
      name: "Pretty Woman",
      demo: "https://pretty-woman-rho.vercel.app/",
      repo: "https://github.com/ayshashokry/Pretty-Woman",
      img: "https://i.postimg.cc/sxLqB2Tw/prettywoman.png",
      data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
      role: "UI/UX development",
    },
    {
      name: "Bobian Elevators",
      demo: "https://bobian-elevators-kze5.vercel.app/",
      repo: "https://github.com/ayshashokry/BobianElevators",
      img: "https://i.postimg.cc/yNFHw0LB/bobian.png",
      data: "Bobian company offers this website for users to have a look at the company's elevators products online. ",
      role: "UI/UX development ",
    },
    {
      name: "The business hub",
      demo: "https://tbh-1.vercel.app/",
      repo: "https://github.com/ayshashokry/tbh1",
      img: "https://i.postimg.cc/pdBSfC09/tbh.png",
      data: "The business hub is a website for a coworking space, that shows place photos, location on the map, and contacts.  ",
      role: "UI/UX development",
    },
    {
      name: "Lirten website#1",
      demo: "https://lirten-1.vercel.app/",
      repo: "https://github.com/ayshashokry/Lirten-1",
      img: "https://i.postimg.cc/13w2tswr/lirten1.png",
      data: "Lirten empowers businesses to break into the digital age through providing professional software solutions. ",
      role: "UI/UX development",
    },
    {
      name: "Lirten website#2",
      demo: "https://lirten-2.vercel.app/",
      repo: "https://github.com/ayshashokry/Lirten-2",
      img: "https://i.postimg.cc/j5sGmmWQ/lirten2.png",
      data: "Integrated Creative Technologies is our unique methodology of approaching any business problem in a creative manner to create a solution that lasts. We use such a methodology to help people with vision find their unique voice and their appropriate touchpoints. ",
      role: "UI/UX development",
    },
    {
      name: "Fly Pyramids",
      demo: "https://fly-pyramids.vercel.app/",
      repo: "https://github.com/ayshashokry/Fly-Pyramids",
      img:"https://i.postimg.cc/qqXxFqBP/flypyramid.png",
      data: "Fly Pyramid is consisted of a group aviation enthusiasts who have a passion to evolve the air transport field and to provide high standard transport services to clients worldwide. Their team consists of aviation experts specialized in every field to contribute to the success and growth in the Middle East, Europe, and African Continents. ",
      role: "UI/UX development",
    },
    {
      name: "Al-Dawoudy",
      demo: "https://dawoudyy.vercel.app/",
      repo: "https://github.com/ayshashokry/Dawoudyy",
      img: "https://i.postimg.cc/1Xz1n2s5/dawoudy.png",
      data: "A long established company By Mr. Mostafa Ahmed Eldawody since 1984 in Portsaid, Damietta and Alexandira. They are market leaders and experts in their field as they excel at creating innovative solution designe t fulfill or exceed our customers’ needs, overcome obstacles and utilize resources in the most productive way.",
      role: "UI/UX development",
    },
    // {
    //   name: "OTIC",
    //   demo: "https://otic-avi.vercel.app/",
    //   repo: "https://github.com/ayshashokry/OTIC-AVI",
    //   img: "https://lh6.googleusercontent.com/WpZOjZpoSuHdDlmxlV6DZfyRbb4cY67nJc_ItDT9bEFQHUfrjC7V9U8VVMGPtyU0_1U=w2400",
    //   data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    //   role: "UI development",
    // },
    // {
    //   name: "Elesol",
    //   demo: "https://otic-avi.vercel.app/",
    //   repo: "https://github.com/ayshashokry/OTIC-AVI",
    //   img: "https://lh6.googleusercontent.com/dlF3pWEMfpxqCdGdmAiHdB_wNLTFMyi_Z8Qk00IicLgFx2UhPVP-2I5rgGWL9Lq5DoE=w2400",
    //   data: "Pretty woman company offers this website for users to have a look at the company's cosmetics products online. ",
    //   role: "UI development",
    // },
    {
      name: "Home Made",
      demo: "https://home-made.vercel.app/",
      repo: "https://github.com/ayshashokry/homemade",
      img: "https://i.postimg.cc/pX4Mrs7R/homemade.png",
      data: "Home Made is a website for users to have a look at the products online. ",
      role: "UI development",
    },
    {
      name: "My Reads",
      demo: "https://my-reads-delta-three.vercel.app/",
      repo: "https://github.com/ayshashokry/myreads",
      img: "https://i.postimg.cc/mkkK29yP/myreads.png",
      data: "My reads shows some books and shelfs, user can change the book's shelf and search for a book. ",
      role: "UI/UX development",
    },
    {
      name: "Bezel",
      demo: "https://bezel-chi.vercel.app/",
      repo: "https://github.com/ayshashokry/bezel",
      img: "https://i.postimg.cc/K83FD6L1/bezel.png",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "U-Code",
      demo: "https://u-code.vercel.app/",
      repo: "https://github.com/ayshashokry/u-code",
      img: "https://i.postimg.cc/Y9qsbFVd/ucode.png",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "Angora",
      demo: "https://angora1.vercel.app/",
      repo: "https://github.com/ayshashokry/Angora1",
      img: "https://i.postimg.cc/BvW3YmcM/angora.png",
      data: "It's a template for a company website. ",
      role: "UI development",
    },

    {
      name: "Fokir",
      demo: "https://fokir-omega.vercel.app/",
      repo: "https://github.com/ayshashokry/fokir",
      img: "https://i.postimg.cc/SQZhFSfX/fokir.png",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "Engage",
      demo: "https://engage-topaz.vercel.app/",
      repo: "https://github.com/ayshashokry/engage",
      img: "https://i.postimg.cc/15fZykvv/engage.png",
      data: "It's a template for a company website. ",
      role: "UI development",
    },
    {
      name: "Start Bootstrap",
      demo: "https://start-bootstrap.vercel.app/",
      repo: "https://github.com/ayshashokry/Start-Bootstrap",
      img: "https://i.postimg.cc/vmyjxkvF/startbootstrap.png",
      data: "It's a template for a company website. ",
      role: "UI development",
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
      {props.homePage ? (
        <div style={{ textAlign: "center" }}>
          <Link href="/projects">
            <Button className={styles.allProjBtn}> View all projects</Button>
          </Link>
        </div>
      ):undefined}
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
