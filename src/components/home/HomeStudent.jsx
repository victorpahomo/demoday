import Calendar from "../../components/home/calendar/CalendarFull";
 const HomeStudent = () => {
    return (
        <div className="flex flex-col gap-10">
            {/* Componente para novedades */}
            <section id='studentNews' className=" bg-white py-5 rounded-2xl border-4">
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

            {/* Componente para proceso */}

            <section id='studentProcess' className="w-full">
                <ul className="steps">
                    <li className="step step-accent before:bg-white w-96 text-black">Fundamentos</li>
                    <li className="step step-accent ">Profundización</li>
                    <li className="step  before:bg-white">Empleabilidad</li>
                </ul>
            </section>
            <section className="s">
                <h1>Tu progreso en el Bootcamp</h1>
            <progress className="progress progress-success h-6 w-full" value="50" max="100"></progress>
            </section>
            <section>
                
            </section>
           
        </div>
    )
}

export default HomeStudent