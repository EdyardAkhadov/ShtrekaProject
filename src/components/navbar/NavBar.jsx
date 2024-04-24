import React from 'react';
import styles from '/src/styles/NavBar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import logo from '/public/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <div className={styles.Navbar}>
      <Link to="/"><img src={logo} alt="STREKA" className={styles.Logo}/></Link>
      <Navigation/>
      <MobileNavigation/>
    </div>
  )
}

export default Navbar

