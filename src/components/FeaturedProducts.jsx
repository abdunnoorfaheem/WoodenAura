import React, { useContext } from "react";
import img from "../assets/chair.png";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import Slider from "react-slick";
import "../Featured.css";
import { apiData } from "./ContextApi";

const FeaturedProducts = () => {
  let dataAll = useContext(apiData);
  
  

  let featuredProducts=dataAll.filter((item)=>(item.category=="fragrances"))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="mb-4">
      <h3 className="text-2xl md:text-5xl font-bold text-center pt-20 text-[#1A0B5B] mb-8">
        Featured Products
      </h3>
      <div className="container mx-auto">
        <Slider  {...settings}>
         
         {featuredProducts.map((item)=>(
           <div className="!w-[95%] rounded-md group shadow-md">
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
         
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
