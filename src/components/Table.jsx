import React from "react";

const Table = () => {
  const datos = {
    "fundamentos": {
      "grades": [
        {
          "title": "Sprint 1",
          "grade": 55,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Sprint 2",
          "grade": 90,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Sprint 3",
          "grade": 80,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Sprint 4",
          "grade": 55,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Workshop 1",
          "grade": 90,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Workshop 2",
          "grade": 80,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Workshop 3",
          "grade": 90,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        }
      ],
      "attendance": {
        "sesion1": true,
        "sesion2": false,
        "sesion3": true,
        "sesion4": true,
        "sesion5": true,
        "sesion6": true,
        "sesion7": true,
        "sesion8": true,
        "sesion9": false,
        "sesion10": true,
        "sesion11": true,
        "sesion12": true,
        "sesion13": true,
        "sesion14": false,
        "sesion15": true
      }
    },
    "profundizacion": {
      "grades": [
        {
          "title": "Sprint 1",
          "grade": -1,
          "state": "delivered",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Sprint 2",
          "grade": 0,
          "state": "undelivered",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Sprint 3",
          "grade": 0,
          "state": "undelivered",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Sprint 4",
          "grade": 90,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Workshop 1",
          "grade": 95,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Workshop 2",
          "grade": 90,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        },
        {
          "title": "Workshop 3",
          "grade": 95,
          "state": "graded",
          "anotation": [
            {
              "author": "Profesor",
              "date": "2018-10-01",
              "anotation": "Muy bien"
            }
          ]
        }
      ],
      "attendance": {
        "sesion1": true,
        "sesion2": false,
        "sesion3": true,
        "sesion4": true,
        "sesion5": true,
        "sesion6": true,
        "sesion7": true,
        "sesion8": true,
        "sesion9": false,
        "sesion10": true,
        "sesion11": true,
        "sesion12": true,
        "sesion13": true,
        "sesion14": false,
        "sesion15": true
      }
    }
  };

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
        <div className="_primeraTabla shadow-xl">
          <h2 className="h-8  text-center font-bold text-lg bg-primary-AzulVerde3 text-white rounded-t-lg shadow-lg">
            Notas de Fundamentos
          </h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Sprint</th>
                <th className="px-4 py-2">Nota</th>
              </tr>
            </thead>
            <tbody>
              {datos.fundamentos.grades.map(
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
                  {calcularPromedio(datos.fundamentos.grades)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="_segundaTabla shadow-xl">
          <h2 className="h-8  text-center font-bold text-lg bg-primary-AzulVerde3 text-white rounded-t-lg shadow-lg">
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
              {datos.profundizacion.grades.map(
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
                  {calcularPromedio(datos.profundizacion.grades)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="_terceraTabla shadow-xl md:col-span-2">
          <h2 className="h-8  text-center font-bold text-lg bg-primary-AzulVerde3 text-white rounded-t-lg shadow-lg">
            Asistencia
          </h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Sesión</th>
                <th className="px-4 py-2">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(datos.fundamentos.attendance).map(([sesion, asistencia]) => (
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
                  {calcularPromedioAsistencia(datos.fundamentos.attendance)}%
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
