import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BellIcon, ViewAllIcon } from "../../assets";
import { NotificationCard } from "./"
import { getGroupNotificationsData } from "../../services/dataFirebaseService"
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
let initialState = [
  {
    id: 1,
    title: "Title",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2023-03-05 12:00:00",
    author: "JulioJavier",
  },
  {
    id: 2,
    title: "Title",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2023-03-05 12:00:00",
    author: "JulioJavier",
  },
  {
    id: 654998893580,
    title: "No hay clasee..!!",
    message: "muchas gracias por su comprensión, mañana no hay clase por ",
    date: "2023-03-05 12:00:00",
    author: "JulioJavier",
  },
];
const NotificationContainer = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    const handleGetNotifications = async () => {
      const data = await getGroupNotificationsData("frontend-1", dispatch);
      setLoading(false)
    };
    handleGetNotifications();
  }, [])

  const [notificaciones, setNotificaciones] = useState(useSelector((state) => state.data.groupNotifications));
   const difference = notificaciones?.filter(
    (item) => !notificaciones.some((n) => n.id === item.id)
  );
    /* lastNotification !== useSelector((state) => state.data.user.lastNotification){
      mostrarAlerta()
      setLastNotifcation(data.user.lastNotificationUSer ==  lastNotification)
    } */


  if (difference?.length) {
    setNotificaciones([...notificaciones, ...difference]);
    // alert("Hay nuevas notificaciones");
    toast.custom((t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"
          } mt-2 max-w-md w-full bg-gray-200 drop-shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <h2 className="text-base text-left font-semibold text-gray-900">
                {difference[0].title}
              </h2>
              <p className="text-left mt-1 text-sm text-gray-500">
                {difference[0].message}
              </p>
              <hr className="mt-1" />
              <div className="mt-1 flex justify-between text-xs">
                <p>{difference[0].author}</p>
                <p>{difference[0].date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  } 

  return (
    <>
      {!loading? <div
        className="dropdown dropdown-end tooltip tooltip-bottom"
        data-tip="Notificaciones"
      >
        <Toaster />
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle btn-sm bg-slate-200 hover:bg-slate-300 indicator"
        >
          <span className="indicator-item text-white badge bg-red-500 border-none">
            {notificaciones.length}
          </span>
          <BellIcon className=" w-4 h-4 fill-black" />
        </label>
        <div
          tabIndex={0}
          className="mt-3 p-2 drop-shadow-xl  menu menu-compact dropdown-content bg-base-100 rounded-box w-80"
        >
          <h2 className="font-bold text-lef p-2">Notificaciones</h2>
          <hr />
          <div className="overflow-y-auto h-60">
            {notificaciones.map((notification) => (
              <NotificationCard
                key={notification.id}
                title={notification.title}
                message={notification.message}
                author={notification.author}
                date={notification.date}
              />
            ))}
            {!notificaciones?.length && (
              <div className="px-4 py-2">No hay notificaciones</div>
            )}
          </div>
          <a
            href="#"
            className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            <Link to="/notifications" className="inline-flex items-center ">
              <ViewAllIcon className="w-4 h-4 mr-2 fill-gray-500 dark:fill-gray-400" />
              Ver todos
            </Link>
          </a>
        </div>
      </div> : <h1>cargando</h1>}
    </>
  );
};
export default NotificationContainer;
