import React, { useContext } from "react";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";

const AllProducts = () => {
  let data = useContext(apiData);

  console.log(data);

  return (
    <>
      <section>
        <div className="container mx-auto py-8">
          <div className="md:flex flex-wrap justify-between gap-4">
            {data.map((item) => (
              <div className="md:w-[32%] shadow-xl">
                <div className="flex justify-center items-center">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-3xl font-bold text-center">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-md text-center text-gray-500 py-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between py-2 px-4">
                    <p className="text-md md:text-xl  ">Price:{item.price}</p>
                    <p className="text-md md:text-xl  ">
                      Discount-Percent: {item.discountPercentage}%
                    </p>
                  </div>
                </div>
                <Link to="/shop"><div>
                    <button className="bg-[#FB2E86] w-full text-white py-2">Shop Now</button>
                    </div></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
