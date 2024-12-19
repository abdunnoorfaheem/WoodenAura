import React from "react";
import PageHeading from "../components/PageHeading";
import Company from "../components/Company";
import Bag from '../assets/bag.png';
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { apiData } from "../components/ContextApi";

const ProductDetails = () => {


  let product=useParams();


  let data=useContext(apiData);
  
  
  let singleProduct=data.filter((item)=>item.id == product.id)

  // console.log(singleProduct);
  
  




  return (
    <>
      <PageHeading title="Product Details" pageName="Product Details" />
      <section>
        <div className="container mx-auto  my-8">
          {singleProduct.map((item)=>(
            <div className="flex justify-center items-center shadow-2xl">
            <div className="w-[40%]">
                <img src={item.thumbnail} alt="" />
            </div>
            <div className="w-[60%]">
                <div className="">
                    <h3 className="md:text-[36px] text-[#0D134E] font-bold">{item.title}</h3>
                    <div className="flex mt-3">
                        <p><FaStar  className="text-[#FFC416]"/></p>
                        <p><FaStar  className="text-[#FFC416]"/></p>
                        <p><FaStar  className="text-[#FFC416]"/></p>
                        <p><FaStar  className="text-[#FFC416]"/></p>
                        <p><FaStar  className="text-[#FFC416]"/></p>
                    </div>
                    <div className="flex gap-2 mt-3 text-[22px]">
                        <p className="text-[#151875]">${item.price}</p>
                        <p className="text-[#FB2E86]"><del>${item.discount}</del></p>
                    </div>
                    <div className="mt-2 text-[18px]">
                        <p>Color</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[#A9ACC6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br /> porttitor purus, et volutpat sit.</p>
                    </div>
                    <div className="mt-4">
                        <Link><button className="hover:text-[#FB2E86] hover:text-2xl">Add to Cart</button></Link>
                    </div>
                </div>
            </div>
          </div>
          ))}
          
        </div>
      </section>
      <Company />
    </>
  );
};

export default ProductDetails;
