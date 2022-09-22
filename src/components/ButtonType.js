import React from "react";

const ButtonType = ({ buttonType }) => {
  return (
    <div>
      {buttonType === "block" && (
        <button
          className="h-[48px] w-[185px] border-0 text-white rounded-[8px] mt-[32px] text-[16px] font-[700]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 33, 245, 0.59) 0%, rgba(0, 33, 245, 0) 113.24%)",
          }}
        >
          Launch App
        </button>
      )}
      {buttonType === "styled" && (
        <button
          className="h-[48px] w-[185px] border-[1px] text-white rounded-[8px] mt-[32px] text-[16px] font-[700]"
          style={{
            borderColor: "#0021F5",
          }}
        >
          Provides Liquidity
        </button>
      )}
      {buttonType === "normal" && (
        <button className="h-[48px] hover:text-black hover:bg-white w-[185px] border-[1px] border-white text-white rounded-[8px] mt-[32px] text-[16px] font-[700]">
          Learn More
        </button>
      )}
    </div>
  );
};

export default ButtonType;
