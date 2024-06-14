import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  
  return (
    <div className={styles.Footer}>
        <p>З питань пов'язаних з сервісом звертатись на пошту : eduard.akhadov@hneu.net</p>
        <Link className={styles.link} to="https://zakon.rada.gov.ua/laws/show/z0495-20#Text">
          <p>Про затвердження Порядку обробки та захисту персональних даних</p>
        </Link>
        <p>© Всі права захищені</p>
        </div>
  )
}

export default Footer

