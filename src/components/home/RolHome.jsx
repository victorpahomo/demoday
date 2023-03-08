import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import {
  getUSerData,
  getAllUSersData,
  getGroupData,
  getAllGroupsData,
  getGlobalNewsData,
  getGroupNewsData,
  getCoursesData,
  getContributionsData,
} from "../../services/dataFirebaseService";

import Calendar from "../../components/home/calendar/CalendarFull";
const RolHome = () => {
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);
  const name = useSelector((state) => state.auth.user.name);
  console.log(useSelector((state) => state.auth.user));
  const handleClick = () => {
    dispatch(logout());
  };
  let status = true;
  return (
    <div className="body px-24 py-10 w-full bg-white rounded-b-lg">
      <h1 className="mb-5">
         {/* {useSelector((state) => state.auth.user.rol)} */}
         ¡Hola, {name ? name : rol} bienvenido a Code LMS!
      </h1>
      {/* VISTA PROFESSOR */}
      {rol === "professor" && (
        <div className="">
          <section className="_Novedades">
            {/* Componente para novedades */}
          </section>
          <section className="_Calendario">
            <Calendar />
          </section>
          <section className="_Proceso">
            {/* Componente para proceso */}
          </section>
        </div>
      )}
      {/* VISTA STUDENT */}
      {rol === "student" && (
        <div className="">
          <section className="_Novedades">
            {/* Componente para novedades */}
          </section>
          <section className="_Calendario">
          <Calendar />
          </section>
          <section className="_Proceso">
            {/* Componente para proceso */}
          </section>
        </div>
      )}
      {/* VISTA ADMIN */}

      {rol === "admin" && (
        <div className="">
          <section className="_Novedades bg-white py-5 rounded-2xl border-4">
            {/* Componente para novedades */}
            <div>
              <div className="flex justify-around">
                <h1 className="font-medium">Novedades</h1>
                <h1 className="font-medium">Link a la proxima clase</h1>
              </div>
              <h1 className="mt-5 text-3xl font-medium text-center">
                Ultima novedad
              </h1>
              <div className="flex justify-end">
                <span className="btn mr-20">ver mas</span>
              </div>
            </div>
          </section>

          <section className="my-14 _Calendario flex items-center justify-center bg-white">
            <div className="w-full">
              <Calendar />
            </div>
          </section>

          <section className="_Proceso bg-white">
            <h1>Proceso de tu aprendizaje</h1>
          </section>
        </div>
      )}
    </div>
  );
};

export default RolHome;
