import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {


let cartItemNumber =useSelector((state)=>state.cartItemSlice.cartItems);









  return (
    <section className="bg-[#7E33E0] text-white md:h-[44px] py-2">
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="hidden md:flex gap-12">
          <div className="flex items-center gap-2">
            <CiMail />
            <p>abdunnoor2450@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlinePhoneInTalk />
            <p>+8801535452284</p>
          </div>
        </div>
        <div className="md:flex gap-6 items-center">
          <select name="" id="" className="bg-[#7E33E0] border-none">
            <option value="" selected>
              English
            </option>
            <option value="">Bangla</option>
          </select>
          <select name="" id="" className="bg-[#7E33E0] border-none">
            <option value="" selected>
              USD
            </option>
            <option value="">BDT</option>
          </select>
          <div className="md:flex items-center gap-1">
            <CiUser />
            <p>Login</p>
          </div>
          <div className="md:flex items-center gap-1">
            <p>Wishlist</p>
            <CiHeart className="md:text-2xl" />
          </div>
          <div className="relative">
          <Link to="/shoppingCart"><CiShoppingCart className="text-2xl md:text-3xl" /></Link>
          <h3 className="absolute top-0 left-3 md:-top-1 md:-right-1 bg-red-600 h-4 w-4 flex justify-center items-center rounded-full md:text-[12px] font-semibold text-[9px]">{cartItemNumber.length}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
