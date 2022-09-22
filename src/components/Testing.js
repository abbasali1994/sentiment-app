import React from "react";
import { Header2 } from "./Header";
import arrow from "../images/arrow.svg";
import aos from "aos";
import "aos/dist/aos.css";

aos.init();

const Testing = () => {
  return (
    <div
      data-aos="fade-right"
      className="w-[780px] hover:bg-hover border-[1px] px-[34px] py-[30px] rounded-[14px] mb-[38px]"
      style={{
        borderColor: "#0021F5",
      }}
    >
      <div className="flex flex-row justify-between ">
        <Header2 header="Beta Testing Now Live" />
        <img className="" src={arrow} alt="" />
      </div>
      <div
        className="flex flex-row justify-between mt-[30px] text-[18px] items-end"
        style={{ color: "#8492A6" }}
      >
        <span>Aug 25, 2022</span>
        <div className="w-[430px] inline-flex justify-items-end">
          Sentiment uses decentralized accounts to enable permissionless,
          composable leverage
        </div>
      </div>
    </div>
  );
};

export default Testing;
