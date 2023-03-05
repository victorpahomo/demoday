import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Sidebar from "../layout/Sidebar";
import {getUSerData,getAllUSersData,getGroupData,getAllGroupsData,getGlobalNewsData,getGroupNewsData} from '../services/dataFirebaseService'

const Home = () => {
  const dispatch = useDispatch();
  const rol = useSelector((state) => state.auth.user.rol);
  
  useEffect(() => {
    const handleGetData = async () => {
      const data = await getAllUSersData(dispatch);
      console.log(data);
    };
    const handleGetDataUser = async () => {
      const user = await getUSerData('6DUJWuYEz8N0QbJdxskGVbbmesm2',dispatch);
      console.log(user);
    };
    const handleGetDataGroup = async () => {
      const group = await getGroupData('frontend-2',dispatch);
      console.log(group);
    };
    const handleGetDataAllGroups = async () => {
      const groups = await getAllGroupsData(dispatch);
      console.log(groups);
    };
    const handleGetDataGlobalNews = async () => {
      const news = await getGlobalNewsData(dispatch);
      console.log(news);
    };
    const handleGetDataGroupNews = async () => {
      const news = await getGroupNewsData('frontend-2',dispatch);
      console.log(news);
    };
    handleGetData();
    handleGetDataUser();
    handleGetDataGroup();
    handleGetDataAllGroups();
    handleGetDataGlobalNews();
    handleGetDataGroupNews();
  }, []);
 
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className="w-full h-full bg-white rounded-lg">
           
      <div className="body w-full h-full bg-white rounded-lg">
        <button onClick={handleClick}>Cerrar Sesion</button>
        {rol === "professor" && <h1>Home Profe</h1>}
        {rol === "student" && <h1>Home Estudiante</h1>}
        {rol === "admin" && <h1>Home Admin</h1>}
        <h1>{useSelector((state) => state.auth.user.displayName)}</h1>
      </div>
    </div>
  );
};

export default Home;
