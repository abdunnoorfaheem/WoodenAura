import React from "react";
import img from "../assets/chair.png";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";

const FeaturedProducts = () => {
  return (
    <section className="border-2 border-red-700">
      <h3 className="text-2xl font-bold text-center pt-20 text-[#1A0B5B]">
        Featured Products
      </h3>
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-[24%]  shadow-xl  rounded-md">
          {/* <div className="flex">
                <p><CiShoppingCart /></p>
                <p><CiHeart /></p>
                <p><CiZoomIn /></p>
              </div> */}
            <div className="flex justify-center items-center bg-[#F6F7FB] py-4">
            
              
              <img src={img} alt="Image" />
             
            </div>
            
            <div className="text-center py-6">
              <h4 className="text-pink-600 font-bold text-xl">Cantilever chair</h4>
              <div className="flex justify-center gap-4">
                <p className="rounded-xl h-[5px] w-[15px] bg-red-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-green-700"></p>
                <p className="rounded-xl h-[5px] w-[15px] bg-blue-700"></p>
              </div>
              <p className="mt-1">code:Y523201</p>
              <p className="mt-1">$42.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
