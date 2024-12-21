import React from 'react';
import Delivery from '../assets/free-delivery.png';
import CashBack from '../assets/cashback.png';
import Premium from '../assets/premium-quality.png';
import Support from '../assets/24-hours-support.png';

const ServiceOffer = () => {
  return (
    <section className="bg-white py-12">
      <div>
        <h1 className="text-[#151875] text-2xl md:text-4xl text-center font-bold mb-8">
          What Service Offer!
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
       
        <div className="bg-[#f3f1f1] rounded-lg shadow-md">
          <div className="flex justify-center items-center py-8">
            <img src={Delivery} alt="Free Delivery" className="h-16" />
          </div>
          <div className="flex flex-col items-center px-4 pb-8">
            <h3 className="text-xl font-bold text-[#151875] mb-2">Free Delivery</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>

        
        <div className="bg-[#f3f1f1] rounded-lg shadow-md">
          <div className="flex justify-center items-center py-8">
            <img src={CashBack} alt="Cash Back" className="h-16" />
          </div>
          <div className="flex flex-col items-center px-4 pb-8">
            <h3 className="text-xl font-bold text-[#151875] mb-2">Cash Back</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>

        
        <div className="bg-[#f3f1f1] rounded-lg shadow-md">
          <div className="flex justify-center items-center py-8">
            <img src={Premium} alt="Premium Quality" className="h-16" />
          </div>
          <div className="flex flex-col items-center px-4 pb-8">
            <h3 className="text-xl font-bold text-[#151875] mb-2">Premium Quality</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>

        
        <div className="bg-[#f3f1f1] rounded-lg shadow-md">
          <div className="flex justify-center items-center py-8">
            <img src={Support} alt="24/7 Support" className="h-16" />
          </div>
          <div className="flex flex-col items-center px-4 pb-8">
            <h3 className="text-xl font-bold text-[#151875] mb-2">24/7 Support</h3>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOffer;
