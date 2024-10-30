import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero10.png";
import Products from "./(dynamic)/portfolio/page";
import Blog from "./(dynamic)/experience/page";
import Contact from "./(static)/contact/page";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { socia_media } from "./data";

export default function Home() {
  return (
  <div className="container mt-5 pt-5 pb-5 mb-5">
  <div className={`row ${styles.container}`}>
   
      
        <div className={`col-md-6 ${styles.col}`}>
            <Image className={styles.img} src={Hero} alt="MOHAMED RGUIG"/>
        </div>       
 
 <div className={`col-md-6 mb-5 ${styles.col}`}>
            <h1 className={styles.title}>Hi ! It's me MOHAMED RGUIG</h1>
            <p className={styles.description}>I'm a React.js & Next.js
             front-end web developer.<br></br>For more information, please get in touch 
             with me.
           </p>
           <div className="row  mx-4 mb-2">
             <button className={`text-white  ${styles.button} `} ><a className='text-white' href="/contact" >Get in touch</a></button>
             <button className={`text-white   ${styles.button} `} ><a className='text-white' href="https://heyzine.com/flip-book/9e2f45702c.html" >Show CV</a></button>
          </div>
           <div className="row  mx-4 mb-2">
 <div>© 2024 MedCoding All right reserved.</div>

                    <div className={styles.social}>
                    {socia_media.map(media =><a key={media.id} href={media.link} target="_blank" rel="noopener noreferrer"><Image
                    key={media.id}
                    src={`/images/${media.name}.png`}
                    width={20}
                    height={20}
                    className={styles.icon}
                    alt={`MedCoding ${media.name} link`}
                    /></a>)
                    
                    }

                    </div>
    </div></div>
  );
}
