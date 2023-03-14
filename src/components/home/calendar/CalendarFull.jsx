import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import timegrid from "@fullcalendar/timegrid";
import AppModal from "../../common/AppModal";

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
          <div className="custom-cell">{arg.dayNumberText}</div>
        )}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        selectMirror={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        /*         select={handleDateClick}
         */ headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
      {showModal && (
        <AppModal
          activator={
            <>
            <h1>hollaaa</h1> //lo que presiono pa que abra el modal
            </>
          }
        >
          willlllllllllll //lo que renderiza el modal (contenido)
        </AppModal>
      )}
    </>
  );
};

export default Calendar;
