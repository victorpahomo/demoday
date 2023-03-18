import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowCurriculumCard from "../components/training/ShowCurriculumCard";
import ShowRecordingCard from "../components/training/ShowRecordingCard";
import MainLayout from "../layout/MainLayout";
import { getCurriculumData } from "../services/dataFirebaseService"
const Training = () => {
  const dispatch = useDispatch();
  // Loaders
  const curriculumFetchStatus = useSelector((state) => state.curriculum.loading);
  const groupFetchStatus = useSelector((state) => state.group.loading);
  // Data
  const objCurriculum = useSelector((state) => state.curriculum?.curriculum);
  const arrayRecordings = useSelector((state) => state.group.group?.recordings);
  const stepOfUser = useSelector((state) => state.group.group?.step);

  // Get curriculum data
  useEffect(() => {
    if (curriculumFetchStatus === "idle") {
      dispatch(getCurriculumData("frontend"));
    }
  }, [curriculumFetchStatus]);

  return (
    <MainLayout props="Formación">
      {curriculumFetchStatus === "pending" ?
        (<h1>Cargando...</h1>)
        :
        curriculumFetchStatus === "rejected" ?
          (<h1>Hubo un error</h1>)
          :
          (
            <div className="mx-auto">
              <div className="flex justify-between my-4">
                <h1 className="text-xl font-bold text-primary-AzulVerde3">
                  Ruta actual:
                  <span className="text-xl text-primary-AzulVerde2">
                    {stepOfUser == 1 ? "Fundamentos Web" : stepOfUser == 2 ? "Profundización Frontend" : "Empleabilidad"}
                  </span>
                </h1>
                <h1 className="text-xl font-bold text-primary-AzulVerde3">
                  Asistencia:
                  <span className="text-xl text-primary-AzulVerde2"> 20%.</span>
                </h1>
              </div>
              <p className="text-primary-azulCeleste5 mb-2">
                Link a la próxima clase:
                <a
                  className="hover:text-primary-AzulVerde4"
                  href="https://makaia-my.sharepoint.com/personal/mentoria2_bootcamp_makaia_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmentoria2%5Fbootcamp%5Fmakaia%5Forg%2FDocuments%2FFundamentos%20web%20frontend%202&ga=1"
                >
                  {" "}
                  pulsa aquí
                </a>
              </p>

              <div className="">
                <ul className="relative grid grid-cols-2 bg-slate-100">
                  <li className="">
                    <input
                      defaultChecked
                      id="Temas"
                      type="radio"
                      name="tab"
                      className="peer absolute w-0 h-0 invisible"
                    />
                    <label
                      htmlFor="Temas"
                      className="block text-center  text-slate-600 font-medium peer-checked:bg-slate-300 py-4 cursor-pointer"
                    >
                      Temas
                    </label>
                    <div className="max-h-screen p-8 w-full overflow-auto absolute hidden peer-checked:block left-0 bg-slate-100"
                      style={{ height: "calc(100vh - 18rem)" }}>
                      {curriculumFetchStatus === "fulfilled" && <ShowCurriculumCard data={objCurriculum.fundamentos} />}
                    </div>
                  </li>
                  <li className="flex-grow h-fit">
                    <input
                      id="Grabaciones"
                      type="radio"
                      name="tab"
                      className="peer absolute w-0 h-0 invisible"
                    />
                    <label
                      htmlFor="Grabaciones"
                      className="block text-center text-slate-600 font-medium peer-checked:bg-slate-300  py-4 cursor-pointer"
                    >
                      Grabaciones
                    </label>
                    <div className="max-h-screen p-8 w-full overflow-auto absolute hidden peer-checked:block left-0 bg-slate-100"
                      style={{ height: "calc(100vh - 18rem)" }}>

                      { }
                      <ShowRecordingCard data={arrayRecordings} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )
      }

    </MainLayout>
  );
};

export default Training;
