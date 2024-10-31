import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";


async function getData(){
    const res = await fetch(`https://mohamed-rguig.github.io/study_api1/db.json`)
if(!res.ok){
    throw new Error('Failed to fetch data')    
}return res.json()
}

export const metaData = {
    title : "MOHAMED RGUIG",
    description : "This is a short description of my professional website"
}



export default async function Study({ limit }){
    const fetchStudy = async () => {
    const Studys = await getData()
    return Studys.slice(0, limit); // Limit products based on 'limit' prop
};

return (
    <div className={styles.container}>
<div>     <h1 ClassName={styles.titre}>There are my studies & certificates</h1>
</div>
<div className={`row col-md-12 col-12 mx-auto ${styles.mainContainer}`}>
    { fetchStudy().then (Studys => 
        Studys.map(Study =>(
        <Link href ={'/'}

        className ={`col-md-12 col-12 mt-4 mb-4 ${styles.post}`}
        key = {Study.id}>
        <div className={styles.imageContainer}>
            <Image 
            className={`col-md-12 col-12 mb-4 mx-auto ${styles.image}`}
            src={Study.image}
            fill={true}
            alt='post image'/> 
            </div>
            <div className={styles.content}>
          <h1 className={styles.title}>{Study.title}</h1>
          <h3 className={styles.txt}>{Study.Date}</h3>
           <p className={styles.text}>{Study.description}</p>
           </div>
           </Link>) ))}</div></div>)}

