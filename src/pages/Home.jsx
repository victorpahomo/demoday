import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { HomeAdmin, HomeProfessor, HomeStudent } from "../components/home";
import { getUserData } from "../services/dataFirebaseService";

const Home = () => {
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);
  const userUid = useSelector((state) => state.auth.user.uid);
  const name = useSelector((state) => state.user.user?.name);
  const userStatus = useSelector((state) => state.user.loading);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(getUserData(userUid));
    }
  }, [userStatus, dispatch]);

  /* ----------------- CONTENT ---------------------- */
  let content;
  if (userStatus === "pending") {
    content = <h1>Cargando...</h1>;
  } else if (userStatus === "fulfilled") {
    content = (
      <>
        <h1 className="mb-5 flex gap-1">
          ¡Hola,<p className="font-semibold">{name ? name : rol}</p>
          bienvenido a Code LMS!
        </h1>
         {rol === "professor" && <HomeProfessor />}
        {rol === "student" && <HomeStudent />}
        {rol === "admin" && <HomeAdmin />}
      </>
    )
  } else if (userStatus === "rejected") {
    content = <h1>Ha ocurrido un error</h1>;
  }
  /* ------------------------------------------------ */
  return (
    <div className="">
      <MainLayout props="Inicio">
        {content}
      </MainLayout>
    </div>
  );
};

export default Home;
