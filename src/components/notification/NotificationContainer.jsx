import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { BellIcon, ViewAllIcon } from "../../assets";
import { NotificationCard } from "./";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUserLastNotification } from "../../services/dataFirebaseService";

const NotificationContainer = () => {
  const dispatch = useDispatch();
  const userUid = useSelector((state) => state.auth.user.uid);
  const groupStatus = useSelector((state) => state.group.loading);
  const userStatus = useSelector((state) => state.user.loading);
  const userLastNotification = useSelector(
    (state) => state.user.user?.last_notification
  );
  const notificationsSelector = useSelector(
    (state) => state.group.group?.notifications
  );
  const notificaciones = useMemo(
    () => notificationsSelector,
    [notificationsSelector]
  );
  /*   const [notificaciones, setNotificaciones] = useState(useSelector((state) => state.group.group?.notifications));
   */
  /* ----------------- CONTENT ---------------------- */
  let content;
  if (
    groupStatus === "pending" ||
    userStatus === "pending" ||
    userStatus === "idle"
  ) {
    content = (
      <div className="w-10 h-10 bg-gray-300 animate-[pulse_0.4s_ease-in-out_infinite] rounded-full"></div>
    );
  } else if (groupStatus === "fulfilled" && userStatus === "fulfilled") {
    let lastNotification = notificaciones?.reduce(function (prev, current) {
      return prev.date > current.date ? prev : current;
    });

    if (lastNotification.date > userLastNotification && userUid !== undefined) {
      const newLastNotification = lastNotification.date;
      dispatch(
        setUserLastNotification({ uid: userUid, date: newLastNotification })
      );
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } mt-2 max-w-md w-full bg-gray-200 drop-shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5"></div>
              <div className="ml-3 flex-1">
                <h2 className="text-base text-left font-semibold text-gray-900">
                  {lastNotification.title}
                </h2>
                <p className="text-left mt-1 text-sm text-gray-500">
                  {lastNotification.message}
                </p>
                <hr className="mt-1" />
                <div className="mt-1 flex justify-between text-xs">
                  <p>{lastNotification.author}</p>
                  <p>{lastNotification.date}</p>
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
    content = (
      <div
        id="dropdown_functionality"
        className="dropdown dropdown-end tooltip tooltip-bottom"
        data-tip="Notificaciones"
      >
        <Toaster />
        <label
          id="button"
          tabIndex={0}
          className="btn btn-ghost btn-circle btn-sm bg-slate-200 hover:bg-slate-300 indicator"
        >
          <span
            id="indicator"
            className="indicator-item text-white badge bg-red-500 border-none"
          >
            {notificaciones?.length}
          </span>
          <BellIcon className=" w-4 h-4 fill-black" />
        </label>
        <div
          id="dropdown_content"
          tabIndex={0}
          className="mt-3 p-2 drop-shadow-xl  menu menu-compact dropdown-content bg-base-100 rounded-box w-80"
        >
          <h2 id="dropdown_title" className="font-bold text-lef p-2">
            Notificaciones
          </h2>
          <hr />
          <div className="overflow-y-auto h-60">
            {notificaciones?.map((notification) => (
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
      </div>
    );
  } else if (groupStatus === "rejected" || userStatus === "rejected") {
    content = <h1>Error</h1>;
  }
  /* ------------------------------------------------ */

  return <>{content}</>;
};
export default NotificationContainer;
