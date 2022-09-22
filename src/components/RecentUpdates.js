import React from "react";
import { Header } from "./Header";
import Testing from "./Testing";

const RecentUpdates = () => {
  return (
    <div className="flex flex-row justify-between mt-[220px]">
      <div>
        <Testing />
        <Testing />
        <Testing />
      </div>
      <div className="float-right pr-[65px]">
        <div data-aos="fade-left">
          <Header header="Recent Updates" position="blank" />
        </div>
        <button
          data-aos="fade-left"
          className="float-right h-[48px] w-[185px] border-[1px] border-white text-white rounded-[8px] mt-[15px] text-[16px] font-[700]"
        >
          View all articles
        </button>
      </div>
    </div>
  );
};

export default RecentUpdates;
