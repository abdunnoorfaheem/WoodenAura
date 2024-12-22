import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Logo from "../assets/Hekto.png";
import { apiData } from "./ContextApi";

const NavBar = () => {
  const location = useLocation();
  const data = useContext(apiData); 
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState("");
  const [searchFilterProducts, setSearchFilterProducts] = useState([]);

  
  const menuBar = () => {
    setMenu(!menu);
  };

 
  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value !== "") {
      const searchProducts = data.filter((item) =>
        item.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setSearchFilterProducts(searchProducts);
    } else {
      setSearchFilterProducts([]);
    }
  };

  
  const isActive = (path) => location.pathname === path;

  return (
    <section className="font-lato font-bold sticky top-0 z-50">
      <nav className="flex justify-between items-center py-4 px-8 bg-gray-300">
       
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        
        <div>
          <ul
            className={`lg:flex lg:gap-24 lg:static ${
              menu
                ? "duration-500 ease-in-out absolute top-12 left-0 w-full bg-slate-300 text-center pb-4 z-50"
                : "absolute top-12 -left-[700px] w-full"
            }`}
          >
            <li
              className={`hover:text-purple-900 ${
                isActive("/") ? "underline text-purple-700" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`hover:text-purple-900 ${
                isActive("/pages") ? "underline text-purple-700" : ""
              }`}
            >
              <Link to="/pages">Pages</Link>
            </li>
            <li
              className={`hover:text-purple-900 ${
                isActive("/products") ? "underline text-purple-700" : ""
              }`}
            >
              <Link to="/products">Products</Link>
            </li>
            <li
              className={`hover:text-purple-900 ${
                isActive("/blog") ? "underline text-purple-700" : ""
              }`}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className={`hover:text-purple-900 ${
                isActive("/shop") ? "underline text-purple-700" : ""
              }`}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`hover:text-purple-900 ${
                isActive("/contact") ? "underline text-purple-700" : ""
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>

            
            <li>
              <div className="flex items-center justify-center relative">
                <input
                  onChange={handleInput}
                  value={input}
                  className="border-2 border-[#E7E6EF] outline-none w-56 h-8 px-2"
                  type="search"
                  placeholder="Search..."
                />
                {searchFilterProducts.length > 0 && (
                  <div className="absolute z-50 top-12 left-0 bg-white shadow-md w-56 h-36 overflow-y-scroll">
                    {searchFilterProducts.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between px-2 py-1 border-b hover:bg-gray-100"
                      >
                        <h4 className="text-sm">{item.title}</h4>
                        <img
                          className="h-10 w-16 object-cover"
                          src={item.thumbnail}
                          alt={item.title}
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="bg-primary h-8 px-4 flex items-center rounded-sm">
                  <CiSearch className="text-xl text-white" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        
        <div onClick={menuBar} className="lg:hidden cursor-pointer text-2xl">
          {menu ? <RxCross1 /> : <CiMenuBurger />}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
