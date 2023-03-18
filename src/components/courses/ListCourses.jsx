
const ListCourses = ({courses}) => {

  return (
    <>
      <div className="form-control pb-8">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full bg-primary-AzulVerde4 text-white"
          />
          <button className="btn btn-square bg-primary-AzulVerde4 text-white">
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
              className=" h-80 shadow-xl bg-primary-azulCeleste1 text-primary-Azul5"
            >
              <div
                className="h-32 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className=" px-4">
                <h2 className="card-title">{course.title}</h2>
                <div className="flex justify-around">
                  <div className="badge badge-outline">{course.category}</div>
                  <div className="badge badge-secondary">NEW</div>
                </div>
                <p className="text-sm">{course.description}</p>
                <div className="flex justify-center">
                  <button className="btn mt-3 btn-primary btn-sm bg-primary-AzulVerde4 border-none hover:bg-primary-Azul5">
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
