import React from "react";
import MainLayout from "../layout/MainLayout";
import Table from "../components/Table";
import StepProgress from "../components/home/stepProgress/StepProgress";
const Grades = () => {
  return (
    <div className="">
      <MainLayout props="Notas">
        {/* Componente para proceso */}
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
        <Table />
      </MainLayout>
    </div>
  );
};

export default Grades;
