import React from "react";
import sofaChair from '../assets/sofaChair.png';
import arrow from '../assets/arrow.png';

const DiscountItem = () => {
  return (
    <section>
      <div>
        <div>
          <h2 className="text-2xl md:text-4xl text-center text-[#151875] font-bold">
            Discount Item
          </h2>
        </div>
        <div className="flex justify-center mt-5">
          <ul className="flex gap-4">
            <li className="hover:text-[#FB4997] hover:underline hover:font-semibold">Wood Chair</li>
            <li className="hover:text-[#FB4997] hover:underline hover:font-semibold">Plastic Chair</li>
            <li className="hover:text-[#FB4997] hover:underline hover:font-semibold">Sofa Collection</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto md:flex justify-center items-center">
      <div>
        <div>
            <h3 className="text-[#151875] text-xl md:text-3xl font-bold">20% Discount of All Products</h3>
            <h4 className="text-[#FB2E86] font-semibold text-[20px] mt-4">Eams Sofa Compact</h4>
            <p className="text-[#B7BACB] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <ul className="flex gap-6 text-[#B8B8DC] mt-4 items-center">
                <img src={arrow} className="w-[13px] h-[11px]" alt="" />
                <li >Material expose like metals</li>
                <img src={arrow} className="w-[13px] h-[11px]" alt="" />
                <li>Clear lines and geomatric figures</li>
            </ul>
            <ul className="flex gap-6 text-[#B8B8DC] items-center">
            <img src={arrow} className="w-[13px] h-[11px]" alt="" />
                <li>Simple neutral colours.</li>
                <img src={arrow} className="w-[13px] h-[11px]" alt="" />
                <li>Material expose like metals</li>
            </ul>
            <div className="mt-6">
                <button className="px-8 py-2 bg-[#FB2E86] text-white border-none">Shop Now</button>
            </div>
        </div>
      </div>
        <div className=" ">
            <div className="bg-[url('./assets/bCircle.png')] bg-no-repeat bg-center">
            <img src={sofaChair} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
