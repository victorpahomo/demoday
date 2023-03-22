import { useEffect, useState } from "react";
import ListCourses from "./ListCourses";
import ListContributions from "./ListContributions";
import {
  getCoursesData,
  getContributionsData,
} from "../../services/dataFirebaseService";
import { useDispatch, useSelector } from "react-redux";

const Searcher = () => {
  // This component needs Contributions and Courses data
  const dispatch = useDispatch();
  // Loaders
  const courseFetchStatus = useSelector((state) => state.course.loading); //idle, pending, fulfilled, rejected
  const contributionsFetchStatus = useSelector(
    (state) => state.contribution.loading
  ); //idle, pending, fulfilled, rejected
  // Data
  const objCourses = useSelector((state) => state.course?.allCourses);
  const arrayContributions = useSelector(
    (state) => state.contribution?.allContributions
  );

  const [textTosearch, setTextToSearch] = useState("");

  const handleSearch = (e) => {
    setTextToSearch(e.target.value);
  };

  function searchByTitle(array) {
    // Utilizamos la función filter para recorrer el array de objetos
    // y devolver un nuevo array con los objetos que coinciden con el título buscado
    const resultArray = array.filter((obj) => obj.title.includes(textTosearch));

    return resultArray;
  }

  // Get courses data always on page load
  useEffect(() => {
    if (courseFetchStatus === "idle") {
      dispatch(getCoursesData());
    }
  }, [courseFetchStatus]);
  // Get contributions data always on page load
  useEffect(() => {
    if (contributionsFetchStatus === "idle") {
      dispatch(getContributionsData());
    }
  }, [contributionsFetchStatus]);


  return (
    <>
      <div className="form-control pb-8">
        <div className="input-group flex justify-center">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search…"
            className="input input-bordered w-2/3 bg-slate-200 text-primary-azulCeleste5 focus:outline-none"
          />
          <button className="btn btn-square bg-gray-400 border-none text-white hover:bg-gray-500">
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
      {courseFetchStatus === "pending" ||
      contributionsFetchStatus === "pending" ? ( //Loading
        <h1>Cargando...</h1>
      ) : courseFetchStatus === "rejected" ||
        contributionsFetchStatus === "rejected" ? ( //Error
        <h1>Hubo un error</h1>
      ) : (
        //Success
        <>
          <Searcher />
          <h2 className="font-bold text-2xl text-primary-AzulVerde3">Cursos</h2>
          {courseFetchStatus === "fulfilled" && (
            <ListCourses
              courses={
                textTosearch === ""
                  ? objCourses
                  : () => searchByTitle(objCourses)
              }
            />
          )}
          <h2 className="font-bold text-2xl text-primary-AzulVerde3 py-4">
            Aportes
          </h2>
          {contributionsFetchStatus === "fulfilled" && (
            <ListContributions
              contributions={
                textTosearch === ""
                  ? arrayContributions
                  : () => searchByTitle(arrayContributions)
              }
            />
          )}
        </>
      )}
    </>
  );
};

export default Searcher;
