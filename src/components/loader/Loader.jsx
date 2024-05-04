import React from "react";
import styles from './Loader.module.css'
import Navbar from "../navbar/NavBar";

const Loader = () => {
    return(
        <>
        <Navbar/>
        <div className={styles.LoaderText}>Інформація завантажується . . .</div>
        </>
    )
}

export default Loader;