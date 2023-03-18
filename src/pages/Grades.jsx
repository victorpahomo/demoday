import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import Table from "../components/Table";
import StepProgress from "../components/home/stepProgress/StepProgress";
import { getUserGradesData } from "../services/dataFirebaseService";
import { useDispatch, useSelector } from "react-redux";
const Grades = () => {
  const dispatch = useDispatch();
  // Loaders
  const authFetchStatus = useSelector((state) => state.auth.loading);//true loading, false succes
  const gradesFetchStatus = useSelector((state) => state.grade.loading);//idle, pending, fulfilled, rejected
  // Data
  const objGrades = useSelector((state) => state.grade?.userGrades)
  const userUid = useSelector((state) => state.auth.user?.uid)

  // Get user Grades data
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
                <section className="mb-5">
                  <h1 className="text-xl text-center">Tu progreso general</h1>
                  <StepProgress step={2} />
                </section>
                <div id="descriptionGrades" className="mb-5">
                  <p>
                    {" "}
                    Aquí podrás ver todas tus notas por etapa y proyectos, así como los promedios y asistencias.
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
