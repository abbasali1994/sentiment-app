import React from "react";
import { Header } from "./Header";

const Block = ({ header, message, buttonType }) => {
  return (
    <div>
      <Header header={header} />
      <div
        className="w-[509px] text-[24px] font-[400] leading-[28px] mt-[37px]"
        style={{ color: "#999AA1" }}
      >
        {message}
      </div>
    </div>
  );
};

export default Block;
