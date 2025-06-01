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
            <h1 className={styles.title}>Hi ! IT'S ME MOHAMED RGUIG</h1>
            <p className={styles.description}>I'm a Web Developer.<br></br>For More Information, Please Get in Touch With Me.
           </p>
           <div className="row  mx-4 mb-2">
             <button className={`text-white  ${styles.button} `} ><a className='text-white' href="/contact" >Get in touch</a></button>
             <button className={`text-white   ${styles.button} `} ><a className='text-white' href="https://heyzine.com/flip-book/9048a14313.html" >Show CV</a></button>
          </div>
 
                  
</div>
    </div></div>
);
}
