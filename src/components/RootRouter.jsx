import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const RootRouter = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default RootRouter