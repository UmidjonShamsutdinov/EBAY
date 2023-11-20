import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import SinglePage from '../pages/single-page/SinglePage'
import Login from './login/Login'
import SignUp from './signup/SignUp'
import SingleCategory from '../pages/single-category/SingleCategory'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single-page' element={<SinglePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>                
        <Route path='/:id' element={<SingleCategory/>}/>                
    </Routes>
  )
}

export default RouteController