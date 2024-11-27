import React from "react";
import Sofa from '../assets/sofa.png';

const UniqueFeatured = () => {
  return (
    <section className="bg-[url('./assets/RectangleSofa.png')]">
      <div className="container mx-auto md:flex items-center">
        <div className="md:w-[50%]">
          <img src={Sofa} alt="" />
        </div>
        <div className="md:w-[50%]">
          <h3 className="text-[#151875] text-xl md:text-3xl font-bold">Unique Features of latest & <br /> Trending Products</h3>
          <ul className="list-disc text-[#ACABC3] mt-4">
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screw - nails corner  <br /> blocks and machine nails</li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ul>
          <div className="md:flex mt-5 gap-3">
            <button className="bg-[#FB2E86] text-white px-3 py-1 rounded-sm">Add to Cart</button>
            <p className="text-[#151875] font-medium">B&B Italian Sofa <br /> $32.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatured;
