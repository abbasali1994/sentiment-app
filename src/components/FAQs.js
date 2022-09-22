import React from "react";
import { Header2 } from "./Header";
import divider from "../images/divider.svg";
import { useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";

aos.init();

const FAQs = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className=" flex flex-row justify-between" data-aos="fade-left">
      <div className="w-[700px]">
        <Header2 header={question} />
        {open && (
          <div
            className="text-[18px] mt-[15px] mb-[60px]"
            style={{ color: "#8492A6" }}
          >
            {answer}
          </div>
        )}
        <img className="my-[57px]" src={divider} alt="" />
      </div>
      <div
        className={`cursor-pointer inline-flex justify-center hover:bg-white items-center border-[3px] rounded-[50px] w-[60px] h-[60px] text-white text-[80px] ${
          open ? "pb-[10px]" : "pb-[15px]"
        }`}
        onClick={() => handleToggle()}
      >
        {/* <img src={minus} alt="" /> */}
        <div
          className={`text-white font-[50] hover:text-black ${
            open ? "text-[50px]" : "text-[70px]"
          } `}
        >
          {`${open ? "+" : "-"}`}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
