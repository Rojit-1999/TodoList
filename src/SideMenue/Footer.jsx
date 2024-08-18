import React from "react";
import { IoIosSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

function Footer() {
  return (
    <div className="py-[1rem]">
      <div className="flex items-center gap-[5px] text-[#4d4d4d]">
        <IoIosSettings />
        <h1 className="font-[500]">Setting</h1>
      </div>
      <div className="flex items-center gap-[5px] text-[#4d4d4d] mt-[0.5rem]">
        <BiLogOut />
        <h1 className="font-[500]">Logout</h1>
      </div>
    </div>
  );
}

export default Footer;
