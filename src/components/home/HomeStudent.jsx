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
      {/* Componente para novedades */}
      <div className="flex justify-center w-full overflow-hidden">
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
