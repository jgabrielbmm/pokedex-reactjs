import React from 'react'
import styles from './Card.module.css';


const Card = ({id, name, xp, img, type, height, weight}) => {

  const str = name;
  const nameCapitalize = str.charAt(0).toUpperCase() + str.slice(1);

  return (

    <div className={styles.card}>
        <img src={img} alt="foto do pokemon" />
      <div className={styles.info}>
        <h2>
          <span className={styles.id}>
            No.{id}
          </span> 
          <span className={styles.pokemon_name}>
            {nameCapitalize}
          </span>
        </h2>
        <p><span>Tipo:</span> {type}</p>
        <p>Experiência: {xp}</p>
        <p>Tamanho: {height/10} metros</p>
        <p>Peso: {weight/10} quilos</p>
      </div>
      
    </div>

  )
}

export default Card