import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/Hekto.png";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { apiData } from "./ContextApi";

const NavBar = () => {

  let data=useContext(apiData);
  // console.log(data);
  
  let [menu, setMenu] = useState(false);

  let menuBar = () => {
    setMenu(!menu);
  };
  
  let [input,setInput]=useState("");

  let [searchFilterProducts,setSearchFilterProducts]=useState([]); 

  let handleInput=(e)=>{

    if(e.target.value !== ""){
      let searchProducts=data.filter((item)=>item.title.toLowerCase().startsWith((e.target.value).toLowerCase()));
    setSearchFilterProducts(searchProducts);
    }
    else{
      setSearchFilterProducts([]);
    }
    
    
  }

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
              <div className="flex items-center justify-center relative">
                <input
                   onChange={handleInput}
                  className="border-2 border-[#E7E6EF] outline-none w-56 h-8"
                  type="search"
                  name=""
                  id=""
                />
                {
                  searchFilterProducts.length > 0 
                  
                  &&

                  <div className="absolute z-50 top-12 left-0 h-36 overflow-y-scroll">
                {searchFilterProducts.map((item)=>(
                    <div className="flex items-center bg-[#fdf5e2] border-2">
                      <h4>{item.title}</h4>
                      <img className="h-16 w-24" src={item.thumbnail} alt="" />
                    </div>
                   ))}
                </div>
                }
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
