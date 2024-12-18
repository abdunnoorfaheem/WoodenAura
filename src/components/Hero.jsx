import React from 'react';
import Slider from "react-slick";
import Banner from '../assets/banner.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section className=''>
        
        <div className="slider-container mx-auto -mt-1">
        <Slider {...settings}>
            {/* page 1 */}
            <div className='text-left  relative  pt-40 bg-[url("./assets/banner.png")]  !h-[764px]'>
            <div className='flex flex-col items-center p-2'>
            <p className=' text-[#FB2E86] text-sm text-left '>Best Furniture For Your Castle....</p>
            <h1 className='text-3xl lg:text-5xl font-bold mt-3'>New Furniture Collection <br /> Trends in 2024</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />in phasellus non in justo.</p>
            <div>
            <button className='bg-primary text-white px-4 py-2 rounded-sm font-thin font-josefin mt-4'><Link to="/shop">Shop Now</Link></button>
            </div>
            </div>
            </div>
            {/* page 2 */}
            <div className='text-left  relative  pt-40 bg-[url("./assets/banner.png")]  !h-[764px]'>
            <div className='flex flex-col items-center p-2'>
            <p className=' text-[#FB2E86] text-sm text-left '>Best Furniture For Your Castle....</p>
            <h1 className='text-3xl lg:text-5xl font-bold mt-3'>New Furniture Collection <br /> Trends in 2024</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />in phasellus non in justo.</p>
            <div>
            <button className='bg-primary text-white px-4 py-2 rounded-sm font-thin font-josefin mt-4'>Shop Now</button>
            </div>
            </div>
            </div>
           
            {/* page 3 */}
            <div className='text-left  relative  pt-40 bg-[url("./assets/banner.png")]  !h-[764px]'>
            <div className='flex flex-col items-center p-2'>
            <p className=' text-[#FB2E86] text-sm text-left '>Best Furniture For Your Castle....</p>
            <h1 className='text-3xl lg:text-5xl font-bold mt-3'>New Furniture Collection <br /> Trends in 2024</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />in phasellus non in justo.</p>
            <div>
            <button className='bg-primary text-white px-4 py-2 rounded-sm font-thin font-josefin mt-4'>Shop Now</button>
            </div>
            </div>
            </div>
          
        </Slider>
        </div>
    </section>
  )
}

export default Hero