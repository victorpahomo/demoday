import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/home/calendar/CalendarFull";
import StepProgress from "../../components/home/stepProgress/StepProgress";
import { getGroupData, getGlobalNewsData } from "../../services/dataFirebaseService";
import News from "./news/News";

const HomeStudent = () => {
    const dispatch = useDispatch();
    const userGroup = useSelector((state) => state.data.user.groupStudent);

    useEffect(() => {
        const handleGetDataGroup = async () => {
            const group = await getGroupData(userGroup, dispatch);
        };
        const handleGetDataNews = async () => {
            const news = await getGlobalNewsData(dispatch);
        };
        handleGetDataNews();
        handleGetDataGroup();
    }, []);
    return (
        <div className="flex flex-col gap-5">

            {/* Componente para proceso */}
            <section>
                <StepProgress step={2} />
            </section>
            {/* Componente para novedades */}
            <News rol={"hola"} />
            {/* Componente para Calendario */}
            <section id='studentCalendar'>
                <div className="w-full">
                    <Calendar />
                </div>
            </section>

        </div>
    )
}

export default HomeStudent