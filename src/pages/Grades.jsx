import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Table from "../components/grades/Table";
import StepProgress from "../components/home/stepProgress/StepProgress";
import { getUserGradesData, getUserData } from "../services/dataFirebaseService";
import { useDispatch, useSelector } from "react-redux";
const Grades = () => {
    // This component needs Grades and User data
  const dispatch = useDispatch();
  // Loaders
  const authFetchStatus = useSelector((state) => state.auth.loading);//true loading, false succes
  const gradesFetchStatus = useSelector((state) => state.grade.loading);//idle, pending, fulfilled, rejected
  const userFetchStatus = useSelector((state) => state.group.loading); //idle, pending, fulfilled, rejected
  // Data
  const objGrades = useSelector((state) => state.grade?.userGrades)
  const userUid = useSelector((state) => state.auth.user?.uid)

  // Get user data only on page reload
  useEffect(() => {
    if (userFetchStatus === "idle") {
      dispatch(getUserData(userUid));
    }
  }, [userFetchStatus]);
  // Get user Grades data always on page load
  useEffect(() => {
    if (!authFetchStatus) {
      if (gradesFetchStatus === "idle") {
        dispatch(getUserGradesData(userUid));
      }
    }
  }, [gradesFetchStatus])

  return (
    <div className="">
      <MainLayout props="Notas">
        {authFetchStatus === false && gradesFetchStatus === "pending" ? //Loading
          (
            <h1>Cargando...</h1>
          )
          :
          gradesFetchStatus === "rejected" ?//Error
            (<h1>Hubo un error</h1>)
            : //Success
            (
              <>
                <section className="mb-5 items-center">
                  <h1 className="text-base text-start text-primary-Azul5 w-1/4">Tu progreso general :</h1>
                  <StepProgress step={2} />
                </section>
                <div id="descriptionGrades" className="mb-5 text-primary-Azul5">
                  <p>
                    {" "}
                    Aquí podrás ver todas tus notas por etapa y proyectos, así como los promedios y asistencias :
                  </p>
                </div>
                {gradesFetchStatus === "fulfilled" && <Table data={objGrades} /> } 
              </>
            )
        }
      </MainLayout>
    </div>
  );
};

export default Grades;
