import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LeatestProducts from '../components/LeatestProducts'
import ServiceOffer from '../components/ServiceOffer'


const Home = () => {
  return (
    <>
    <Hero/>
    <FeaturedProducts/>
    <LeatestProducts/>
    <ServiceOffer/>
    </>
  )
}

export default Home