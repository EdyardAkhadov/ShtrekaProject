import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Home from '../../Home'
import NotFound from './NotFound'
import Login from '../client/Login'
import Registration from '../client/Registration'
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth';

const Router = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])


  return (
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Login/>} path="/login"/>
              <Route element={<Registration/>} path="/registration"/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
  )
}

export default Router
