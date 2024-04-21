import React from 'react'
import Navbar from '/src/components/navbar/NavBar.jsx'
import styles from '/src/styles/NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <Navbar/>
        <div className={styles.notfound_content}>
            <p>Сторінку за вашим запитом, нажаль, не знайдено</p>
        </div>
    </div>
  )
}
