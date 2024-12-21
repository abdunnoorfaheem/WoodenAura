import React, { useContext } from "react";
import { CiShoppingCart, CiHeart, CiZoomIn } from "react-icons/ci";
import Slider from "react-slick";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";
import "../Featured.css";

const FeaturedProducts = () => {
  const dataAll = useContext(apiData);

  // Filter featured products by category
  const featuredProducts = dataAll.filter((item) => item.category === "fragrances");

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
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-8">
      <h3 className="text-2xl md:text-4xl font-bold text-center pt-10 text-[#1A0B5B] mb-8">
        Featured Products
      </h3>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {featuredProducts.map((item) => (
            <div key={item.id} className="w-full p-2">
            
              <div className="rounded-md shadow-md group bg-white">
                
                <div className="relative bg-[#F6F7FB] py-6 flex items-center justify-center overflow-hidden">
                  <img
                    className="h-40 md:h-56 object-contain"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <Link to={`/shop/${item.id}`}>
                    <button className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#08D15F] text-white text-xs rounded-sm duration-300 ease-in-out group-hover:bottom-4">
                      View Details
                    </button>
                  </Link>
                  
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300">
                    <CiShoppingCart className="text-lg md:text-2xl text-purple-900 hover:bg-white p-1 rounded-full cursor-pointer" />
                    <CiHeart className="text-lg md:text-2xl text-blue-900 hover:bg-white p-1 rounded-full cursor-pointer" />
                    <CiZoomIn className="text-lg md:text-2xl text-blue-900 hover:bg-white p-1 rounded-full cursor-pointer" />
                  </div>
                </div>

                
                <div className="text-center py-4 group-hover:bg-[#2F1AC4] group-hover:text-white">
                  <h4 className="text-sm md:text-lg font-bold group-hover:text-white">
                    {item.title}
                  </h4>
                  <div className="flex justify-center gap-2 mt-2">
                    <span className="h-2 w-4 bg-red-700 rounded-full"></span>
                    <span className="h-2 w-4 bg-green-700 rounded-full"></span>
                    <span className="h-2 w-4 bg-blue-700 rounded-full"></span>
                  </div>
                  <p className="text-xs md:text-sm mt-2">Code: Y523201</p>
                  <p className="text-sm md:text-lg font-semibold mt-2">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
