import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Logo from '../assets/Hekto.png'
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {

    let [menue,setMenue]=useState(false);

    let menuBar=()=>{
        
        setMenue(true);
    }
    console.log(menue);
    
  return (
    <section className='font-lato font-bold'>
        <nav className='flex justify-between items-center py-4 px-8 bg-gray-300'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul className='flex gap-16'>
                    <li className='hover:text-purple-700'><Link to="/">Home</Link></li>
                    <li className='hover:text-purple-700'><Link to="/pages">Pages</Link></li>
                    <li className='hover:text-purple-700'>Products</li>
                    <li className='hover:text-purple-700'>Blog</li>
                    <li className='hover:text-purple-700'>Shop</li>
                    <li className='hover:text-purple-700'>Contact</li>
                </ul>
            </div>
            <div className='flex items-center '>
                <input className='border-2 border-[#E7E6EF] outline-none w-56 h-8' type="search" name="" id="" />
                <div className='bg-primary h-8 px-4 flex items-center rounded-sm'>
                <CiSearch  className='text-xl text-white '/>
                </div>
            </div>
            {/* lg:hidden */}
            <div className=''>
            <CiMenuBurger  onClick={menuBar}/>
            </div>
        </nav>
    </section>
  )
}

export default NavBar