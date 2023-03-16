import React from "react";

const ListCourses = () => {
  const courses = {
    "2023-html-1": {
      title: "Curso inicial de HTML5",
      description: "Aprende a crear la estruccturas páginas web con HTML5",
      image:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Kbu_OnGEVUCvfMPYnj191g.png",
      hours: "4",
      category: "html",
    },
    "2023-redux-1": {
      title: "Curso inicial de Redux",
      description: "Aprende a usar Redux y Redux Toolkit en tus webs",
      image:
        "https://www.courses.tutorialswebsite.com/assets/front/img/category/react-redux-category.jpeg",
      hours: "10",
      category: "redux",
    },
    "2023-css-1": {
      title: "Curso inicial de CSS3",
      description: "Aprende a crear páginas web sencillas con CSS3",
      image:
        "https://miro.medium.com/v2/resize:fit:336/1*nFj_gJtwus-ZVIwDE4oGrw.png",
      hours: "4",
      category: "css",
    },
    "2023-js-1": {
      title: "Curso inicial de JavaScript",
      description: "Aprende a crear páginas web con JavaScript",
      image:
        "https://onlinecoursesgalore.com/wp-content/uploads/2018/01/best-javascript-programming-courses-online.jpg",
      hours: "8",
      category: "js",
    },
    "2023-react-1": {
      title: "Curso inicial de React",
      description: "Aprende a crear páginas web con React",
      image: "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe",
      hours: "15",
      category: "react",
    },
  };

  return (
    <>
      <div className="form-control pb-8">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl text-slate-600">Cursos</h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-4">
          {Object.values(courses).map((course) => (
            <div
              key={course.title.trim()}
              className="card h-80 shadow-xl bg-primary-azulCeleste1 text-primary-Azul5"
            >
              <div
                className="h-96 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${course.image})` }}
              />
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
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl text-slate-600 py-10">Aportes</h2>
        <div className="card shadow-xl bg-slate-600">
          <div className="p-4">
            <h2 className="card-title pb-4">React</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet eligendi doloremque nemo quasi quo? Laudantium, neque, provident necessitatibus voluptatem laborum aliquid eaque nam ab itaque numquam vel ipsa iste?</p>
            <div className="card-actions justify-end">
              <button className="py-2 px-3 bg-slate-800 rounded-xl">Leer mas</button>
            </div>
          </div>
        </div>
        <div className="card shadow-xl bg-slate-600">
          <div className="p-4">
            <h2 className="card-title pb-4">React</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet eligendi doloremque nemo quasi quo? Laudantium, neque, provident necessitatibus voluptatem laborum aliquid eaque nam ab itaque numquam vel ipsa iste?</p>
            <div className="card-actions justify-end">
              <button className="py-2 px-3 bg-slate-800 rounded-xl">Leer mas</button>
            </div>
          </div>
        </div>
        <div className="card shadow-xl bg-slate-600">
          <div className="p-4">
            <h2 className="card-title pb-4">React</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet eligendi doloremque nemo quasi quo? Laudantium, neque, provident necessitatibus voluptatem laborum aliquid eaque nam ab itaque numquam vel ipsa iste?</p>
            <div className="card-actions justify-end">
              <button className="py-2 px-3 bg-slate-800 rounded-xl">Leer mas</button>
            </div>
          </div>
        </div>
        <div className="card shadow-xl bg-slate-600">
          <div className="p-4">
            <h2 className="card-title pb-4">React</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eveniet eligendi doloremque nemo quasi quo? Laudantium, neque, provident necessitatibus voluptatem laborum aliquid eaque nam ab itaque numquam vel ipsa iste?</p>
            <div className="card-actions justify-end">
              <button className="py-2 px-3 bg-slate-800 rounded-xl">Leer mas</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCourses;
