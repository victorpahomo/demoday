import React from "react";
import Header from "./components/Header";
import SideBar from "./SideBar";

const MainLayout = ({ children, props }) => {

  return (
    <div className="flex">
      <SideBar props={props} />
      <div id="blueBackground" className="flex flex-col w-full ml-12 bg-primary-azulCeleste5 dark:bg-black pr-5 pb-5  min-h-screen">
        <div id="fixedTopBar" className="z-40 bg-primary-azulCeleste5 h-5 w-full sticky top-0"></div>
        <Header props={props} />
        <section id="body" className="mt-16 bg-white w-full h-[calc(100%-4rem)] rounded-b-2xl">
          <div className="px-5 pb-5">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
