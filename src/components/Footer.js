import aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import docs from "../images/docs.svg";
import logo1 from "../images/logo1.svg";
import logo2 from "../images/logo2.svg";
import { Header } from "./Header";
aos.init();

const Footer = () => {
  return (
    <div className="mb-[80px]">
      <div className="mt-[220px] flex flex-col items-center">
        <div className="flex justify-center" data-aos="fade-up">
          <Header header="Audited and secured by:" position="left" />
        </div>
        <div className="flex flex-row mt-[10px] mb-[260px]" data-aos="fade-up">
          <img className="w-[180px] mr-[50px]" src={logo1} alt="" />
          <img className="w-[180px]" src={logo2} alt="" />
        </div>
      </div>
      <div
        className="flex flex-row text-white justify-between"
        data-aos="fade-up"
      >
        <div className="text-[24px] font-[700]">Sentiment</div>
        <div className="flex flex-row">
          <div className="flex flex-row justify-between items-center font-[400] text-[20px] mr-[20px]">
            <span className="mr-[60px]">Blog</span>
            <span className="mr-[60px]">Docs</span>
            <img className="w-[42px] h-[45px]" src={docs} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
