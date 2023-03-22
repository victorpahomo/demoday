import { useState } from "react";
import Calendar from "../../components/home/calendar/CalendarFull";

const HomeProfessor = () => {
  const [groupSeleted, setGroupSeleted] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value.toUpperCase();
    setGroupSeleted(value);
  };
  console.log("groupSeleted: ", groupSeleted);
  return (
    <>
      {/* Componente para novedades */}
      <div className="flex flex-wrap text-primary-Azul5 gap-2 justify-evenly ">
        <select
          defaultValue="Elije el grupo que deseas administrar"
          onChange={handleSubmit}
          className="select w-full max-w-xs bg-white shadow-md"
        >
          <option disabled value="Elije el grupo que deseas administrar">
            Elije el grupo que deseas administrar
          </option>
          <option value="frontend_1">FrontEnd 1</option>
          <option value="frontend_2">FrontEnd 2</option>
          <option value="frontend_3">FrontEnd 3</option>
          <option value="backend_1">BackEnd 1</option>
          <option value="backend_2">BackEnd 2</option>
          <option value="backend_3">BackEnd 3</option>
        </select>
        <div className="flex gap-2 text-primary-azulCeleste5">
          <p>Grupo actual:</p>
          <span className="font-bold text-primary-azulCeleste4">
            {groupSeleted ? (
              groupSeleted
            ) : (
              <p className="text-red-500 text-lg">"Selecciona un grupo"</p>
            )}
          </span>
        </div>
      </div>

      {/* Componente para Calendario */}
      <section id="professorCalendar" className="mt-10">
        <div className="w-full">
          <Calendar />
        </div>
      </section>

      {/* Componente para proceso */}
      <section id="professorProcess"></section>
    </>
  );
};

export default HomeProfessor;
