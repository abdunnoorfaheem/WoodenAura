import React, { useContext } from 'react'
import latestChair from '../assets/latestChair.png';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import { apiData } from './ContextApi';

const LeatestProducts = () => {

  let dataShow=useContext(apiData);

  
let filterData=dataShow.filter((item)=> item.id >=1 && item.id <=8)
  
  return (
    <section className=''>
        <div>
            <h2 className='text-2xl font-bold md:text-5xl text-center mt-12 text-[#1A0B5B]'>Leatest Products</h2>
            <div className='flex justify-center gap-1 md:gap-10 mt-3'>
              <h4 className='hover:text-[#FB4997] hover:underline ' >New Arrival</h4>
              <h4 className='hover:text-[#FB4997] hover:underline '>Best Seller </h4>
              <h4 className='hover:text-[#FB4997] hover:underline '>Featured</h4>
              <h5 className='hover:text-[#FB4997] hover:underline '>Special Offer</h5>
            </div>
        </div>
        <div className='flex flex-wrap gap-4 justify-center mt-5'>
        {
          filterData.map((item)=>(
           <div className=' '>
             <div className=''>
            <div className=' bg-[#EEEFFB] flex justify-center items-center py-8 relative'>
              <img src={item.thumbnail} alt="" />
              <p className='bg-[#3F509E] text-white px-4 py-1 absolute top-12 left-9'>sale</p>
              <div className="mt-2 flex">
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
            <div className='flex justify-between py-3 bg-[#F7F7F7] px-3'>
              <h4>{item.title}</h4>
              <div className='flex gap-4'>
              <p>${item.price}</p>
              <p>${item.discount}</p>
              </div>
            </div>
          </div>
           </div>

          ))
        }
        </div>
       
    </section>
  )
}

export default LeatestProducts