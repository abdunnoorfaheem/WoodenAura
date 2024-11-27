import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LeatestProducts from '../components/LeatestProducts'
import ServiceOffer from '../components/ServiceOffer'
import UniqueFeatured from '../components/UniqueFeatured'
import TrendingProducts from '../components/TrendingProducts'


const Home = () => {
  return (
    <>
    <Hero/>
    <FeaturedProducts/>
    <LeatestProducts/>
    <ServiceOffer/>
    <UniqueFeatured/>
    <TrendingProducts/>
    </>
  )
}

export default Home