import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const NotificationToast = ({lastNotification}) => {
    return (
        <>
            {
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
                                        {lastNotification?.title}
                                    </h2>
                                    <p className="text-left mt-1 text-sm text-gray-500">
                                        {lastNotification?.message}
                                    </p>
                                    <hr className="mt-1" />
                                    <div className="mt-1 flex justify-between text-xs">
                                        <p>{lastNotification?.author}</p>
                                        <p>{lastNotification?.date}</p>
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
                )
                )
            }
        </>
    )
}

export default NotificationToast;