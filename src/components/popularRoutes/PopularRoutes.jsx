import React from 'react';
import styles from './popularRoutes.module.css';
import { Link } from 'react-router-dom';

function PopularRoutes() {
  
  return (
    <div className={styles.popularRoutes}>
        <div className={styles.routes}>
            <h3>Популярні маршрути</h3>
            <ul>
                <li className={styles.route}>Харків-Пассажирський - Київ-Пассажирський</li>
                <li className={styles.route}>Миргород - Лубни</li>
                <li className={styles.route}>Харків-Пассажирський - Полтава-Київська</li>
            </ul>
        </div>
    </div>
  )
}

export default PopularRoutes

