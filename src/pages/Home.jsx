import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import {getUSerData,getAllUSersData,getGroupData,getAllGroupsData,getGlobalNewsData,getGroupNewsData,getCoursesData,getContributionsData} from '../services/dataFirebaseService'
import Header from "../layout/Header";

const Home = () => {
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);
  console.log(rol);
  const handleClick = () => {
    dispatch(logout());
  };
  let status = true;
  return (
    <div className="w-full h-full bg-white rounded-lg pb-14">
      <Header />
      <div className="body w-full h-full bg-white rounded-lg">
        {rol === "professor" && <h1>Home Profe</h1>}
        {rol === "student" && <h1>Home Estudiante</h1>}
        {rol === "admin" && <h1>Home Admin</h1>}
        <h1>{useSelector((state) => state.auth.user.displayName)}</h1>
      </div>
    </div>
  );
};

export default Home;
