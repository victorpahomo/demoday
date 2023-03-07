import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import timegrid from "@fullcalendar/timegrid";

const Calendar = () => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [events, setEvents] = useState([
        {
            title: "Evento 1",
            date: "2023-03-07",
        },
        {
            title: "Evento 2",
            date: "2023-03-07",
        },
    ]);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleDateClick = (arg) => {
        handleShow();
        console.log(showModal);
        console.log("SI");
        setDate(arg.date);

    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSave = () => {
        setEvents([...events, { title, date }]);
        setTitle("");
        setDate("");
        handleClose();
    };
    const handleEventClick = (eventInfo) => {
        console.log("Evento:", eventInfo.timeText);
        console.log("Evento:", eventInfo.event.title);
    };


    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timegrid]}
                locale={esLocale}
                height={400}
                dayCellContent={(arg) => (
                  <div className="custom-cell" style={{ height: "30px", width: "30px" }}>
                    {arg.dayNumberText}
                  </div>
                )}
                initialView="dayGridMonth"
                selectable={true}
                editable={true}
                selectMirror={true}
                events={events}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
/*         select={handleDateClick}
 */        headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
            />
 {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <svg
                      className="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Agregar evento
                    </h3>
                    <div className="mt-2">
                      <label
                        htmlFor="title"
                        className="block text-gray-700 font-bold mb-2"
                      >
                        Título
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">    
                <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleSave}
                    >
                    Guardar
                </button>
                <button

                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleClose}
                    >
                    Cancelar
                </button>
                </div>
            </div>
            </div>
        </div>
        )}
        
        </>
    );
};

export default Calendar;
