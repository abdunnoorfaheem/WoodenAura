import React from "react";
import { CiMail, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let cartItemNumber = useSelector((state) => state.cartItemSlice.cartItems);

  return (
    <section className="bg-[#7E33E0] text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-0">
        
        <div className="hidden md:flex gap-12 items-center">
          <div className="flex items-center gap-2 text-sm">
            <CiMail />
            <p>abdunnoor2450@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MdOutlinePhoneInTalk />
            <p>+8801535452284</p>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto">
          
          <select
            name="language"
            className="bg-[#7E33E0] border-none text-sm outline-none cursor-pointer"
          >
            <option value="en" selected>
              English
            </option>
            <option value="bn">Bangla</option>
          </select>

          
          <select
            name="currency"
            className="bg-[#7E33E0] border-none text-sm outline-none cursor-pointer"
          >
            <option value="USD" selected>
              USD
            </option>
            <option value="BDT">BDT</option>
          </select>

          
          <div className="flex items-center gap-1 text-sm cursor-pointer">
          <Link to="/login" className="flex gap-1">
            <CiUser className="text-xl" />
            <p>Login</p></Link>
          </div>

         
          <Link to="/error">
          <div className="flex items-center gap-1 text-sm cursor-pointer">
            <p>Wishlist</p>
            <CiHeart className="text-xl" />
          </div>
          </Link>

          
          <div className="relative cursor-pointer">
            <Link to="/shoppingCart">
              <CiShoppingCart className="text-2xl md:text-3xl" />
            </Link>
            <span className="absolute top-0 left-4 md:top-0 md:-right-2 bg-red-600 text-white text-[9px] md:text-[12px] font-semibold h-4 w-4 flex justify-center items-center rounded-full">
              {cartItemNumber.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
