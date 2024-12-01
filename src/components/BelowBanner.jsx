import React from 'react'

const BelowBanner = () => {
  return (
    <section className=' bg-[url("./assets/bannerBelow.png")]'>
        <div className='h-[462px] flex justify-center items-center '>
            <div className=''>
                <h2 className='text-[#151875] text-xl md:text-4xl text-center font-bold'>Get Latest Update By Subscribe <br /> Our Newslater </h2>
                <div className='text-center mt-6'>
                <button className='bg-[#FB2E86] px-5 py-2 text-white rounded font-medium'>Shop Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BelowBanner