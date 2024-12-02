import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const RootRouter = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootRouter