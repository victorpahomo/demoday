import React from "react";
import MainLayout from "../layout/MainLayout";
import RolHome from "../components/home/RolHome";
const Home = () => {
  return (
    <div className="h-screen">
      <MainLayout  >
        <RolHome />
      </MainLayout>
    </div>
  );
};

export default Home;
