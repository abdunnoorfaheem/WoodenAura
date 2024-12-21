import React from "react";
import Sofa from "../assets/sofa.png";

const UniqueFeatured = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat py-10 px-4 md:py-20 md:px-0" style={{ backgroundImage: "url('./assets/RectangleSofa.png')" }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Sofa Image */}
        <div className="md:w-1/2 flex justify-center">
          <img className="max-w-full h-auto" src={Sofa} alt="Sofa" />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h3 className="text-[#151875] text-xl md:text-3xl font-bold text-center md:text-left">
            Unique Features of Latest & <br /> Trending Products
          </h3>

          <ul className="text-[#ACABC3] mt-4 space-y-4 text-sm md:text-base">
            <li className="list-disc">
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="list-disc">
              Reinforced with double wood dowels, glue, screw-nails, corner <br className="hidden md:inline" /> blocks, and machine nails
            </li>
            <li className="list-disc">
              Arms, backs, and seats are structurally reinforced
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center md:items-start mt-6 gap-4">
            {/* Add to Cart Button */}
            <button className="bg-[#FB2E86] text-white px-6 py-2 rounded-sm hover:bg-[#e0216d]">
              Add to Cart
            </button>

            {/* Price Section */}
            <p className="text-[#151875] font-medium text-center md:text-left">
              B&B Italian Sofa <br />
              <span className="text-lg md:text-xl font-semibold">$32.00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatured;
