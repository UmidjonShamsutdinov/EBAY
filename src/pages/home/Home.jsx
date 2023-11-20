import React from 'react'
import "./Home.scss"
import Navbar from '../../layout/nav/Navbar'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Products2 from '../../components/products2/Products2'




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
        <Products2/>
    </div>
  )
}

export default Home