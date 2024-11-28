import React, { useContext } from 'react'
import Chair from '../assets/chairTrending.png'
import { apiData } from './ContextApi';
import smallChairOne from '../assets/smallChair.png'
import smallChairTwo from '../assets/smallChair2.png'
import smallChairThree from '../assets/smallChair3.png'

const TrendingProducts = () => {

    let data=useContext(apiData);
console.log(data);

let filtered=data.filter((item)=>item.id>=1 && item.id<=4)

    
    
  return (
    <section className='mt-4 mb-4'>
        <h2 className='text-2xl text-center md:text-4xl font-bold text-[#151875]'>Trending Products</h2>
       
       <div className='container mx-auto md:flex justify-center items-center gap-4'>
       {filtered.map((item)=>(
 <div className=" md:w-[24%]">
 <div className=' shadow-lg  rounded'>
     <div className='flex justify-center items-center py-4 '>
         <img className='bg-[#F5F6F8]' src={item.thumbnail} alt="" />
     </div>
     <div className=' py-5'>
         <h3 className='text-center font-bold text-[#151875]'>{item.title}</h3>
         <div className='flex gap-2 justify-center text-[#151875]'>
         <p>${item.price} </p>
         <p>{item.discount}</p>
         </div>
     </div>
 </div>
 <div>

 </div>
</div>
        ))}
       </div>
       <div className='container mx-auto md:flex justify-evenly mt-12'>
        <div className='md:w-[24%] h-[270px] bg-[url("./assets/clock.png")] bg-cover shadow-2xl bg-[#FFF6FB] px-6 py-6'>
            <h2 className='text-[22px] font-semibold text-[#151875]'>23% off in all products</h2>
            <p className='text-[#FB2E86] font-medium underline'>Shop Now</p>
        </div>
        <div className='md:w-[24%] h-[270px] bg-[url("./assets/bar.png")] bg-cover shadow-2xl bg-[#EEEFFB] px-6 py-6'>
            <h2 className='text-[22px] font-semibold text-[#151875]'>23% off in all products</h2>
            <p className='text-[#FB2E86] font-medium underline'>View Collection</p>
        </div>
        
        <div className='h-[270px] '>
            <div className='flex justify-center items-center gap-4 mb-7'>
                <div className='bg-[#F5F6F8]'>
                <img src={smallChairOne} alt="" />
                </div>
                <div className='text-[#151875] font-semibold'>
                    <h4>Exclusive Seat chair</h4>
                    <p>$32.00</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 mb-7'>
                <div className='bg-[#F5F6F8]'>
                <img src={smallChairTwo} alt="" />
                </div>
                <div className='text-[#151875] font-semibold'>
                    <h4>Exclusive Seat chair</h4>
                    <p>$32.00</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 '>
                <div className='bg-[#F5F6F8]'>
                <img src={smallChairThree} alt="" />
                </div>
                <div className='text-[#151875] font-semibold'>
                    <h4>Exclusive Seat chair</h4>
                    <p>$32.00</p>
                </div>
            </div>
            
        </div>
       </div>
    </section>
  )
}

export default TrendingProducts