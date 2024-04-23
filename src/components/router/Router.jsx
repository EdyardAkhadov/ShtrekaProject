import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import NotFound from './NotFound'
import Login from '../client/Login'
import Registration from '../client/Registration'
import {Provider} from 'react-redux' 
import store from '../../redux/store'

const Router = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Registration/>} path="/registration"/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default Router
