import React from "react";
import MainLayout from "../layout/MainLayout";
import RolHome from "../components/home/RolHome";
const Home = () => {
  
  return (
    <div className="">
      <MainLayout props="Inicio" >
        <RolHome />
      </MainLayout>
    </div>
  );
};

export default Home;
