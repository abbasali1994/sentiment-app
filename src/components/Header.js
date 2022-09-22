import React from "react";

export const Header = ({ header, position }) => {
  return (
    <div className={`w-[600px] ${header !== "Recent Updates" && "pr-[40px]"}`}>
      <div
        className={`text-white text-[42px] font-[500] ${
          header === "Recent Updates" && "text-right"
        } ${header === "Audited and secured by:" && "text-center"}`}
      >
        {header}
      </div>
      {position !== "blank" && (
        <div
          className={`relative top-[-20px] float-${position} z-[-2] h-[15px] ${
            header === "Audited and secured by:"
              ? "w-[480px] ml-[40px]"
              : "w-[280px]"
          }`}
          style={{
            background:
              "linear-gradient(90deg, #0121F5 0%, rgba(1, 33, 245, 0) 105.91%)",
          }}
        ></div>
      )}
    </div>
  );
};

export const Header2 = ({ header }) => {
  return <div className="text-white text-[36px] font-[400]">{header}</div>;
};
