import React from "react";

const SkeletonHome = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-300 animate-[pulse_0.4s_ease-in-out_infinite] py-5">
      <div className="flex flex-col w-12 h-full bg-gray-300 animate-[pulse_0.4s_ease-in-out_infinite] p-1 items-center">
        <div className="flex flex-col mt-10 gap-12 items-center justify-center ml-2">
          <div className="flex w-12 h-12 bg-gray-100  rounded-lg justify-end items-center">
            <div className="w-8 h-8 bg-gray-300 animate-[pulse_0.4s_ease-in-out_infinite] rounded-lg mr-2"></div>
          </div>
          <div className="w-8 h-8 bg-gray-100 animate-[pulse_0.4s_ease-in-out_infinite] rounded-lg"></div>
          <div className="w-8 h-8 bg-gray-100 animate-[pulse_0.4s_ease-in-out_infinite] rounded-lg"></div>
          <div className="w-8 h-8 bg-gray-100 animate-[pulse_0.4s_ease-in-out_infinite] rounded-lg"></div>
          <div className="w-8 h-8 bg-gray-100 animate-[pulse_0.4s_ease-in-out_infinite] rounded-lg"></div>
        </div>
      </div>
      <div className="flex justify-between w-[calc(100%-4.5rem)] h-11/12 bg-gray-100 animate-[pulse_0.4s_ease-in-out_infinite] p-3 rounded-2xl">
        <div className="w-16 h-7 bg-gray-300  rounded-lg"></div>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-gray-300 animate-[pulse_0.4s_ease-in-out_infinite] rounded-full"></div>
          <div className="w-10 h-10 bg-gray-300 animate-[pulse_0.4s_ease-in-out_infinite] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHome;
