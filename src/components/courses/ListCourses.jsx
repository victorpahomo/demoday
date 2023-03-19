
const ListCourses = ({courses}) => {

  return (
    <>

      <div>
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