import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";
import {portfolios} from './data.js';

/*async function getData(){
    const res = await fetch(`https://api.sampleapis.com/coffee/hot`)
if(!res.ok){
    throw new Error('Failed to fetch data')    
}return res.json()
}*/

export const metaData = {
    title : "MOHAMED RGUIG",
    description : "This is a short description of my professional website"
}



export default async function Portfolio({ limit }){
   /* const fetchProducts = async () => {
    const products = await getData()
    return products.slice(0, limit); // Limit products based on 'limit' prop
};*/

return (
    <div className={`${styles.container} container`}>
    <div>
        <h1 className={`text-center ${styles.titre}`}>These are my projects</h1>
    </div>
    <div className="row mt-4">
        {portfolios.map(portfolio => (
            <div key={portfolio.id} className="col-md-6 col-lg-4 mb-4 shadow p-3 mb-5 bg-white rounded">
                <Link href={portfolio.url} className={styles.post}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={portfolio.image}
                            fill={true}
                            alt='project image'
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={`text-white ${styles.title}`}>{portfolio.title}</h1>
                        <p className={`text-white ${styles.txt}`}>{portfolio.description}</p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
</div>
);}

