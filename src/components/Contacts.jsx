import React from "react";
import PageHeading from "./PageHeading";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <>
      <PageHeading title="Contact Us" pageName="Contact Us" />
      <div className="bg-gray-50 py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Information About Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque ultrices tristique est vel, aliquet odio. Mauris ac
                tincidunt quam.
              </p>
              <div className="flex space-x-3 mt-4">
                <span className="w-5 h-5 rounded-full bg-purple-600"></span>
                <span className="w-5 h-5 rounded-full bg-pink-500"></span>
                <span className="w-5 h-5 rounded-full bg-blue-500"></span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Way
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <span className="font-bold">📞</span> +1-877-674-89-99
                  <br />
                  <span className="font-bold">✉️</span> hello@site.com
                </li>
                <li>
                  <span className="font-bold">📍</span> 204 Margaret St, London
                  <br />
                  Great Britain, 3NM98-LK
                </li>
                <li>
                  <span className="font-bold">🛒</span> Free standard shipping
                  on all orders.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque ultrices tristique est vel.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Type Your Message"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <img
            src={contact}
            alt=""
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
