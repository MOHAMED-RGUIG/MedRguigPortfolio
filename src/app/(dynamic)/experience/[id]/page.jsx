
/*
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import blogs,{ getProductById } from '../data'; // Import the local data function


export async function getExperience() {
  

  const experience = getProductById(productId);

  if (!experience) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
        experience,
    },
  };
}

export default function Blo({ experience }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{experience.title}</h1>
          <p className={styles.desc}>{experience.description}</p>
        </div>
        <Image
          className={styles.postImage}
          src={experience.image}
          alt={experience.title}
          width={250}
          height={150}
        />
        <span className={styles.author}>{experience.category}</span>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia minus itaque rerum
          dolorem cupiditate natus, tenetur magnam expedita esse doloribus optio dolores?
          Eveniet, iure perferendis dolor nihil quo necessitatibus tenetur.
        </p>
      </div>
    </div>
  );
}
*/