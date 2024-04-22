import React, { useState } from 'react'
import styles from '/src/components/client/Client.module.css'
import Navbar from '/src/components/navbar/NavBar.jsx'
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { render } from 'react-dom';

export default function SearchBar() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isReg, setReg] = useState(false);
  

  return (
    <div>
       <Navbar/>
      <div className={styles.Searchbar}>
        <div className={styles.Searchbar__items}>
          <div className={styles.Searchbar__controller}>
            <button onClick={() => setReg(false)} 
                    className={styles.Controller__button__station} 
                    style={{backgroundColor:"#e0f3d1", color:"#578b32"}}>Вхід</button>
            <Link to="/registration"><button onClick={() => setReg(true)} 
                    className={styles.Controller__button__route} >Реєстрація</button></Link>
          </div>
          <div className={styles.Searchbar__gets}>
            <div className={styles.input_container__from}>
              <input id="phoneNumber" type="text" placeholder=" " 
                     className={styles.input}  
                     onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/>
              <label htmlFor="phoneNumber" className= {styles.placeholder}>Телефон</label>
            </div>
            
            <div className={styles.input_container__from}>
              <input id="password" type="password" placeholder=" " 
                     className={styles.input}  
                     onChange={e => setPassword(e.target.value)} value={password}/>
              <label htmlFor="password" className= {styles.placeholder}>Пароль</label>
            </div>
            <Link className={styles.link__button }><button className={isReg ? styles.invisible : styles.Searchbar__button}>Вхід</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
