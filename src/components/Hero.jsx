import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full">
      <div className="slider-container mx-auto">
        <Slider {...settings}>
          {/* Page 1 */}
          <div className="text-left relative pt-40 bg-[url('./assets/banner.png')] bg-cover bg-center h-[500px] md:h-[764px]">
            <div className="flex flex-col items-start px-4 md:px-20 lg:px-40">
              <p className="text-[#FB2E86] text-sm md:text-base lg:text-lg">
                Best Furniture For Your Castle....
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                New Furniture Collection <br /> Trends in 2024
              </h1>
              <p className="mt-4 text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing <br className="hidden md:block" /> in
                phasellus non in justo.
              </p>
              <div>
                <button className="bg-primary text-white px-6 py-2 rounded-sm font-thin font-josefin mt-4">
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Page 2 */}
          <div className="text-left relative pt-40 bg-[url('./assets/banner.png')] bg-cover bg-center h-[500px] md:h-[764px]">
            <div className="flex flex-col items-start px-4 md:px-20 lg:px-40">
              <p className="text-[#FB2E86] text-sm md:text-base lg:text-lg">
                Best Furniture For Your Castle....
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                New Furniture Collection <br /> Trends in 2024
              </h1>
              <p className="mt-4 text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing <br className="hidden md:block" /> in
                phasellus non in justo.
              </p>
              <div>
                <button className="bg-primary text-white px-6 py-2 rounded-sm font-thin font-josefin mt-4">
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Page 3 */}
          <div className="text-left relative pt-40 bg-[url('./assets/banner.png')] bg-cover bg-center h-[500px] md:h-[764px]">
            <div className="flex flex-col items-start px-4 md:px-20 lg:px-40">
              <p className="text-[#FB2E86] text-sm md:text-base lg:text-lg">
                Best Furniture For Your Castle....
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                New Furniture Collection <br /> Trends in 2024
              </h1>
              <p className="mt-4 text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing <br className="hidden md:block" /> in
                phasellus non in justo.
              </p>
              <div>
                <button className="bg-primary text-white px-6 py-2 rounded-sm font-thin font-josefin mt-4">
                  <Link to="/shop">Shop Now</Link>
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
