import React, { useState, useEffect } from "react";
import { BellIcon, ViewAllIcon } from "../assets";
import Notification from "./Notification";

let initialState = [
  { id: 1, message: "Notificación 1" },
  { id: 2, message: "Notificación 2" },
  { id: 3, message: "Notificación 3" },
  { id: 4, message: "Notificación 4" },
  { id: 5, message: "Notificación 5" },
  { id: 6, message: "Notificación 6" },
  { id: 7, message: "Notificación 7" },
  { id: 8, message: "Notificación 8" },
  { id: 9, message: "Notificación 9" },
  { id: 10, message: "Notificación 10" },
];

const ButtonNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const updatedNotifications = [
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
        id: 3,
        title: "Title",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "2023-03-05 12:00:00",
        author: "JulioJavier",
        rol: "professor",
      },
      {
        id: 4,
        title: "Title",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "2023-03-05 12:00:00",
        author: "JulioJavier",
        rol: "professor",
      },
    ];

    const interval = setInterval(() => {
      // Aquí se puede hacer una llamada a una API para obtener las notificaciones actualizadas
      setNotifications(updatedNotifications);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="dropdown dropdown-end tooltip tooltip-bottom"
      data-tip="Notificaciones"
    >
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle btn-sm bg-slate-200 hover:bg-slate-300 indicator"
      >
        <span className="indicator-item text-white badge bg-red-500 border-none">
          {notifications.length}
        </span>
        <BellIcon className=" w-4 h-4 fill-black" />
      </label>
      <div
        tabIndex={0}
        className="mt-3 p-2 drop-shadow-xl  menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <h2 className="font-bold text-lef p-2">Notificaciones</h2>
        <hr />
        <div className="overflow-y-auto h-60">
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              title={notification.title}
              message={notification.message}
              author={notification.author}
              date={notification.date}
              rol={notification.rol}
            />
          ))}
          {!notifications.length && (
            <div className="px-4 py-2">No hay notificaciones</div>
          )}
        </div>
        <a
          href="#"
          className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >
          <div className="inline-flex items-center ">
            <ViewAllIcon className="w-4 h-4 mr-2 fill-gray-500 dark:fill-gray-400" />
            Ver todos
          </div>
        </a>
      </div>
    </div>
  );
};
export default ButtonNotification;
