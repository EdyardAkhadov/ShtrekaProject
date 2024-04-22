import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import NotFound from './NotFound'
import Login from '../client/Login'
import Registration from '../client/Registration'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Registration/>} path="/registration"/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
