import React from "react";
import { AiFillStar } from "react-icons/ai";
import {useDispatch} from 'react-redux';
import {addToCart} from '../Redux/Slices/CardSlices';

const FoodCart = ({id,name,price,desc,img,rating,handleToast}) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img className="w-auto h-[130px] hover:scale-105 cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt= {name}
      />
      <div className="flex justify-between text-sm">
        <h3>{name}</h3>
        <span className="text-green-500 font-bold">₹{price}</span>
      </div>
        <p className="text-sm font-normal">{desc.slice(0,50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
        <AiFillStar className="mr-1 text-yellow-400"/>{rating}
        </span>
            <button onClick={()=>{
              dispatch(addToCart({id, name ,img , price ,rating, qty:1}

                ));
                handleToast(name);
            }
          }
            className="p-1  bg-green-500 text-white hover:bg-green-600 rounded-lg text-sm">Add to cart</button>
      </div>
    </div>
  );
};

export default FoodCart;
