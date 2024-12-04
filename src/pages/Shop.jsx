import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/PageHeading";
import { apiData } from "../components/ContextApi";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import Company from "../components/Company";
import { IoMdArrowDropdown } from "react-icons/io";

const Shop = () => {
  let data = useContext(apiData);
  
  let [category,setCategory]=useState([]);

  useEffect(()=>{
    
    setCategory([...new Set(data.map((item)=>item.category))])
  },[data]);

  let [categoryShow,setCategoryShow]=useState(false);





  return (
    <>
      <PageHeading title="Shop Grid Default" pageName="Shop Grid Default" />
      <div className="container mx-auto">
      <div className="flex">
        <div className="w-[30%]">
          <h3 onClick={()=>setCategoryShow(!categoryShow)} className="flex items-center gap-2 text-xl md:text-3xl">Category List <IoMdArrowDropdown /></h3>
          {categoryShow && <ul className="h-36 overflow-y-scroll">
          {category.map((item)=>(
            <li>{item}</li>
          ))}
          
        </ul>
          }
        </div>
        <div className="w-[70%] mt-4 mb-4 container mx-auto flex justify-between flex-wrap gap-6">
        {data.map((item) => (
          <div className="w-[30%] rounded-md group shadow-md">
          <div className="md:flex flex-col justify-center items-center bg-[#F6F7FB] py-6 relative overflow-hidden ">
            <img className="" src={item.thumbnail} alt="Image" />

            <button className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:px-4  md:py-2  mt-2 px-[2px] py-[2px] bg-[#08D15F] rounded-sm text-white text-[12px] duration-700 ease-in-out  group-hover:bottom-4 ">
              View Details
            </button>
            <div className="mt-2 flex absolute top-0 -left-32 group-hover:left-2 gap-1 duration-700 ease-in-out ">
              <p>
                <CiShoppingCart
                  className="md:text-4xl text-purple-900 md:p-2 
hover:bg-[#FFFFFF] rounded-2xl"
                />
              </p>
              <p>
                <CiHeart className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" />
              </p>
              <p>
                <CiZoomIn className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" />
              </p>
            </div>
          </div>

          <div className="text-center py-6 group-hover:bg-[#2F1AC4] group-hover:text-white">
            <h4 className="text-pink-600 font-bold lg:text-xl group-hover:text-white text-[12px]">
              {item.title}
            </h4>
            <div className="flex justify-center gap-4 mt-2 max-h-10">
              <p className="rounded-xl h-[5px] w-[15px] bg-red-700"></p>
              <p className="rounded-xl h-[5px] w-[15px] bg-green-700"></p>
              <p className="rounded-xl h-[5px] w-[15px] bg-blue-700"></p>
            </div>
            <p className="mt-1 text-[8px] lg:text-lg">Code:Y523201</p>
            <p className="mt-1">${item.price}</p>
          </div>
        </div>
        ))}
      </div>
      </div>
      <Company/>
      </div>
    </>
  );
};

export default Shop;
