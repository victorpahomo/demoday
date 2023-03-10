import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);
  const userUid = useSelector((state) => state.auth.user.uid);
  
  useEffect(() => {
    const handleGetDataUser = async () => {
      const user = await getUSerData(userUid, dispatch);
    };
    handleGetDataUser();
  }, []);
  const name = useSelector((state) => state.data.user.name);
  
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
