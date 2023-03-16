import React from "react";
import MainLayout from "../layout/MainLayout";

const noticias = [
  {
    id: 1,
    title: "Title",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2023-03-05 12:00:00",
    author: "JulioJavier",
    rol: "admin",
  },
  {
    id: 2,
    title: "Title",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2023-03-05 12:00:00",
    author: "JulioJavier",
    rol: "student",
  },
  {
    id: 65499889380,
    title: "No hay clasee..!!",
    message: "muchas gracias por su comprensión, mañana no hay clase por ",
    date: "2023-03-05 12:00:00",
    author: "JulioJavier",
    rol: "professor",
  },
];

const Notifications = () => {
  return (
    <div>
      <MainLayout>
        <div className="flex flex-col items-center">
          <div className="flex justify-start items-start w-1/2">
            <h2 className="font-bold text-xl ">Notificaciones</h2>
          </div>
          <div className="h-96 w-1/2 bg-slate-200 rounded-lg shadow-md overflow-x-auto p-2 ">
            {noticias.map((noticia, index) => (
              <div key={index} className=" mt-1 rounded-lg hover:bg-slate-100">
                <div
                  className={
                    (noticia.role === "student" &&
                      "w-3 h-auto rounded-b-lg bg-blue-100") ||
                    (noticia.role === "professor" &&
                      "w-3 h-auto rounded-b-lg bg-yellow-100") ||
                    (noticia.role === "admin" &&
                      "w-3 h-auto rounded-b-lg bg-red-100")
                  }
                ></div>
                <div>
                  <div className="collapse collapse-arrow">
                    <input type="checkbox" />
                    <h2 className="collapse-title text-xl font-medium">
                      {noticia.title}
                    </h2>
                    <div className="collapse-content">
                      <p>{noticia.message}</p>
                    </div>
                  </div>
                </div>
              </div>

              // <div className="flex items-center p-1 bg-slate-10 gap-1">
              //   <div
              //     className={
              //       (noticia.role === "student" &&
              //         "w-3 h-28 rounded-full bg-blue-200") ||
              //       (noticia.role === "professor" &&
              //         "w-3 h-28 rounded-full bg-yellow-500") ||
              //       (noticia.role === "admin" &&
              //         "w-3 h-28 rounded-full bg-red-800")
              //     }
              //   ></div>
              //   <div className="flex flex-col">
              //     <div className="flex gap-2">
              //       <span
              //         className={
              //           (noticia.role === "student" &&
              //             "flex bg-blue-100 text-blue-400 rounded-lg w-auto text-xs items-center justify-center pr-1 pl-1") ||
              //           (noticia.role === "professor" &&
              //             "flex bg-yellow-100 text-yellow-500 rounded-lg w-auto text-xs items-center justify-center pr-1 pl-1") ||
              //           (noticia.role === "admin" &&
              //             "flex bg-red-100 text-red-800 rounded-lg w-auto text-xs items-center justify-center pr-1 pl-1")
              //         }
              //       >
              //         <p>
              //           {(noticia.role === "student" && "Estudiante") ||
              //             (noticia.role === "professor" && "Profesor") ||
              //             (noticia.role === "admin" && "ADMIN")}
              //         </p>
              //       </span>
              //       <h2
              //         href="#"
              //         className={
              //           (noticia.role === "student" &&
              //             "text-blue-500 hover:text-blue-700 font-semibold") ||
              //           (noticia.role === "professor" &&
              //             "text-yellow-500 hover:text-blue-700 font-semibold") ||
              //           (noticia.role === "admin" && "text-red-800 font-semibold")
              //         }
              //       >
              //         {noticia.title}
              //       </h2>
              //     </div>
              //     <p className="text-gray-500 text-sm p-2">
              //       {" "}
              //       {noticia.description}{" "}
              //     </p>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Notifications;
