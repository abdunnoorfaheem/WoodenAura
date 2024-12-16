import React from "react";
import PageHeading from "./PageHeading";
import cartImg from "../assets/shoppingCart.png";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice/cartSlice";

const Cart = () => {
  let cartData = useSelector((state) => state.cartItemSlice.cartItems);

  // console.log(cartData);

let dispatch=useDispatch();
  let handleIncrement=(item)=>{
    
    dispatch(increment(item))
    
  }
  let handleDecrement=(item)=>{
    
    
      dispatch(decrement(item));
  

    
    
    
  }

  return (
    <>
      <PageHeading title="Shopping Cart" pageName="Shopping cart" />

      <section>
        <div className="container mx-auto md:flex justify-evenly">
          <div className="md:w-[60%]">
            <div className="flex md:justify-between md:gap-0 gap-6 ml-16">
              <h4 className="font-semibold underline text-[#1D3178] md:text-2xl">
                Product
              </h4>
              <h4 className="font-semibold underline text-[#1D3178] md:text-2xl">
                Price
              </h4>
              <h4 className="font-semibold underline text-[#1D3178] md:text-2xl">
                Quantity
              </h4>
              <h4 className="font-semibold underline text-[#1D3178] md:text-2xl">
                Total
              </h4>
            </div>
            {cartData.map((item,index) => (
              <div className="flex  md:gap-56 py-8 border-b-2">
                <div className="flex ">
                  <img src={item.thumbnail} alt="" />
                  <div className="">
                    <p>{item.title}</p>
                    <p>Size:Xl</p>
                  </div>
                </div>
                <div>
                  <p>${item.price}</p>
                </div>
                <div className="w-[20%] h-[10%] flex">
                  <p onClick={()=>handleDecrement(index)} className="border-2 p-2 text-red-500 font-bold">-</p>
                  <p className="border-2 p-2">{item.qty}</p>
                  <p onClick={()=>handleIncrement(index)} className="border-2 p-2 text-green-500">+</p>
                </div>
                <div>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-end items-center py-8">
              <button className="bg-[#FB2E86] text-white px-4 py-2 rounded-md">
                Clear Cart
              </button>
            </div>
          </div>
          <div className="md:w-[35%]">
            <div>
              <h3 className="text-[#1D3178] font-semibold text-center underline md:text-2xl">
                Cart Total
              </h3>
              <div className="bg-[#E8E6F1] mt-4 rounded-md">
                <div className="flex justify-between py-8 px-8">
                  <p className="border-b-2 text-xl font-semibold">Total:</p>
                  <p className="border-b-2 text-xl font-semibold">$2300.00</p>
                </div>
                <div className="flex items-center justify-center">
                  <FaCheck className="border-2 text-white bg-[#19D16F] rounded-lg" />
                  <p className="text-[#8A91AB] text-lg py-3">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>

                <div className="">
                  <button className="px-6 py-2 bg-[#19D16F] text-white font-semibold w-full border-2 border-green-500">
                    Proceed To CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
