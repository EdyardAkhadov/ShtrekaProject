import React from 'react'
import styles from "./Client.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectIsAuth } from '../../redux/slices/auth';
import { Link } from 'react-router-dom';
import Navbar from '/src/components/navbar/NavBar.jsx';

export default function ClientPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  const userData = useSelector(state => state.auth.data);
   

    return(
        <>
            <Navbar/>
            <div>
                
            </div>
        </>
    )
}