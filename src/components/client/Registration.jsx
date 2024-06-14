import styles from "./Login.module.css";
import Navbar from '/src/components/navbar/NavBar.jsx'
import "react-datepicker/dist/react-datepicker.css";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import { useForm } from "react-hook-form";
import mainStyles from '../../styles/MainStyles.module.css'
import Footer from "../footer/Footer";

export default function Registration() {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch();
    const {
      register, 
      handleSubmit, 
      formState:{errors, isValid},
    } = useForm({
      defaultValues:{ secondName: '', firstName: '', phoneNumber: '', password: '', }
    })
    const onSubmit = async(values) => {
      const data = await dispatch(fetchRegister(values))
      if(!data.payload){
        alert('Не вдалося зареєструватися!');
      }

      if('token' in data.payload){
        window.localStorage.setItem('token', data.payload.token);
      } 
    }
    if(isAuth){
      return <Navigate to="/"/>;
    }

  return (
    <div className={mainStyles.wrapper}>
       <Navbar/>
       <Paper classes={{ root: styles.root }}>
       <div className={styles.LogOrReg}>
          <Typography classes={{ root: styles.title }} variant="h5">
            Реєстрація
          </Typography>
          <p>або</p>
          <Link to="/login"><p className={styles.Reg}>Вхід в аккаунт</p></Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <TextField
            className={styles.field}
            label="Прізвище"
            color='success'
            error={Boolean(errors.secondName?.message)}
            helperText={ errors.secondName?.message }
            {...register('secondName', {required:'Вкажіть прізвище!'})}
            fullWidth/>
          </div>
          <div className={styles.inputs}>
            <TextField
            className={styles.field}
            label="Ім'я"
            color='success'
            error={Boolean(errors.firstName?.message)}
            helperText={ errors.firstName?.message }
            {...register('firstName', {required:'Вкажіть ім`я!'})}
            fullWidth/>
          </div>
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
            className={styles.field}
            label="Пароль"
            color='success'
            error={Boolean(errors.password?.message)}
            helperText={ errors.password?.message }
            {...register('password', {required:'Вкажіть пароль!'})}
            fullWidth/>
          </div>
        <div className={styles.button} >
          <Button 
          style={{backgroundColor:"#254d09", color:"#ffffff"}} 
          type='submit' 
          size="large" 
          variant="contained" 
          fullWidth>
          Зареєструватись
        </Button></div>
      </form>
    </Paper>
    <div className={mainStyles.Footer}><Footer/></div>
    </div>
  )
}
