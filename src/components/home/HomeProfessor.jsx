import Calendar from "../../components/home/calendar/CalendarFull";

const HomeProfessor = () => {
    return (
        <>
            {/* Componente para novedades */}
            <section id='professorNews'>
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
            <section id='professorCalendar'>
                <div className="w-full">
                    <Calendar />
                </div>
            </section>

            {/* Componente para proceso */}
            <section id='professorProcess'>
            </section>
        </>
    )
}

export default HomeProfessor