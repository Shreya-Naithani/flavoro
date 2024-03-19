import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItem = () => {
  const category = useSelector((state)=>state.category.category);
  const Search = useSelector((state)=>state.search.search);
  const handleToast =(name)=>{
    toast.success(` Added ${name}`);
  }
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {
        FoodData.filter((food)=>{
          if(category === "All"){
            return food.name.toLowerCase().includes(Search.toLowerCase());
          }
          else{
           return category === food.category && food.name.toLowerCase().includes(Search.toLowerCase());
          }
        }).map((food)=>{
          return(
            <FoodCart
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            category={food.category}
            handleToast={handleToast}
          />
          )
        })
      }



    </div>
    </>
    
  );
};

export default FoodItem;
