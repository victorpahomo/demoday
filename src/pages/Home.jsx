import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { HomeAdmin, HomeProfessor, HomeStudent } from "../components/home";
import { getUSerData } from "../services/dataFirebaseService";

const Home = () => {
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);
  const userUid = useSelector((state) => state.auth.user.uid);
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar si la petición está en curso
  console.log("antes de useEffect");

  useEffect(() => {
    const handleGetDataUser = async () => {
      const user = await getUSerData(userUid, dispatch);
      setIsLoading(false); // La petición ha terminado, actualiza el estado
    };
    handleGetDataUser();
  }, []);

  console.log("después de useEffect");

  const name = useSelector((state) => state.data.user?.name);
  return (
    <div className="">
      <MainLayout props="Inicio">
        {isLoading ? (
          <h1>Cargando...</h1>
        ) : (
          <>
            <h1 className="mb-5">
              ¡Hola, {name ? name : rol} bienvenido a Code LMS!
            </h1>
            {rol === "professor" ? <HomeProfessor /> : "no encontrado"}
            {rol === "student" ? <HomeStudent /> : "no encontrado"}
            {rol === "admin" && <HomeAdmin />}
          </>
        )}
      </MainLayout>
    </div>
  );
};

export default Home;