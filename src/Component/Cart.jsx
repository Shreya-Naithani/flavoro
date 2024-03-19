import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import AddToCartItem from "./AddToCartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const navigate =useNavigate();
  const [activeCart, setActiveCart] = useState(false);
  const CardItems = useSelector((state) => state.cart.cart);
  const totalQty = CardItems.reduce((totalQty , item)=> totalQty + item.qty,0); 
  const totalPrice = CardItems.reduce((totalPrice ,item)=> totalPrice + item.qty * item.price ,0);
  console.log(CardItems);
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[21vw] p-5 bg-white h-full transition-all duration-500 z-50 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 p-1 font-bold text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {CardItems.length > 0 ? (
          CardItems.map((food) => {
            return (
              <AddToCartItem
                key={food.id}
                id={food.id}
                qty={food.qty}
                name={food.name}
                price={food.price}
                img={food.img}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800 rounde-md mt-10 shadow-lg p-2 bg-gray-50">
            Your card is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount: ₹{totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button onClick={()=>{navigate("/success") }} className="bg-green-500 hover:bg-green-600 font-bold px-3 text-white py-2 rounded-lg mb-5 w-[90vw] lg:w-[18vw]">
            CheckOut
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className={`bg-white rounded-full shadow-md p-3 text-5xl fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
};

export default Cart;
