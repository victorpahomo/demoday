import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import SideBar from "./SideBar";

const MainLayout = ({ children, props }) => {
  const rol = useSelector((state) => state.auth.user?.rol);
  return (
    <>
      {/* Professor */}
      {rol === "professor" && (
        <div className="flex">
          <SideBar props={props} />
          <div
            id="blueBackground"
            className="flex flex-col w-full  bg-primary-azulCeleste5 dark:bg-black pr-5 pb-5 pl-12  min-h-screen"
          >
            <div
              id="fixedTopBar"
              className="z-40 bg-primary-azulCeleste5 h-5 w-full sticky top-0"
            ></div>
            <Header props={props} />
            <section
              id="body"
              className="mt-16 bg-[#f2f2f2] w-full h-[calc(100%-4rem)] rounded-b-2xl"
            >
              <div className="px-7 pb-5">{children}</div>
            </section>
          </div>
        </div>
      )}
      {/* Admin */}
      {rol === "admin" && (
        <div className="flex">
          <div
            id="blueBackground"
            className="flex flex-col w-full  bg-primary-azulCeleste5 dark:bg-black pr-5 pb-5 pl-12  min-h-screen"
          >
            <div
              id="fixedTopBar"
              className="z-40 bg-primary-azulCeleste5 h-5 w-full sticky top-0"
            ></div>
            <Header props={props} />
            <section
              id="body"
              className="mt-16 bg-[#f2f2f2] w-full h-[calc(100%-4rem)] rounded-b-2xl"
            >
              <div className="px-7 pb-5">{children}</div>
            </section>
          </div>
        </div>
      )}
      {/* student */}
      {rol === "student" && (
        <div className="flex">
          <SideBar props={props} />
          <div
            id="blueBackground"
            className="flex flex-col w-full  bg-primary-azulCeleste5 dark:bg-black pr-5 pb-5 pl-12  min-h-screen"
          >
            <div
              id="fixedTopBar"
              className="z-40 bg-primary-azulCeleste5 h-5 w-full sticky top-0"
            ></div>
            <Header props={props} />
            <section
              id="body"
              className="mt-16 bg-[#f2f2f2] w-full h-[calc(100%-4rem)] rounded-b-2xl"
            >
              <div className="px-7 pb-5">{children}</div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;
