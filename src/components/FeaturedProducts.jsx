import React from "react";
import img from "../assets/chair.png";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";

const FeaturedProducts = () => {
  return (
    <section className="">
      <h3 className="text-2xl md:text-5xl font-bold text-center pt-20 text-[#1A0B5B] mb-8">
        Featured Products
      </h3>
      <div className="container mx-auto">
        <div className="md:flex justify-between">
          <div className="md:w-[24%]  shadow-xl  rounded-md group">
         
            <div className="flex flex-col justify-center items-center bg-[#F6F7FB] py-6 relative overflow-hidden">
            
              
              <img className=""  src={img} alt="Image" />

              
              <button className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:px-4  md:py-2  mt-2 px-[2px] py-[2px] bg-[#08D15F] rounded-sm text-white text-[12px] duration-700 ease-in-out  group-hover:bottom-4 ">View Details</button>
              <div className="mt-2 flex absolute top-0 -left-32 group-hover:left-2 gap-1 duration-700 ease-in-out">
                <p><CiShoppingCart className="md:text-4xl text-purple-900 md:p-2 
                 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiHeart  className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiZoomIn className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
              </div>
              
             
            </div>
            
            <div className="text-center py-6 group-hover:bg-[#2F1AC4] group-hover:text-white">
              <h4 className="text-pink-600 font-bold lg:text-xl group-hover:text-white ">Cantilever chair</h4>
              <div className="flex justify-center gap-4 mt-2">
                <p className="rounded-xl h-[5px] w-[15px] bg-red-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-green-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-blue-700"></p>
              </div>
              <p className="mt-1 text-sm lg:text-lg">Code:Y523201</p>
              <p className="mt-1">$42.00</p>
            </div>
          </div>
          <div className="md:w-[24%]  shadow-xl  rounded-md group">
         
            <div className="flex flex-col justify-center items-center bg-[#F6F7FB] py-6 relative overflow-hidden">
            
              
              <img className=""  src={img} alt="Image" />

              
              <button className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:px-4  md:py-2  mt-2 px-[2px] py-[2px] bg-[#08D15F] rounded-sm text-white text-[12px] duration-700 ease-in-out  group-hover:bottom-4 ">View Details</button>
              <div className="mt-2 flex absolute top-0 -left-32 group-hover:left-2 gap-1 duration-700 ease-in-out">
                <p><CiShoppingCart className="md:text-4xl text-purple-900 md:p-2 
                 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiHeart  className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiZoomIn className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
              </div>
              
             
            </div>
            
            <div className="text-center py-6 group-hover:bg-[#2F1AC4] group-hover:text-white">
              <h4 className="text-pink-600 font-bold lg:text-xl group-hover:text-white ">Cantilever chair</h4>
              <div className="flex justify-center gap-4 mt-2">
                <p className="rounded-xl h-[5px] w-[15px] bg-red-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-green-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-blue-700"></p>
              </div>
              <p className="mt-1 text-sm lg:text-lg">Code:Y523201</p>
              <p className="mt-1">$42.00</p>
            </div>
          </div>
          <div className="md:w-[24%]  shadow-xl  rounded-md group">
         
            <div className="flex  flex-col justify-center items-center bg-[#F6F7FB] py-6 relative overflow-hidden">
            
              
              <img className=""  src={img} alt="Image" />

              
              <button className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:px-4  md:py-2  mt-2 px-[2px] py-[2px] bg-[#08D15F] rounded-sm text-white text-[12px] duration-700 ease-in-out  group-hover:bottom-4 ">View Details</button>
              <div className="mt-2 flex absolute top-0 -left-32 group-hover:left-2 gap-1 duration-700 ease-in-out">
                <p><CiShoppingCart className="md:text-4xl text-purple-900 md:p-2 
                 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiHeart  className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiZoomIn className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
              </div>
              
             
            </div>
            
            <div className="text-center py-6 group-hover:bg-[#2F1AC4] group-hover:text-white">
              <h4 className="text-pink-600 font-bold lg:text-xl group-hover:text-white ">Cantilever chair</h4>
              <div className="flex justify-center gap-4 mt-2">
                <p className="rounded-xl h-[5px] w-[15px] bg-red-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-green-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-blue-700"></p>
              </div>
              <p className="mt-1 text-sm lg:text-lg">Code:Y523201</p>
              <p className="mt-1">$42.00</p>
            </div>
          </div>
          <div className="md:w-[24%]  shadow-xl  rounded-md group">
         
            <div className="flex flex-col justify-center items-center bg-[#F6F7FB] py-6 relative overflow-hidden">
            
              
              <img className=""  src={img} alt="Image" />

              
              <button className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:px-4  md:py-2  mt-2 px-[2px] py-[2px] bg-[#08D15F] rounded-sm text-white text-[12px] duration-700 ease-in-out  group-hover:bottom-4 ">View Details</button>
              <div className="mt-2 flex absolute top-0 -left-32 group-hover:left-2 gap-1 duration-700 ease-in-out">
                <p><CiShoppingCart className="md:text-4xl text-purple-900 md:p-2 
                 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiHeart  className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
                <p><CiZoomIn className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" /></p>
              </div>
              
             
            </div>
            
            <div className="text-center py-6 group-hover:bg-[#2F1AC4] group-hover:text-white">
              <h4 className="text-pink-600 font-bold lg:text-xl group-hover:text-white ">Cantilever chair</h4>
              <div className="flex justify-center gap-4 mt-2">
                <p className="rounded-xl h-[5px] w-[15px] bg-red-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-green-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-blue-700"></p>
              </div>
              <p className="mt-1 text-sm lg:text-lg">Code:Y523201</p>
              <p className="mt-1">$42.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
