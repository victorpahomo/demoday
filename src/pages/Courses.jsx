import MainLayout from "../layout/MainLayout";
import Searcher from "../components/courses/Searcher";

const Courses = () => {
  return (
    <div className="">
      <MainLayout props="Cursos">
        <Searcher />
        {/* {courseFetchStatus === "pending" || contributionsFetchStatus === "pending" ? //Loading 
          (
            <h1>Cargando...</h1>
          )
          :
          courseFetchStatus === "rejected" || contributionsFetchStatus === "rejected" ?//Error
            (<h1>Hubo un error</h1>)
            : //Success
            (
              <>

                  <Searcher />
                  <h2 className="font-bold text-2xl text-primary-AzulVerde3">Cursos</h2>
                  {courseFetchStatus === "fulfilled" && <ListCourses courses={objCourses} />}
                  <h2 className="font-bold text-2xl text-primary-AzulVerde3 py-4">Aportes</h2>
                  {contributionsFetchStatus === "fulfilled" && <ListContributions contributions={arrayContributions} />}

              </>
            )
        } */}
      </MainLayout>
    </div>
  );
};
export default Courses;
