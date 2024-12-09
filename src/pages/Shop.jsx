import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/PageHeading";
import { apiData } from "../components/ContextApi";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import Company from "../components/Company";
import { IoMdArrowDropdown } from "react-icons/io";

const Shop = () => {
  let data = useContext(apiData);

  let [category, setCategory] = useState([]);
  let [brands, setBrands] = useState([]); // Added for storing unique brands

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
    setBrands([...new Set(data.map((item) => item.brand))]); // Extract unique brands
  }, [data]);

  let [categoryShow, setCategoryShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);
  let [brandShow, setBrandShow] = useState(false); // Show/Hide brand filter

  let [categoryFilter, setCategoryFilter] = useState([]);
  let [brandFilter, setBrandFilter] = useState([]); // Store selected brand filtered data
  let [priceItem, setPriceItem] = useState([]);

  let handleCategory = (cat) => {
    let filterCategoryData = data.filter((item) => item.category === cat);
    setCategoryFilter(filterCategoryData);
  };

  let handleBrand = (brand) => {
    let filterBrandData = data.filter((item) => item.brand === brand);
    setBrandFilter(filterBrandData);
  };

  let priceHandle = (value) => {
    let priceFiltered = data.filter(
      (item) => parseFloat(item.price) > value.low && parseFloat(item.price) <= value.high
    );
    setPriceItem(priceFiltered);
  };

  const filteredData = categoryFilter.length > 0
    ? categoryFilter
    : brandFilter.length > 0
    ? brandFilter
    : priceItem.length > 0
    ? priceItem
    : data;

  return (
    <>
      <PageHeading title="Shop Grid Default" pageName="Shop Grid Default" />
      <div className="container mx-auto">
        <div className="md:flex">
          <div className="w-full md:w-[30%]">
            {/* Category Filter Section */}
            <div className="mb-3">
              <h3
                onClick={() => setCategoryShow(!categoryShow)}
                className="flex items-center gap-2 text-xl md:text-3xl"
              >
                Category List <IoMdArrowDropdown />
              </h3>
              {categoryShow && (
                <ul className="h-36 overflow-y-scroll">
                  {category.map((item) => (
                    <li
                      key={item}
                      onClick={() => handleCategory(item)}
                      className="p-1 border-b-2 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Brand Filter Section */}
            <div>
              <h3
                onClick={() => setBrandShow(!brandShow)}
                className="flex items-center gap-2 text-xl md:text-3xl"
              >
                Brand <IoMdArrowDropdown />
              </h3>
              {brandShow && (
                <ul className="h-36 overflow-y-scroll">
                  {brands.map((brand) => (
                    <li
                      key={brand}
                      onClick={() => handleBrand(brand)}
                      className="p-1 border-b-2 cursor-pointer"
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price Filter Section */}
            <div>
              <h3
                onClick={() => setPriceShow(!priceShow)}
                className="flex items-center gap-2 text-xl md:text-3xl"
              >
                Price <IoMdArrowDropdown />
              </h3>
              {priceShow && (
                <ul className="flex flex-col gap-3 border-b-2">
                  <li
                    onClick={() => priceHandle({ low: 0.0, high: 10.0 })}
                    className="border-b-2 p-2 cursor-pointer"
                  >
                    $0.00 - $10.00
                  </li>
                  <li
                    onClick={() => priceHandle({ low: 10.02, high: 20.0 })}
                    className="border-b-2 p-2 cursor-pointer"
                  >
                    $10.01 - $20.00
                  </li>
                  <li
                    onClick={() => priceHandle({ low: 20.01, high: 100.0 })}
                    className="border-b-2 p-2 cursor-pointer"
                  >
                    $20.01 - $100.00
                  </li>
                  <li
                    onClick={() => priceHandle({ low: 100.01, high: 10000.0 })}
                    className="border-b-2 p-2 cursor-pointer"
                  >
                    $100.01 - $10000.00
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Product Listing Section */}
          <div className="md:w-[70%] px-4 mt-4 mb-4 container mx-auto md:flex justify-between flex-wrap gap-6">
            {filteredData.map((item) => (
              <div key={item.id} className="md:w-[30%] rounded-md group shadow-md mb-4">
                <div className="md:flex flex-col justify-center items-center bg-[#F6F7FB] py-6 relative overflow-hidden">
                  <img className="" src={item.thumbnail} alt="Image" />
                  <button className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:px-4 md:py-2 mt-2 px-[2px] py-[2px] bg-[#08D15F] rounded-sm text-white text-[12px] duration-700 ease-in-out group-hover:bottom-4">
                    View Details
                  </button>
                  <div className="mt-2 flex absolute top-0 -left-32 group-hover:left-2 gap-1 duration-700 ease-in-out">
                    <p>
                      <CiShoppingCart className="md:text-4xl text-purple-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" />
                    </p>
                    <p>
                      <CiHeart className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" />
                    </p>
                    <p>
                      <CiZoomIn className="md:text-4xl text-blue-900 md:p-2 hover:bg-[#FFFFFF] rounded-2xl" />
                    </p>
                  </div>
                </div>

                <div className="text-center py-6 group-hover:bg-[#2F1AC4] group-hover:text-white">
                  <h4 className="text-pink-600 font-bold lg:text-xl group-hover:text-white text-[12px]">
                    {item.title}
                  </h4>
                  <div className="flex justify-center gap-4 mt-2 max-h-10">
                    <p className="rounded-xl h-[5px] w-[15px] bg-red-700"></p>
                    <p className="rounded-xl h-[5px] w-[15px] bg-green-700"></p>
                    <p className="rounded-xl h-[5px] w-[15px] bg-blue-700"></p>
                  </div>
                  <p className="mt-1 text-[8px] lg:text-lg">Code:Y523201</p>
                  <p className="mt-1">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Company />
      </div>
    </>
  );
};

export default Shop;
