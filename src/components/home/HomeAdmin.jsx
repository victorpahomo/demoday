import { useState } from "react";
import { UserIcon, UserStudentIcon, ProfessorIcon, CoursesIcon, GradesIcon } from "../../assets";
import CardServices from "../CardServices";

const HomeAdmin = () => {
  const [groupSeleted, setGroupSeleted] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value.toUpperCase();
    // setGroupSeleted(e.target[0].value);
    setGroupSeleted(value);
  };
  console.log("groupSeleted: ", groupSeleted);
  return (
    <>
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
      <section id="adminPanel">
        <div className=" flex flex-wrap justify-around w-full mt-5">
          <CardServices
            title="Estudiantes"
            description="Agrega, elimina o modifica estudiantes."
            icon={UserStudentIcon}
            stylesIcon="h-24 fill-primary-AzulVerde4"
            link="https://forms.office.com/pages/responsepage.aspx?id=PmxyCsIpwUidPuiOxlHEILezxldzAHpCkZgRtVasDIZURjRUMDg4VUY2WkJIN1NUVEo0UVdYSDA5WCQlQCN0PWcu"
          />
          <CardServices
            title="Tutores"
            description="Agrega, elimina o modifica tutores."
            icon={ProfessorIcon}
            stylesIcon="h-24 fill-primary-AzulVerde4"
            link="https://forms.office.com/pages/responsepage.aspx?id=PmxyCsIpwUidPuiOxlHEILezxldzAHpCkZgRtVasDIZURjRUMDg4VUY2WkJIN1NUVEo0UVdYSDA5WCQlQCN0PWcu"
          />
          <CardServices
            title="Calificaciones"
            description="Agrega, elimina o modifica calificaciones del grupo"
            icon={GradesIcon}
            stylesIcon="h-24 fill-primary-AzulVerde4"
            link="https://forms.office.com/pages/responsepage.aspx?id=PmxyCsIpwUidPuiOxlHEILezxldzAHpCkZgRtVasDIZURjRUMDg4VUY2WkJIN1NUVEo0UVdYSDA5WCQlQCN0PWcu"
          />
          <CardServices
            title="Cursos"
            description="Agrega, elimina o modifica los cursos."
            icon={CoursesIcon}
            stylesIcon="h-24 fill-primary-AzulVerde4"
            link="https://forms.office.com/pages/responsepage.aspx?id=PmxyCsIpwUidPuiOxlHEILezxldzAHpCkZgRtVasDIZURjRUMDg4VUY2WkJIN1NUVEo0UVdYSDA5WCQlQCN0PWcu"
          />
        </div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg">Name Selection</h3>

            <label htmlFor="my-modal-6" className="btn w-52">
              Salir
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAdmin;
