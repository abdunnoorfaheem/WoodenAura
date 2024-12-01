import React, { useContext } from "react";
import topChair from '../assets/topChair.png';
import { apiData } from "./ContextApi";

const TopCategories = () => {

let data=useContext(apiData);

console.log(data);

let filterData=data.filter((item)=>item.id>=1 && item.id<=3)
  
    
  return (
    <section>
        <h2 className='text-2xl md:text-4xl text-[#151875] font-bold text-center'>Top Categories</h2>
        <div className="container mx-auto md:flex justify-between mt-6">

            {filterData.map((item)=>(
                <div className='md:w-[32%] max-h-[645px] mb-8  shadow-xl group'>
                <div className='flex justify-center py-6 '>
                    <img className='bg-[#F6F7FB] p-4 rounded-full group-hover:border-b-[10px] group-hover:border-purple-500 group-hover:rotate-90 duration-700 ease-in-out' src={item.thumbnail} alt="" />
                </div>
                <div className='text-[#151875] py-4 font-semibold'>
                    <h4 className='text-center'>{item.title}</h4>
                    <p className='text-center'>${item.price}</p>
                </div>
            </div>
            ))}
            
            
        </div>
    </section>
  )
}

export default TopCategories