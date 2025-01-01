import React, { useContext } from "react";
import { apiData } from "./ContextApi";

const AllProducts = () => {
  let data = useContext(apiData);

  console.log(data);

  return (
    <>
      <section>
        <div className="container mx-auto py-8">
          <div className="flex flex-wrap justify-between gap-4">
            {data.map((item) => (
              <div className="w-[32%] shadow-xl px-3 py-4">
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

                  <div className="flex items-center justify-between">
                    <p className="text-md md:text-xl  ">Price:{item.price}</p>
                    <p className="text-md md:text-xl  ">
                      Discount-Percent: {item.discountPercentage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
