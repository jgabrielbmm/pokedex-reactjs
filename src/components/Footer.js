import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h2>Projeto feito em ReactJS</h2>
        <p><a href="https://pokeapi.co/" target="blank" className={styles.link}>PokéApi</a> 
        <span className={styles.footer_span}> 2022 by João Gabriel Bento</span></p>
    </footer>
  )
}

export default Footer