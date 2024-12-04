import React from "react";
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import X from '../assets/x.png';
import Hekto from '../assets/Hekto.png';

const Footer = () => {
  return (
    <section className="bg-[#d1d3e0]"> 
      <div className="container mx-auto">
        <div className="text-[#8A8FB9] py-8 md:flex justify-between items-center">
        <div className="md:w-[24%]">
            <img src={Hekto} alt="" />
            <div className="mt-4">
                
                <input className="px-8 py-4 bg-white outline-none rounded-md " type="email" name="" id="" placeholder="Enter Email Address" />
                <button className="bg-[#FB2E86] text-white px-8 py-4 rounded-md">Sign Up</button>
                
                <p>Contact Info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
        </div>
        <div className="md:w-[24%]">
            <h3 className="text-xl md:text-3xl text-black font-bold ">Categories</h3>
            <ul className="mt-5">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
            </ul>
        </div>
        <div className="md:w-[24%]">
            <h3 className="text-xl md:text-3xl text-black font-bold">Customer Care</h3>
            <ul className="mt-5">
                <li>My Account</li>
                <li>Discount</li>
                <li>Orders History</li>
                <li>Returns</li>
                <li>Order Tracking</li>
            </ul>
        </div>
        <div className="md:w-[24%]">
            <h3 className="text-xl md:text-3xl text-black font-bold">Pages</h3>
            <ul className="mt-5">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
            </ul>
        </div>
        </div>
       
      </div>

      <div className="w-[100%] md:h-[53px] bg-[#E7E4F8] ">
        <div className="md:flex justify-between items-center text-center py-2  md:mx-[250px]">
        <p className="text-[#9DA0AE] text-lg md:text-2xl">©WoodenAura - All Rights Reserved</p>
            <div className="flex gap-4 ml-[134px] md:ml-0 mt-1">
                <img className="h-[19px] w-[19px]" src={Facebook} alt="" />
                <img className="h-[19px] w-[19px]" src={Instagram} alt="" />
                <img className="h-[19px] w-[19px]" src={X} alt="" />
            </div>
        </div>
            
        </div>
    </section>
  );
};

export default Footer;
