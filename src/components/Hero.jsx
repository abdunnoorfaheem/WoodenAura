import React from 'react';
import Slider from "react-slick";
import Banner from '../assets/banner.png';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section className=''>
        
        <div className="slider-container mx-auto -mt-1">
        <Slider {...settings}>
            {/* page 1 */}
            <div className='bg-[url("./assets/banner.png")]  !h-[764px]'>
            <div className='flex flex-col'>
            <p className='text-[#FB2E86] text-sm'>Best Furniture For Your Castle....</p>
            <h1 className='text-4xl font-bold'>New Furniture Collection <br /> Trends in 2024</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />in phasellus non in justo.</p>
            <div>
            <button className='bg-primary text-white px-4 py-2 rounded-sm font-thin font-josefin'>Shop Now</button>
            </div>
            </div>
            </div>
            {/* page 2 */}
            <div className='bg-[url("./assets/banner.png")] !h-[764px] '>
            <p className='text-[#FB2E86] text-sm'>Best Furniture For Your Castle....</p>
            <h1 className='text-4xl font-bold'>New Furniture Collection <br /> Trends in 2024</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />in phasellus non in justo.</p>
            <button className='bg-primary text-white px-4 py-2 rounded-sm font-thin font-josefin'>Shop Now</button>
            </div>
            {/* page 3 */}
            <div className='bg-[url("./assets/banner.png")] !h-[764px] '>
            <p className='text-[#FB2E86] text-sm'>Best Furniture For Your Castle....</p>
            <h1 className='text-4xl font-bold'>New Furniture Collection <br /> Trends in 2024</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />in phasellus non in justo.</p>
            <button className='bg-primary text-white px-4 py-2 rounded-sm font-thin font-josefin'>Shop Now</button>
            </div>
        </Slider>
        </div>
    </section>
  )
}

export default Hero