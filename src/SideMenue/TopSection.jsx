import React from "react";
import { IoSearch } from "react-icons/io5";

function TopSection() {
  return (
    <div>
      <div>
        <h1 className="font-[600] text-[1.4rem]">Menue</h1>
        <div className="relative mt-[0.7rem]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className=" pl-[1.8rem] outline-none border-black/5 border-[1px] shadow-md shadow-black/5 rounded-[1rem] py-[4px]"
          />
          <IoSearch  className="text-[#b5b4b4] absolute top-[9px] left-2"/>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default TopSection;
