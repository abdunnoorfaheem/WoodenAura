import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LeatestProducts from '../components/LeatestProducts'
import ServiceOffer from '../components/ServiceOffer'
import UniqueFeatured from '../components/UniqueFeatured'
import TrendingProducts from '../components/TrendingProducts'
import DiscountItem from '../components/DiscountItem'
import TopCategories from '../components/TopCategories'
import BelowBanner from '../components/BelowBanner'
import Company from '../components/Company'
import LatastBlog from '../components/LatastBlog'


const Home = () => {
  return (
    <>
    <Hero/>
    <FeaturedProducts/>
    <LeatestProducts/>
    <ServiceOffer/>
    <UniqueFeatured/>
    <TrendingProducts/>
    <DiscountItem/>
    <TopCategories/>
    <BelowBanner/>
    <Company/>
    <LatastBlog/>
    </>
  )
}

export default Home