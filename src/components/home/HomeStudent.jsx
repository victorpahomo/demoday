import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/home/calendar/CalendarFull";
import StepProgress from "../../components/home/stepProgress/StepProgress";
import { getGroupData, getAllNewsData } from "../../services/dataFirebaseService";
import News from "../../components/home/news/News";
const HomeStudent = () => {
  const dispatch = useDispatch();
  const userGroup = useSelector((state) => state.user.user.groupStudent);
  const groupStatus = useSelector((state) => state.group.loading);
  const userStatus = useSelector((state) => state.user.loading);

  useEffect(() => {
    if (groupStatus === "idle") {
      dispatch(getGroupData(userGroup));
    }
  }, [groupStatus, dispatch]);

  /*  Anterior useEffect
     const handleGetDataGroup = async () => {
        const group = await getGroupData(userGroup, dispatch);
      };
      const handleGetDataNews = async () => {
        const news = await getNewsData(dispatch);
      }; */
  /*     handleGetDataNews();
      handleGetDataGroup(); */

  return (
    <div className="flex flex-col gap-5">
      {/* Componente para novedades */}
      <div className="flex justify-center w-full overflow-hidden">
        <News />
      </div>
      {/* Componente para Calendario */}
      <section id="studentCalendar">
        <div className="w-full">
          <Calendar />
        </div>
      </section>
    </div>
  );
};

export default HomeStudent;
