import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { BellIcon, ViewAllIcon } from "../../assets";
import { NotificationCard } from "./";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, setUserLastNotification } from "../../services/dataFirebaseService";
import NotificationToast from "./NotificationToast";
import { Toaster } from "react-hot-toast";

const NotificationContainer = () => {
  // This component needs Group and User data
  const dispatch = useDispatch();
  // Loaders
  const groupFetchStatus = useSelector((state) => state.group.loading);//idle, pending, fulfilled, rejected
  const userFetchStatus = useSelector((state) => state.user.loading);//idle, pending, fulfilled, rejected
  // Data
  const userUid = useSelector((state) => state.auth.user?.uid);
  const userLastNotification = useSelector(
    (state) => state.user.user?.last_notification
  );
  const notificationsSelector = useSelector(
    (state) => state.group.group?.notifications
  );
  const arrayNotifications = useMemo(
    () => notificationsSelector,
    [notificationsSelector]
  );
  const [showToast, setShowToast] = useState(false);
  const [lastNotification, setLastNotification] = useState(null);

  // Get user data only on page reload
  useEffect(() => {
    if (userFetchStatus === "idle") {
      dispatch(getUserData(userUid));
    }
  }, [userFetchStatus]);
  /* ----------------- Toast ---------------------- */
  useEffect(() => {
    if (arrayNotifications?.length > 0) {
      setLastNotification(arrayNotifications?.reduce(function (
        prev,
        current
      ) {
        return prev.date > current.date ? prev : current;
      }));


      if (
        lastNotification?.date > userLastNotification &&
        userUid !== undefined
      ) {
        const newLastNotification = lastNotification.date;
        /*        dispatch(
                 setUserLastNotification({ uid: userUid, date: newLastNotification })
               ); */
        setShowToast(true);
      }
    }
  }, []);

  return (
    <>
      {/* <Toaster />
 */}
      <div
        id="dropdown_functionality"
        className="dropdown dropdown-end tooltip tooltip-bottom"
        data-tip="Notificaciones"
      >
        <label
          id="button"
          tabIndex={0}
          className="btn btn-ghost btn-circle btn-sm bg-slate-200 hover:bg-slate-300 indicator"
        >
          {arrayNotifications?.length > 0 && (
            <span /* Numer notifications Circle */
              id="indicator"
              className="indicator-item text-white badge bg-red-500 border-none"
            >
              {arrayNotifications?.length}
            </span>
          )}

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

          <div id="insideNotificationBody" className="overflow-y-auto h-60">
            {groupFetchStatus === "pending" || userFetchStatus === "pending" ?
              (
                <div className="w-10 h-10 bg-gray-300 animate-[pulse_0.4s_ease-in-out_infinite] rounded-full"></div>
              )
              :
              groupFetchStatus === "rejected" && userFetchStatus === "rejected" ?
                (<h1>Hubo un error</h1>)
                :
                (
                  <>
                    {/*   {showToast && (
                      console.log(showToast),
                      <NotificationToast lastNotification={lastNotification} />
                    )} */}
                    {arrayNotifications?.map((notification) => (
                      <NotificationCard
                        key={notification.id}
                        title={notification.title}
                        message={notification.message}
                        author={notification.author}
                        date={notification.date}
                      />
                    ))}
                    {!arrayNotifications?.length && (
                      <div className="px-4 py-2">No hay notificaciones</div>
                    )}
                  </>
                )
            }
          </div>
          <div
            href="#"
            className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            <Link to="/notifications" className="inline-flex items-center ">
              <ViewAllIcon className="w-4 h-4 mr-2 fill-gray-500 dark:fill-gray-400" />
              Ver todos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotificationContainer;
