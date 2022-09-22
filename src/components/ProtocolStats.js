import React from "react";

const ProtocolStats = () => {
  return (
    <div className="mt-[300px]">
      <div
        className="pt-[57px] text-white rounded-[32px] text-center pb-[33px] mb-[100px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(1, 32, 237, 0.23) 0%, rgba(1, 32, 237, 0) 100%)",
        }}
      >
        <span className="text-[48px] font-[500] ">Protocol Stats</span>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col px-[180px] mt-[50px]">
            <div className="font-[400] flex flex-col text-left mb-[60px]">
              <span className="text-[24px]" style={{ color: "#8492A6" }}>
                Treasury Balance
              </span>
              <span className="text-[52px] text-white">$213,420,069</span>
            </div>
            <div className="font-[400] flex flex-col text-left">
              <span className="text-[24px]" style={{ color: "#8492A6" }}>
                Protocol-Owned Liquidity
              </span>
              <span className="text-[52px] text-white">98.47%</span>
            </div>
          </div>
          <div className="flex flex-col px-[180px] mt-[50px]">
            <div className="font-[400] flex flex-col text-left mb-[60px]">
              <span className="text-[24px]" style={{ color: "#8492A6" }}>
                Number of Holders
              </span>
              <span className="text-[52px] text-white">120,000+</span>
            </div>
            <div className="font-[400] flex flex-col text-left">
              <span className="text-[24px]" style={{ color: "#8492A6" }}>
                Unique Tokens in Treasury
              </span>
              <span className="text-[52px] text-white">50+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolStats;
