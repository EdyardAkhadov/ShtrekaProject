import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import Navbar from '/src/components/navbar/NavBar.jsx';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./Login.module.css";
import {useForm} from 'react-hook-form'
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';

export default function Login() {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();
  
  const {
    register, 
    handleSubmit, 
    formState:{errors, isValid},
  } = useForm({
    defaultValues:{
      phoneNumber: '',
      password: '',
    }
  })

const onSubmit = async(values) => {
  const data = await dispatch(fetchAuth(values))
  if(!data.payload){
    alert('Не вдалося авторизуватись!');
  }
  if('token' in data.payload){
    window.localStorage.setItem('token', data.payload.token);
  } 
}

if(isAuth){
  return <Navigate to="/"/>;
}
  return (
    <div>
       <Navbar/>
       <Paper classes={{ root: styles.root }}>
        <div className={styles.LogOrReg}>
          <Typography classes={{ root: styles.title }} variant="h5">
            Вхід в аккаунт
          </Typography>
          <p>або</p>
          <Link to="/registration"><p className={styles.Reg}>Реєстрація</p></Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <TextField
          className={styles.field}
          label="Номер телефону"
          color='success'
          error={Boolean(errors.phoneNumber?.message)}
          helperText={ errors.phoneNumber?.message }
          {...register('phoneNumber', {required:'Вкажіть номер телефону!'})}
          fullWidth/>
        </div>

        <div className={styles.inputs}>
          <TextField 
          color='success' 
          className={styles.field} 
          label="Пароль" 
          error={Boolean(errors.password?.message)}
          helperText={ errors.password?.message }
          {...register('password', {required:'Вкажіть пароль!'})}
          fullWidth />
        </div>
        <div className={styles.button} >
          <Button 
            style={{backgroundColor:"#254d09", color:"#ffffff"}} 
            type='submit'
            size="large" 
            variant="contained" 
            fullWidth>
             Увійти
          </Button>
        </div>
        </form>
    </Paper>
    </div>
  )
}
