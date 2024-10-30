import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.png";

function about() {
  return (


<div className="container mt-5 pt-5 mb-5 pb-5">
<div className={`row ${styles.container}`}>
 
    
      <div className={`col-md-12 col-12 ${styles.col}`}>
          <Image className={styles.img} src={Hero} alt="MOHAMED RGUIG"/>
      </div>       

<div className={`col-md-12 col-12 mb-5 ${styles.col}`}>
<h1>About</h1>
     Après avoir pris la licence en economie & gestion et travailler depuis un certain temps en recouvrement, et lorsqu'un
      jour j'ai entendu parlez de domaine de l'informatique et ses dimensions, j'avais
       décider de faire des sacrifices et prendre mon choix difficile pour suivre mes 
       ambitions et commencer le challenge de devenir un développeur web professionel.<br></br>J'occupe maintenant le poste de dévelopeur WEB chez TopClass Lavazza Maroc.
       <br></br>Vous
        trouverez ci-dessus la rubrique : mon portfolio, qui montre l'ensemble de mes projets personnel et professionnel durant la période de mon expérience.
  </div></div></div>
  )
}

export default about
