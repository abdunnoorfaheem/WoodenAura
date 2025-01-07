import React, { useContext } from "react";
import { CiShoppingCart, CiHeart, CiZoomIn } from "react-icons/ci";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";

const LeatestProducts = () => {
  const dataShow = useContext(apiData);

  const filterData = dataShow.filter((item) => item.id >= 11 && item.id <= 18);

  return (
    <section className="container mx-auto py-10">
      <div>
        <h2 className="text-2xl font-bold md:text-5xl text-center mt-12 text-[#1A0B5B]">
          Latest Products
        </h2>
        <div className="flex justify-center gap-1 md:gap-10 mt-3">
          <h4 className="hover:text-[#FB4997] hover:underline">New Arrival</h4>
          <h4 className="hover:text-[#FB4997] hover:underline">Best Seller</h4>
          <h4 className="hover:text-[#FB4997] hover:underline">Featured</h4>
          <h5 className="hover:text-[#FB4997] hover:underline">
            Special Offer
          </h5>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 p-4 ">
        {filterData.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#EEEFFB] flex flex-col items-center justify-center p-4 w-full transition duration-300 hover:shadow-lg group rounded-md"
          >
            <div className="relative w-full flex justify-center items-center h-52">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-40 object-contain"
              />
              <p className="bg-[#3F509E] text-white px-4 py-1 absolute top-4 left-4">
                sale
              </p>

              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <Link to="/shoppingCart">
                  <CiShoppingCart className="text-3xl text-purple-900 bg-white p-2 rounded-full shadow-md hover:scale-110" />
                </Link>
                <CiHeart className="text-3xl text-red-600 bg-white p-2 rounded-full shadow-md hover:scale-110" />
                <CiZoomIn className="text-3xl text-blue-600 bg-white p-2 rounded-full shadow-md hover:scale-110" />
              </div>
            </div>

            <div className="w-full flex justify-between items-center py-3 bg-[#F7F7F7] px-4 mt-3">
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <div className="flex items-center gap-2 text-sm">
                {/* <p className="text-gray-600 line-through">{item.discount}</p> */}
                <p className="text-[#FB4997] font-bold">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestProducts;
