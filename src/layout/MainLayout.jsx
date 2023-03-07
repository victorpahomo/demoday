import React from "react";
import Header from "./components/Header";

const MainLayout = ({children}) => {
  return (
    <div className="h-auto bg-primary-azulCeleste5 dark:bg-black p-5 ">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
