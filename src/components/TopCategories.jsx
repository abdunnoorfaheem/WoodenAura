import React from 'react'
import topChair from '../assets/topChair.png';

const TopCategories = () => {
  return (
    <section>
        <h2 className='text-2xl md:text-4xl text-[#151875] font-bold text-center'>Top Categories</h2>
        <div className="container mx-auto">
            
            <div className='md:w-[24%] h-[345px]  shadow-2xl'>
                <div className='flex justify-center py-6'>
                    <img className='bg-[#F6F7FB] p-6 rounded-full ' src={topChair} alt="" />
                </div>
                <div className='text-[#151875] py-4 font-semibold'>
                    <h4 className='text-center'>Mini LCW Chair</h4>
                    <p className='text-center'>$56.00</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopCategories