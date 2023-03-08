import React from 'react';

const Table = () => {
  const datos = {
    id: 1,
    grades: {
      fundamentos: {
        sprint1: 90,
        sprint2: 87,
        sprint3: 80,
      },
      profundizacion: {
        sprint1: 90,
        sprint2: 50,
        sprint3: 78,
      }
    },
    attendance: {
      sesision1: true,
      sesision2: true,
      sesision3: true,
      sesision4: true,
      sesision5: false,
      sesision6: true,
    }
  };

  // Calcular promedio de un objeto de notas
  const calcularPromedio = (notas) => {
    const promedio = Object.values(notas).reduce((total, nota) => total + nota, 0) / Object.keys(notas).length;
    return isNaN(promedio) ? 0 : promedio.toFixed(2);
  };
  // Calcular promedio de asistencia
  const calcularPromedioAsistencia = (asistencia) => {
    const totalSesiones = Object.keys(asistencia).length;
    const asistencias = Object.values(asistencia).filter(asistencia => asistencia === true).length;
    const promedio = (asistencias / totalSesiones) * 100;
    return isNaN(promedio) ? 0 : promedio.toFixed(2);
  };

  return (
    <div className="flex flex-col text-black">
      <div>
        <h2 className="text-center font-bold text-lg">Notas de Fundamentos</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Sprint</th>
              <th className="px-4 py-2">Nota</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(datos.grades.fundamentos).map(([sprint, nota]) => (
              <tr key={sprint}>
                <td className="border px-4 py-2">{sprint}</td>
                <td className="border px-4 py-2">{nota}</td>
              </tr>
            ))}
            <tr>
              <td className="border px-4 py-2 font-bold">Promedio</td>
              <td className="border px-4 py-2 font-bold">{calcularPromedio(datos.grades.fundamentos)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-center font-bold text-lg">Notas de Profundización</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Sprint</th>
              <th className="px-4 py-2">Nota</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(datos.grades.profundizacion).map(([sprint, nota]) => (
              <tr key={sprint}>
                <td className="border px-4 py-2">{sprint}</td>
                <td className="border px-4 py-2">{nota}</td>
              </tr>
            ))}
            <tr>
              <td className="border px-4 py-2 font-bold">Promedio</td>
              <td className="border px-4 py-2 font-bold">{calcularPromedio(datos.grades.profundizacion)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="text-center font-bold text-lg">Promedio de Asistencia</h2>
        <table className="w-full table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Sesión</th>
                    <th className="px-4 py-2">Asistencia</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(datos.attendance).map(([sesion, asistencia]) => (
                    <tr key={sesion}>
                        <td className="border px-4 py-2">{sesion}</td>
                        <td className="border px-4 py-2">{asistencia ? 'Asistió' : 'No asistió'}</td>
                    </tr>
                ))}
                <tr>
                    <td className="border px-4 py-2 font-bold">Promedio</td>
                    <td className="border px-4 py-2 font-bold">{calcularPromedioAsistencia(datos.attendance)}%</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default Table;
