import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero10.png";
import Products from "./(dynamic)/portfolio/page";
import Blog from "./(dynamic)/experience/page";
import Contact from "./(static)/contact/page";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  return (
  <div className="container">
  <div className={`row ${styles.container}`}>
   
      
        <div className={`col-md-6 ${styles.col}`}>
            <Image className={styles.img} src={Hero} alt="MOHAMED RGUIG"/>
        </div>       
 
 <div className={`col-md-6 mb-5 ${styles.col}`}>
            <h1 className={styles.title}>Hi ! It's me MOHAMED RGUIG</h1>
            <p className={styles.description}>I'am a React.js & Next.js
             front-end web developer.<br></br>For more information, please get touch 
             with me.
           </p>
           <div className="row  mx-4 mb-2">
             <button className={`text-white  ${styles.button} `} ><a className='text-white' href="/contact" >Get in touch</a></button>
             <button className={`text-white   ${styles.button} `} ><a className='text-white' href="https://online.flippingbook.com/view/228921546/" >Show CV</a></button></div>
        </div>
    </div></div>
  );
}
