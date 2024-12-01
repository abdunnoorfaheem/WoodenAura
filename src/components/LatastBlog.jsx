import React from "react";
import BlogOne from '../assets/blogOne.png';
import BlogTwo from '../assets/blogTwo.png';
import BlogThree from '../assets/blogThree.png';
import Date from '../assets/date.png';
import Pen from '../assets/pen.png';

const LatastBlog = () => {
  return (
    <section>
      <div className="container mx-auto md:flex justify-between">
        <div className="md:w-[30%]  shadow-xl mb-4 rounded-lg">
            <div className="">
                <img src={BlogOne} alt="" className="w-full" />
            </div>
            <div className="py-6 px-4">
                <div className="md:flex gap-8 text-[#151875]">
                    <div className="flex gap-1 items-center">
                        <img src={Pen} alt="" className="w-[11px] h-[11px]" />
                        <p>Saber Ali</p>
                        </div>
                    <div className="md:flex gap-1 items-center">
                    <img src={Date} alt="" className="w-[11px] h-[11px]" />
                        <p>21 August,2024</p>
                    </div>
                </div>
                <h3 className="text-[#151875] text-xl md:text-2xl font-semibold mt-4">Top essential Trends in 2024</h3>
                <p className="text-[#72718F] mt-4">More off this less hello samlande lied much <br />
                over tightly circa horse taped mightly</p>
                <button className="underline mt-4">Read More</button>
            </div>
        </div>
        <div className="md:w-[30%]  shadow-xl mb-4 rounded-lg">
            <div className="">
                <img src={BlogTwo} alt="" className="w-full" />
            </div>
            <div className="py-6 px-4">
                <div className="md:flex gap-8 text-[#151875]">
                    <div className="flex gap-1 items-center">
                        <img src={Pen} alt="" className="w-[11px] h-[11px]" />
                        <p>Saber Ali</p>
                        </div>
                    <div className="md:flex gap-1 items-center">
                    <img src={Date} alt="" className="w-[11px] h-[11px]" />
                        <p>21 August,2024</p>
                    </div>
                </div>
                <h3 className="text-[#151875] text-xl md:text-2xl font-semibold mt-4">Top essential Trends in 2024</h3>
                <p className="text-[#72718F] mt-4">More off this less hello samlande lied much <br />
                over tightly circa horse taped mightly</p>
                <button className="underline mt-4">Read More</button>
            </div>
        </div>
        <div className="md:w-[30%]  shadow-xl mb-4 rounded-lg">
            <div className="">
                <img src={BlogThree} alt="" className="w-full" />
            </div>
            <div className="py-6 px-4">
                <div className="md:flex gap-8 text-[#151875]">
                    <div className="flex gap-1 items-center">
                        <img src={Pen} alt="" className="w-[11px] h-[11px]" />
                        <p>Saber Ali</p>
                        </div>
                    <div className="md:flex gap-1 items-center">
                    <img src={Date} alt="" className="w-[11px] h-[11px]" />
                        <p>21 August,2024</p>
                    </div>
                </div>
                <h3 className="text-[#151875] text-xl md:text-2xl font-semibold mt-4">Top essential Trends in 2024</h3>
                <p className="text-[#72718F] mt-4">More off this less hello samlande lied much <br />
                over tightly circa horse taped mightly</p>
                <button className="underline mt-4">Read More</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LatastBlog;
