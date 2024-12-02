import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  return (
    <section className="bg-[#7E33E0] text-white md:h-[44px] py-2">
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="md:flex gap-12">
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
                <option value=""selected>English</option>
                <option value="">Bangla</option>
            </select>
            <select name="" id="" className="bg-[#7E33E0] border-none">
                <option value=""selected>USD</option>
                <option value="">BDT</option>
            </select>
            <div className="flex items-center gap-1">
            <CiUser />
                <p>Login</p>
            </div>
            <div className="flex items-center gap-1">
            
            <p>Wishlist</p>
            <CiHeart />
            </div>
            <CiShoppingCart />
        </div>
      </div>
    </section>
  );
};

export default Header;
