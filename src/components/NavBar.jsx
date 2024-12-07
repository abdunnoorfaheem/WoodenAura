import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/Hekto.png";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  let [menu, setMenu] = useState(false);

  let menuBar = () => {
    setMenu(!menu);
  };
  // console.log(menu);

  return (
    <section className="font-lato font-bold sticky top-0 z-50">
      <nav className="flex justify-between items-center py-4 px-8 bg-gray-300">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className={`lg:flex lg:gap-24 lg:static  ${menu === true ? "duration-1000 ease-in-out absolute top-12 left-0 w-full bg-slate-300 text-center pb-4 z-50" : "absolute top-12 -left-[700px] w-full "}`}>
            <li className="hover:text-purple-700">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-purple-700">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="hover:text-purple-700"><Link to="/products">Products</Link></li>
            <li className="hover:text-purple-700"><Link to="/blog">Blog</Link></li>
            <li className="hover:text-purple-700"><Link to="/shop">Shop</Link></li>
            <li className="hover:text-purple-700"><Link to="/contact">Contact</Link></li>
            <li>
              <div className="flex items-center justify-center">
                <input
                  className="border-2 border-[#E7E6EF] outline-none w-56 h-8"
                  type="search"
                  name=""
                  id=""
                />
                <div className="bg-primary h-8 px-4 flex items-center rounded-sm">
                  <CiSearch className="text-xl text-white " />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* lg:hidden */}
        <div onClick={menuBar} className="lg:hidden">
          {menu === true ? <RxCross1 /> : <CiMenuBurger />}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
