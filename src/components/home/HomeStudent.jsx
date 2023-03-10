import Calendar from "../../components/home/calendar/CalendarFull";
import StepProgress from "../../components/home/stepProgress/StepProgress";
const HomeStudent = () => {
    return (
        <div className="flex flex-col gap-10">
            <section>
                <StepProgress props={1} />
            </section>
            {/* Componente para proceso */}
            <section id='studentProcess' className="w-full">
                <ul className="steps">
                    <li className="step step-info w-96">Fundamentos</li>
                    <li className="step step-info ">Profundización</li>
                    <li className="step ">Empleabilidad</li>
                </ul>
            </section>
            {/* Componente para novedades */}
            <section id='studentNews' className=" bg-white py-5 rounded-2xl border-4 ">
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