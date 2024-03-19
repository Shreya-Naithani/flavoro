import React,{useState,useEffect} from "react";
import FoodData from '../Data/FoodData';
import {useDispatch,useSelector} from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";

const CategoryMenu = () => {
  
  const[categories , setCategories] = useState([]);

  const listUniqueCategories =()=>{
    const uniqueCategories = [
      ...new Set(FoodData.map((food)=>food.category))
    ];
    setCategories(uniqueCategories);
  }

  useEffect(()=>{
  listUniqueCategories();
  },[])
  const dispatch =useDispatch();
  const selectedCategory = useSelector((state)=>state.category.category);
  return (
    <div className="ml-6">
      <div>
        <h3 className="text-xl font-semibold">Find the best food</h3>
      </div>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      <button onClick={()=>{dispatch(setCategory("All"))}} className={`border px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
       All
        </button>
     {
      categories.map((category , index)=>{
        return(
          <button onClick={()=>{dispatch(setCategory(category))}} key={index} className={`border px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>
         {category}
        </button>
        )
      })
     }
      </div>
    </div>
  );
};

export default CategoryMenu;
