import React from "react";
import MainLayout from "../layout/MainLayout";

const noticias = [
  {
    id: 1,
    title: "Titular de la noticia 1",
    role: "student",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 2,
    role: "student",
    title: "Titular de la noticia 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 3,
    role: "student",
    title: "Titular de la noticia 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 4,
    role: "professor",
    title: "Titular de la noticia 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 5,
    role: "professor",
    title: "Titular de la noticia 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 6,
    role: "student",
    title: "Titular de la noticia 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 7,
    role: "admin",
    title: "Titular de la noticia 7",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 8,
    role: "professor",
    title: "Titular de la noticia 8",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 9,
    role: "student",
    title: "Titular de la noticia 9",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 10,
    role: "student",
    title: "Titular de la noticia 10",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
];

const Notifications = () => {
  return (
    <div>
      <MainLayout>
        <h2 className="font-bold font ">Notificaciones</h2>
        <div className="h-96 w-5/6 bg-white rounded-lg shadow-md overflow-x-auto p-2 ">
          {noticias.map((noticia, index) => (
            <div key={index} className=" mt-1">
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
              <span
                className={
                  (noticia.role === "student" &&
                    "flex bg-blue-100 text-blue-400 rounded-r-xl w-auto text-xs items-center justify-start pr-1 pl-1") ||
                  (noticia.role === "professor" &&
                    "flex bg-yellow-100 text-yellow-500 rounded-r-xl w-auto text-xs items-center justify-start pr-1 pl-1") ||
                  (noticia.role === "admin" &&
                    "flex bg-red-100 text-red-800 rounded-r-xl w-auto text-xs items-center justify-start pr-1 pl-1")
                }
              >
                <p className="">
                  {(noticia.role === "student" && "Estudiante") ||
                    (noticia.role === "professor" && "Profesor") ||
                    (noticia.role === "admin" && "ADMIN")}
                </p>
              </span>
              <div className="collapse">
                <input type="checkbox" />
                <h2 className="collapse-title text-xl font-medium">
                  {noticia.title}
                </h2>

                <div className="collapse-content">
                  <p>{noticia.description}</p>
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
      </MainLayout>
    </div>
  );
};

export default Notifications;
