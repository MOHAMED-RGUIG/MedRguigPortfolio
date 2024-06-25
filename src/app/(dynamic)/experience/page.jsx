import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";


async function getData(){
    const res = await fetch(`https://mohamed-rguig.github.io/experienceapi/db.json`)
if(!res.ok){
    throw new Error('Failed to fetch data')    
}return res.json()
}

export const metaData = {
    title : "MOHAMED RGUIG",
    description : "This is a short description of my professional website"
}



export default async function Experience({ limit }){
    const fetchExperience = async () => {
    const Experiences = await getData()
    return Experiences.slice(0, limit); // Limit products based on 'limit' prop
};

return (
    <div className={styles.container}>
<div>     <h1 ClassName={styles.titre}>This is my experience</h1>
</div>
<div className={`row col-md-12 col-12 mx-auto ${styles.mainContainer}`}>
    { fetchExperience().then (Experiences => 
        Experiences.map(Experience =>(
        <Link href ={'/'}

        className ={`col-md-12 col-12 mt-4 mb-4 ${styles.post}`}
        key = {Experience.id}>
        <div className={styles.imageContainer}>
            <Image 
            className={`col-md-12 col-12 mb-4 mx-auto ${styles.image}`}
            src={Experience.image}
      
            fill={true}
            alt='post image'/> 
            </div>
            <div className={styles.content}>
          <h1 className={styles.title}>{Experience.title}</h1>
          <h3 className={styles.txt}>{Experience.Date}</h3>
           <p className={styles.text}>{Experience.description}</p>
           </div>
           </Link>) ))}</div></div>)}

