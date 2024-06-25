/*import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { portfolios } from "../data.js";
import { useRouter } from "next/router";

// Define a function to fetch data by id
async function getData(id) {
  const portfolioItem = portfolios.find((item) => item.id === parseInt(id));

  if (!portfolioItem) {
    throw new Error('Portfolio item not found');
  }

  return portfolioItem;
}

export async function getStaticPaths() {
  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await getData(params.id);

  return {
    props: {
      product,
    },
  };
}

export default function Portfolio({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <Image
          className={styles.postImage}
          src={product.image}
          alt={product.title}
          width={250}
          height={150}
        />
        <span className={styles.author}>{product.category}</span>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
          {product.longDescription}
        </p>
      </div>
    </div>
  );
}*/
