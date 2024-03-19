import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {decrementQty, incrementQty, removeFromCart} from '../Redux/Slices/CardSlices';
import toast, { Toaster } from 'react-hot-toast';

const AddToCartItem = ({id,name,price,img,qty}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={()=>{dispatch(removeFromCart({id,name,price,qty,img})); toast(`${name} Removed!`, {
  icon: '👋',
});}
    
    } className="text-gray-700 cursor-pointer absolute right-7 ml-5"/>
        <img
          className="w=[50px] h-[50px]"
          src={img}
          alt="food"
        />
        <div className="leading-5">
          <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-800 ">{name}</h2>
          </div>
         
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold text-green-500">₹{price}</span>
            </div>
            <div className="flex absolute right-7 justify-center gap-2 items-center">
              <span onClick={()=>{qty > 1 ? dispatch(decrementQty({id,name,qty,price,img})):(qty=0)}} className="border-2 border-gray-600  px-1 hover:text-white hover:border-none hover:bg-green-500 text-gray-600 rounded-md cursor-pointer transition-all ease-linear">
                -
              </span>
              <span>{qty}</span>
              <span onClick={()=>{ qty>=1 ? dispatch(incrementQty({id,name,qty,price,img})):(qty=0) } 
            
            } className="border-2 border-gray-600  px-1 hover:text-white hover:border-none hover:bg-green-500 text-gray-600 rounded-md cursor-pointer transition-all ease-linear">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartItem;
