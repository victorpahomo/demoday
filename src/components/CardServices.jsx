import React from "react";


const CardServices = () => {
  const courses = {
    "apoyoTecnico": {
      title: "Apoyo Técnico",
      description: "Aprende a crear la estruccturas páginas web con HTML5",
      image:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Kbu_OnGEVUCvfMPYnj191g.png",
      hours: "4",
      category: "html",
    },
    "apoyoPsicosocial": {
      title: "Apoyo Psicosocial",
      description: "Aprende a usar Redux y Redux Toolkit en tus webs",
      image:
        "https://www.courses.tutorialswebsite.com/assets/front/img/category/react-redux-category.jpeg",
      hours: "10",
      category: "redux",
    },
    "reporteInasistencia": {
      title: "Reporte de inasistencia",
      description: "Aprende a crear páginas web sencillas con CSS3",
      image:
        "https://miro.medium.com/v2/resize:fit:336/1*nFj_gJtwus-ZVIwDE4oGrw.png",
      hours: "4",
      category: "css",
    },
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-4">
      {Object.values(courses).map((course) => (
        <div key={course.title.trim()} className="card h-80 shadow-xl bg-primary-azulCeleste1 text-primary-Azul5">
            <div className="h-96 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${course.image})`}} />
          <div className="card-body px-4">
            <h2 className="card-title">{course.title}</h2>
            <div className="flex justify-around">
              <div className="badge badge-outline">{course.category}</div>
              <div className="badge badge-secondary">NEW</div>
            </div>
            <p>{course.description}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary bg-primary-AzulVerde4 border-none hover:bg-primary-Azul5">
                Abrir curso
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardServices;