import React from 'react'
import NavLinks from './NavLinks'
import styles from '/src/styles/NavBar.module.css'
import { useState } from 'react'

export default function MobileNavigation() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.MobileNavigation}>
      <div className={isOpen ? styles.Button_menu_open : styles.Button_menu} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.Button_menu_item}></div>
      </div>
      {isOpen && <NavLinks />}
    </nav>
  )
}
