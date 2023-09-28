import React from "react";
import ISODefault from "../../assets/CodeLMSIcon/ISODefault.svg";
const SkeletonHome = () => {
  return (
    <div className="flex w-screen h-screen bg-[#f2f2f2] justify-center items-center">
      <img src={ISODefault} alt="" className="h-20 animate-[spin_1s_ease-in-out_infinite] " />
    </div>
  );
};

export default SkeletonHome;
