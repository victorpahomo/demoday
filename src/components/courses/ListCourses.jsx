
import { useNavigate } from "react-router-dom";
const ListCourses = ({ courses }) => {
  const navigate = useNavigate();// Importa la función de navegación de React Router
  // Función para manejar el clic en un curso y navegar a la página de detalles del curso
  const handleClick = (id) => {
    navigate(`/course/${id}`);// Navega a la URL específica del curso
  }

  return (
    <>

      <div>
        {/* Contenedor de la lista de cursos */}
        <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-4">
          {/* Mapea sobre los cursos y renderiza cada curso */}
          {Object.values(courses).map((course) => (
            <div
              key={course.title.trim()}
              className=" h-auto shadow-md bg-slate-200 text-primary-Azul5"
            >
              {/* Imagen del curso */}
              <div
                className="h-32 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className=" px-4 flex flex-col items-center py-4">
                {/* Título del curso */}
                <h2 className="card-title">{course.title}</h2>
                <div className="flex justify-around">
                  {/* Categoría del curso */}
                  <div className="badge badge-outline">{course.category}</div>
                </div>
                {/* Descripción del curso */}
                <p className="text-sm">{course.description}</p>
                <div className="flex justify-center">
                  {/* Botón para abrir el curso y llamar a la función handleClick */}
                  <button
                    onClick={() => handleClick(course.id)}
                    className="btn mt-3 btn-primary btn-sm bg-primary-AzulVerde4 border-none hover:bg-primary-Azul5 rounded-md"
                  >
                    Abrir curso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default ListCourses;
