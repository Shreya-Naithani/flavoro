import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/SearchSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input onChange={(e)=>{dispatch(setSearch(e.target.value))}} className="p-3 border border-gray-400 text-sm outline-none rounded-lg w-full lg:w-[25vw]" type="search" name="search" placeholder="search here" autoComplete="off" />
      </div>
    </nav>
  );
};

export default NavBar;
