import React, { useContext } from 'react'
import Chair from '../assets/chairTrending.png'
import { apiData } from './ContextApi'

const TrendingProducts = () => {

    let data=useContext(apiData);
console.log(data);

let filtered=data.filter((item)=>item.id>=1 && item.id<=4)

    
    
  return (
    <section className='mt-4 mb-4'>
        <h2 className='text-2xl text-center md:text-4xl font-bold text-[#151875]'>Trending Products</h2>
       
       <div className='container mx-auto md:flex justify-center items-center '>
       {filtered.map((item)=>(
 <div className=" md:w-[24%]">
 <div className=' shadow-lg  rounded'>
     <div className='flex justify-center items-center py-4 '>
         <img className='bg-[#F5F6F8]' src={item.thumbnail} alt="" />
     </div>
     <div className=' py-5'>
         <h3 className='text-center font-bold text-[#151875]'>{item.title}</h3>
         <div className='flex gap-2 justify-center text-[#151875]'>
         <p>{item.price} </p>
         <p>{item.discount}</p>
         </div>
     </div>
 </div>
 <div></div>
</div>
        ))}
       </div>
    </section>
  )
}

export default TrendingProducts