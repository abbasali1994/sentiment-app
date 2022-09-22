import React from "react";
import docs from "../images/docs.svg";

export const Navbar = () => {
  return (
    <div className="flex flex-row text-white p-[65px] justify-between">
      <div className="text-[24px] font-[700]">Sentiment</div>
      <div className="flex flex-row">
        <div className="flex flex-row justify-between items-center font-[700] text-[20px] mr-[20px]">
          <span className="mr-[25px]">Docs</span>
          <img src={docs} alt="" />
        </div>
        <button className="bg-white text-black rounded-[8px] py-[13px] px-[25px] text-[20px] font-[700]">
          Launch App
        </button>
      </div>
    </div>
  );
};
