import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import NotFound from './NotFound'
import Client from '../client/Client'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Client/>} path="/client"/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
