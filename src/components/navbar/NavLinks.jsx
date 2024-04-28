import React from 'react'
import styles from '/src/styles/NavBar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectIsAuth } from '../../redux/slices/auth';
import { Link } from 'react-router-dom';

const NavLinks = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  const userData = useSelector(state => state.auth.data);
   
  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token')
  };

  return (
    <div>
    {isAuth ? (<ul className={styles.Links}>
        <li>
            <Link to="/" className={styles.Links__button}>Розклад</Link>
        </li>
        <li>
            <Link to="/aboutMe" className={styles.user__button}>{userData.firstName+" "+userData.secondName}</Link>
        </li>
        <li className={styles.Links__button}><button onClick={onClickLogout} className={styles.logout_button} variant="contained" color="error">
                  Вийти
        </button></li>
  </ul>) : (
  <ul className={styles.Links}>
        <li>
            <Link to="/" className={styles.Links__button}>Розклад</Link>
        </li>
        <li>
            <Link to="/login" className={styles.Links__button}>Увійти</Link>
        </li>
  </ul>)}
  </div>
  )
}

export default NavLinks;