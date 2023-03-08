import React from "react";
import Header from "./components/Header";
import SideBar from "./SideBar";

const MainLayout = ({ children, props }) => {

  return (
    <div className="flex">
    <SideBar props={props} />
    <div className="flex flex-col w-full ml-12 bg-primary-azulCeleste5 dark:bg-black pr-5 pb-5">
    <div className="bg-primary-azulCeleste5 h-5 w-full sticky top-0"></div>
      <div className="overflow-hidden">
        <Header props={props} />
        {children}
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
