import React from "react";
import {  useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { HomeAdmin,HomeProfessor,HomeStudent } from "../components/home";
import {
  getUSerData,
  getAllUSersData,
  getGroupData,
  getAllGroupsData,
  getGlobalNewsData,
  getGroupNewsData,
  getCoursesData,
  getContributionsData,
} from "../services/dataFirebaseService";

const Home = () => {
  const rol = useSelector((state) => state.auth.user.rol);
  const name = useSelector((state) => state.auth.user.name);

  return (
    <div className="">
      <MainLayout props="Inicio" >
      <h1 className="mb-5">
         ¡Hola, {name ? name : rol} bienvenido a Code LMS!
      </h1>
      {rol === "professor" && <HomeProfessor />}
      {rol === "student" && <HomeStudent />}
      {rol === "admin" && <HomeAdmin />}

      </MainLayout>
    </div>
  );
};

export default Home;
