import React from 'react'
import NavLinks from './NavLinks'
import styles from '/src/styles/NavBar.module.css'

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
        <NavLinks/>
    </nav>
  )
}
