import React, { useState } from "react";
import PageHeading from "./PageHeading";
import cartImg from "../assets/shoppingCart.png";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  deleteProduct,
  increment,
} from "./slice/cartSlice";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Cart = () => {
  let cartData = useSelector((state) => state.cartItemSlice.cartItems);
  let dispatch = useDispatch();
  let handleIncrement = (item) => {
    dispatch(increment(item));
  };
  let handleDecrement = (item) => {
    dispatch(decrement(item));
  };

  let handleDeleteFromSingleCart = (index) => {
    dispatch(deleteProduct(index));
  };

  let [confirm, setConfirm] = useState(false);
  let [selectedIndex, setSelectedIndex] = useState(null);

  let handleClearCart = () => {
    dispatch(clearCart());
  };

  let { totalPrice, totalQty } = cartData.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.qty;
      acc.totalQty += item.qty;
      return acc;
    },
    { totalPrice: 0, totalQty: 0 }
  );

  return (
    <>
      <div className="flex justify-center items-center">
        {confirm && (
          <div className="relative z-50">
            <div className="bg-gray-300 border w-[90%] md:w-[350px] h-[250px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-md shadow-lg">
              <h2 className="text-red-600 text-xl mb-4">Are you sure?</h2>
              <div className="flex gap-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md"
                  onClick={() => {
                    handleDeleteFromSingleCart(selectedIndex);
                    setConfirm(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-md"
                  onClick={() => setConfirm(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <PageHeading title="Shopping Cart" pageName="Shopping cart" />

      <section className="container mx-auto px-4 my-8">
        <div className="md:flex md:justify-between gap-8">
         
          <div className="md:w-2/3">
            <div className="hidden md:flex justify-between border-b-2 pb-2">
              <h4 className="font-semibold text-[#1D3178] text-lg">Product</h4>
              <h4 className="font-semibold text-[#1D3178] text-lg">Price</h4>
              <h4 className="font-semibold text-[#1D3178] text-lg">
                Quantity
              </h4>
              <h4 className="font-semibold text-[#1D3178] text-lg">Total</h4>
            </div>

            {cartData.length > 0 ? (
              cartData.map((item, index) => (
                <div
                  className="flex flex-wrap md:flex-nowrap items-center justify-between border-b-2 py-4 gap-4"
                  key={index}
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <img
                      className="h-20 w-20 object-cover rounded-md"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">Size: XL</p>
                    </div>
                    <ImCross
                      onClick={() => {
                        setConfirm(true);
                        setSelectedIndex(index);
                      }}
                      className="text-red-600 text-lg cursor-pointer ml-auto"
                    />
                  </div>
                  <p className="text-sm md:text-md font-semibold text-center w-1/4">
                    ${item.price}
                  </p>
                  <div className="flex items-center gap-2 w-1/4">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="bg-red-400 text-white px-3 py-1 rounded-md"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.qty}</span>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="bg-green-400 text-white px-3 py-1 rounded-md"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm md:text-md font-semibold text-center w-1/4">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <button className="mt-4 px-4 py-2 bg-[#FB2E86] rounded-md text-white">
                  <Link to="/shop">Go To Shop</Link>
                </button>
              </div>
            )}
            {cartData.length > 0 && (
              <div className="flex justify-end items-center py-8">
                <button
                  onClick={handleClearCart}
                  className="bg-[#FB2E86] text-white px-4 py-2 rounded-md"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>

          
          <div className="md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <h3 className="text-[#1D3178] font-semibold text-lg mb-4">
                Cart Total
              </h3>
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Total Quantity:</p>
                <p className="font-semibold">{totalQty}</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <FaCheck className="text-green-500" />
                <p className="text-sm text-gray-600">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
              <button className="bg-green-500 text-white px-6 py-2 w-full rounded-md">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
