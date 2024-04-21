import React, { useState } from 'react'
import styles from '/src/components/client/Client.module.css'
import Navbar from '/src/components/navbar/NavBar.jsx'
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { render } from 'react-dom';

export default function SearchBar() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkPassword, checkedPassword] = useState('');
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
                    style={isReg ? {} : {backgroundColor:"#e0f3d1", color:"#578b32"} }>Вхід</button>
            <button onClick={() => setReg(true)} 
                    className={styles.Controller__button__route} 
                    style={isReg ? {backgroundColor:"#e0f3d1", color:"#578b32"} : {} } >Реєстрація</button>   
          </div>
          <div className={styles.Searchbar__gets}>
            <div className={styles.input_container__from}>
              <input id="email" type="email" placeholder=" " 
                     className={styles.input}  
                     onChange={e => setEmail(e.target.value)} value={email}/>
              <label htmlFor="email" className= {styles.placeholder}>email</label>
            </div>

            <div className={isReg ? styles.input_container__from : styles.invisible }>
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
            
            <div className={isReg ? styles.input_container__from : styles.invisible }>
              <input id="checkPassword" type="password" placeholder=" " 
                     className={styles.input}  
                     onChange={e => checkedPassword(e.target.value)} value={checkPassword}/>
              <label htmlFor="checkPassword" className= {styles.placeholder}>Пароль</label>
            </div>
            
            <Link className={styles.link__button }><button className={isReg ? styles.invisible : styles.Searchbar__button}>Вхід</button></Link>
            <Link className={styles.link__button } ><button className={isReg ? styles.Searchbar__button: styles.invisible}>Реєстрація</button></Link>
          
          </div>
        </div>
      </div>
    </div>
  )
}
