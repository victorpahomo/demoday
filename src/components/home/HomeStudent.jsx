import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/home/calendar/CalendarFull";
import { getGroupData, getAllNewsData } from "../../services/dataFirebaseService";
import Carousel from "../../components/home/news/Carousel";

const HomeStudent = () => {
  const dispatch = useDispatch();
  // Loaders
  const userStatus = useSelector((state) => state.user.loading);
  const groupStatus = useSelector((state) => state.group.loading);
  //Data
  const userGroup = useSelector((state) => state.user.user?.groupStudent);

  useEffect(() => {
    if (userStatus === "fulfilled") {
      if (groupStatus === "idle") {
        dispatch(getGroupData(userGroup));
      }
    }
  }, [groupStatus]);


  return (
    <div className="flex flex-col gap-5">
      {/* Componente para Link */}
      <div>
        <h2 className="text-primary-Azul5">Link a la siguiente sesión: <a target="_blank" className="text-primary-AzulVerde2" href="https://zoom.us/j/96076998105?pwd=dVBXd1VJZzN4TEw1NlFxdUhDQldBUT09"> pulsa aquí</a> </h2>
      </div>
      {/* Componente para Calendario */}
      <section id="studentCalendar">
        <div className="flex items-start justify-center w-full h-full gap-6">
          <div className="w-3/4">

          <Calendar />
          </div>
          <div className="w-1/4">

          <Carousel />
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomeStudent;
