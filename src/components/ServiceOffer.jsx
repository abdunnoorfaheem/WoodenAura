import React from 'react'
import Delivery from '../assets/free-delivery.png';
import CashBack from '../assets/cashback.png';
import Premium from '../assets/premium-quality.png';
import Support from '../assets/24-hours-support.png';
 
const ServiceOffer = () => {
  return (
   <section className=''>
    <div>
        <h1 className='text-[#151875] text-2xl md:text-4xl text-center pt-8 mb-4 font-bold'>What Service Offer!</h1>
    </div>
    <div className='container mx-auto md:flex gap-12 mt-12 mr-20 md:pb-4'>
        <div className='bg-[#f3f1f1] md:w-[20%] '> 
        <div className='flex justify-center items-center py-8'>
            <img src={Delivery} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='text-xl font-bold'>24/7 Support</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        </div>
        <div className=' bg-[#f3f1f1] md:w-[20%] '>
        <div className='flex justify-center items-center py-8'>
            <img src={CashBack} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='text-xl font-bold'>24/7 Support</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        </div>
        <div className=' bg-[#f3f1f1] md:w-[20%] '>
        <div className='flex justify-center items-center py-8'>
            <img src={Premium} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h3 className='text-xl font-bold'>24/7 Support</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        </div>
        <div className=' bg-[#f3f1f1] md:w-[20%] '>
        <div className='flex justify-center items-center py-8'>
            <img src={Support} alt="" />
        </div>
        <div className='flex flex-col items-center pb-8'>
            <h3 className='text-xl font-bold'>24/7 Support</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
        </div>
    </div>
   </section>
  )
}

export default ServiceOffer