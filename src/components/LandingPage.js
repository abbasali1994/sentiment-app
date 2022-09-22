import React from "react";
import Block from "./Block";
import curves from "../images/curves.svg";
import curves2 from "../images/curves2.svg";
import pattern1 from "../images/pattern1.svg";
import pattern2 from "../images/pattern2.svg";
import cubes from "../images/cubes.svg";
import ButtonType from "./ButtonType";
import ProtocolStats from "./ProtocolStats";
import RecentUpdates from "./RecentUpdates";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import aos from "aos";
import "aos/dist/aos.css";
import { Header } from "./Header";

aos.init();

export const LandingPage = () => {
  return (
    <div className="px-[100px]">
      <div data-aos="fade-right">
        <Header header="Gain access to more liquidity" position="right" />
        <div
          className="w-[509px] text-[24px] font-[400] leading-[28px] mt-[37px]"
          style={{ color: "#999AA1" }}
        >
          Our permissionless liquidity markets make life easier for users and
          builders
        </div>
      </div>
      <div data-aos="fade-right" className="flex flex-row">
        <div className="mr-[35px]">
          <ButtonType buttonType="block" />
        </div>
        <div>
          <ButtonType buttonType="styled" />
        </div>
      </div>
      <div className="absolute justify-end top-[20px] right-0">
        <img className="w-[1350px] opacity-50" src={curves} alt="" />
      </div>
      <div className="mt-[350px] flex flex-row items-center justify-between">
        <div data-aos="fade-right">
          <Header header="Made for Liquidity Providers" position="left" />
          <div
            className="w-[509px] text-[24px] font-[400] leading-[28px] mt-[37px]"
            style={{ color: "#999AA1" }}
          >
            Sentiment provides LPs with risk-adjusted exposure to broader DeFi
            rates
          </div>
          <ButtonType buttonType="normal" />
        </div>
        <div data-aos="fade-left" className="animate-move">
          <img className="mr-[65px] w-[506px]" src={pattern1} alt="" />
        </div>
      </div>
      <div className="mt-[150px] mr-[65px] flex flex-row items-center justify-between text-right">
        <div data-aos="fade-right" className="mt-[100px]">
          <img
            className="ml-[65px] w-[506px] animate-move"
            src={pattern2}
            alt=""
          />
        </div>
        <div data-aos="fade-left">
          <div>
            <Header header="Made for Borrowers" position="right" />
            <div
              className="w-[509px] text-[24px] font-[400] leading-[28px] mt-[37px]"
              style={{ color: "#999AA1" }}
            >
              Get access to 5x leverage which can be used for earning yield or
              speculation
            </div>
          </div>
          <ButtonType buttonType="normal" />
        </div>
      </div>
      <div className="mt-[250px] flex flex-row items-center justify-between">
        <div data-aos="fade-right">
          <Header header="Made for Builders" position="left" />
          <div
            className="w-[509px] text-[24px] font-[400] leading-[28px] mt-[37px]"
            style={{ color: "#999AA1" }}
          >
            Tap into Sentiment's liquidity pools and build structured products
            or strategy vaults. Use Sentiment to allow leverage into your
            ecosystem and enhance your users' experiences
          </div>
          <ButtonType buttonType="normal" />
        </div>
        <div data-aos="fade-left" className="mt-[80px]">
          <img
            className="mr-[65px] w-[506px] animate-move"
            src={cubes}
            alt=""
          />
        </div>
      </div>
      <ProtocolStats />
      <RecentUpdates />
      <FAQSection />
      <div className="absolute left-0 top-[4400px]">
        <img className="w-[700px] opacity-50" src={curves2} alt="" />
      </div>
      <Footer />
    </div>
  );
};
