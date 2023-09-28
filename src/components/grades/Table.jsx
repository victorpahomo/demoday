import React from "react";

const Table = ({ data }) => {


  // Calcular promedio de un objeto de notas
  const calcularPromedio = (notas) => {
    let cont = 0;
    const promedio =
      notas.reduce((total, grade) => {
        if (grade.grade !== -1) {
          cont++;
          return total + grade.grade;
        } else {
          return total;
        }
      }, 0) / cont;
    return isNaN(promedio) ? 0 : promedio.toFixed(2);
  };
  // Calcular promedio de asistencia
  const calcularPromedioAsistencia = (asistencia) => {
    const totalSesiones = Object.keys(asistencia).length;
    const asistencias = Object.values(asistencia).filter(
      (asistencia) => asistencia === true
    ).length;
    const promedio = (asistencias / totalSesiones) * 100;
    return isNaN(promedio) ? 0 : promedio.toFixed(2);
  };

  return (
    <>

      <div className="grid grid-cols-2 text-black gap-5">
        {/* Tabla de Notas de Fundamentos */}
        <div className="_primeraTabla shadow-md">
          <h2 className="h-8  text-center font-bold text-lg bg-gray-300 text-primary-azulCeleste5 rounded-t-md">
            Notas de Fundamentos
          </h2>
          {/* Cabecera de la tabla */}
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Sprint</th>
                <th className="px-4 py-2">Nota</th>
              </tr>
            </thead>
            {/* Cuerpo de la tabla - Muestra las notas y el promedio */}
            <tbody>
              {data.fundamentos.grades.map(
                (grade) => (
                  <tr key={grade.title}>
                    <td className="border px-4 py-2">{grade.title}</td>
                    <td className="border px-4 py-2">{grade.grade === -1 ? grade.state : grade.grade}</td>
                  </tr>
                )
              )}
              <tr>
                <td className="border px-4 py-2 font-bold">Promedio</td>
                <td className="border px-4 py-2 font-bold">
                  {calcularPromedio(data.fundamentos.grades)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="_segundaTabla shadow-md">
          <h2 className="h-8  text-center font-bold text-lg bg-gray-300 text-primary-azulCeleste5 rounded-t-md">
            Notas de Profundización
          </h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Sprint</th>
                <th className="px-4 py-2">Nota</th>
              </tr>
            </thead>
            <tbody>
              {data.profundizacion.grades.map(
                (grade) => (
                  <tr key={grade.title}>
                    <td className="border px-4 py-2">{grade.title}</td>
                    <td className="border px-4 py-2">{grade.grade === -1 ? grade.state : grade.grade}</td>
                  </tr>
                )
              )}
              <tr>
                <td className="border px-4 py-2 font-bold">Promedio</td>
                <td className="border px-4 py-2 font-bold">
                  {calcularPromedio(data.profundizacion.grades)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="_terceraTabla shadow-md">
          <h2 className="h-8  text-center font-bold text-lg bg-gray-300 text-primary-azulCeleste5 rounded-t-md">
            Asistencia Fundamentos
          </h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Sesión</th>
                <th className="px-4 py-2">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.fundamentos.attendance).map(([sesion, asistencia]) => (
                <tr key={sesion}>
                  <td className="border px-4 py-2">{sesion}</td>
                  <td className="border px-4 py-2">
                    {asistencia ? "Asistió" : "No asistió"}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2 font-bold">Promedio</td>
                <td className="border px-4 py-2 font-bold">
                  {calcularPromedioAsistencia(data.fundamentos.attendance)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="_cuartaTabla shadow-md ">
          <h2 className="h-8  text-center font-bold text-lg bg-gray-300 text-primary-azulCeleste5 rounded-t-md">
            Asistencia Profundización
          </h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Sesión</th>
                <th className="px-4 py-2">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.profundizacion.attendance).map(([sesion, asistencia]) => (
                <tr key={sesion}>
                  <td className="border px-4 py-2">{sesion}</td>
                  <td className="border px-4 py-2">
                    {asistencia ? "Asistió" : "No asistió"}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2 font-bold">Promedio</td>
                <td className="border px-4 py-2 font-bold">
                  {calcularPromedioAsistencia(data.profundizacion.attendance)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
