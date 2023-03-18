import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { HomeAdmin, HomeProfessor, HomeStudent } from "../components/home";
import { getUserData } from "../services/dataFirebaseService";

const Home = () => {
  const dispatch = useDispatch();
  // Loaders
  const authFetchStatus = useSelector((state) => state.auth.loading);//true loading, false succes
  const userFetchStatus = useSelector((state) => state.user.loading);//idle, pending, fulfilled, rejected
  // Data
  const rol = useSelector((state) => state.auth.user?.rol)
  const userUid = useSelector((state) => state.auth.user?.uid)
  const name = useSelector((state) => state.user.user?.name)

  // Get user data
  useEffect(() => {
    if (!authFetchStatus) {
      if (userFetchStatus === "idle") {
        dispatch(getUserData(userUid));
      }
    }
  }, [userFetchStatus])

  return (
    <div className="">
      <MainLayout props="Inicio">
        {authFetchStatus === false && userFetchStatus === "pending" ? //Loading
          (
            <h1>Cargando...</h1>
          )
          :
          (
            userFetchStatus === "rejected" ?//Error
              (<h1>Hubo un error</h1>)
              : //Success
              (
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
          )
        }
      </MainLayout>
    </div>
  );
};

export default Home;
