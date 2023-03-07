import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { getUSerData, getAllUSersData, getGroupData, getAllGroupsData, getGlobalNewsData, getGroupNewsData, getCoursesData, getContributionsData, } from "../../services/dataFirebaseService";

import Calendar from "../../components/home/calendar/CalendarFull";
const RolHome = () => {
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);
  const handleClick = () => {
    dispatch(logout());
  };
  let status = true;
  return (
      <div className="body w-full h-5/6 bg-white rounded-b-lg">
        <h1>Bienvenido, {useSelector((state) => state.auth.user.rol)}</h1>
        {/* VISTA PROFESSOR */}
        {rol === "professor" && <div className="">
          <section className="_Novedades">
            {/* Componente para novedades */}
          </section>
          <section className="_Calendario">
            <Calendar />
          </section>
          <section className="_Proceso">
            {/* Componente para proceso */}
          </section>
        </div>}
        {/* VISTA STUDENT */}
        {rol === "student" && <div className="">
          <section className="_Novedades">
            {/* Componente para novedades */}
          </section>
          <section className="_Calendario">
            <Calendar />
          </section>
          <section className="_Proceso">
            {/* Componente para proceso */}
          </section>
        </div>}
        {/* VISTA ADMIN */}

        {rol === "admin" && <div className="">
          <section className="_Novedades bg-white">
            {/* Componente para novedades */}
            <h1>Novedad</h1>
          </section>

          <section className="_Calendario flex items-center justify-center bg-white">
            <div className="w-1/2 ">
              <Calendar />
            </div>
          </section>

          <section className="_Proceso bg-white">
            {/* Componente para proceso */}
            <h1>Proceso</h1>
          </section>
        </div>}

      </div>
  
  );
};

export default RolHome;
