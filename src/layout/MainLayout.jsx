import React from "react";
import Header from "./components/Header";
import SideBar from "./SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
    <SideBar />
    <div className="flex w-full h-auto min-h-screen bg-primary-azulCeleste5 dark:bg-black pr-5 pb-5 pt-5 gap-5">
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
