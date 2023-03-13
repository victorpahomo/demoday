import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import timegrid from "@fullcalendar/timegrid";
import rrulePlugin from '@fullcalendar/rrule';
import ModalCalendar from "./ModalCalendar";
import './index.css';
const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [events, setEvents] = useState([
    {
      title: "Evento 1",
      start: new Date('2023-03-12T14:00:00'),
      end: new Date('2023-03-15T18:06:00'),
      backgroundColor: '#e0efed',
      borderColor: '#acdaeb',
      textColor: '#7e7e7f',
    },

  ]);
  const recurringEvent = {
    title: 'Clase diaria',
    backgroundColor: '#e0efed',
    borderColor: '#acdaeb',
    textColor: '#7e7e7f',
    rrule: {
      freq: 'weekly', // Repetir semanalmente
      interval: 1, // Repetir cada 1 semana
      byweekday: ['mo', 'tu', 'we', 'th', 'fr'], // Repetir de lunes a viernes
      dtstart: new Date('2023-03-12T14:00:00'), // Comenzar el 15 de marzo de 2023
      until: new Date('2023-06-30T00:00:00'), // Hasta el 30 de junio de 2023
      /* byhour:14, */
    },
/*     exdate: ['2023-03-12T10:00:00'],
 */     extendedProps: {
      start: new Date('2023-03-15T10:00:00'),
      end: new Date('2023-03-15T11:00:00'),
      description: 'Reunión semanal del equipo de ventas'
    },
  };
  const eventSources = [
    {
      events: [recurringEvent]
    }
  ];

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
    console.log("Evento:", eventInfo.event.title);
    console.log("Hora:", eventInfo.event.extendedProps.start.toLocaleString());
    console.log("Hora:", eventInfo.event.extendedProps.end.toLocaleTimeString());
    console.log("Evento:", eventInfo.event.extendedProps.description);
  };


  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timegrid, rrulePlugin]}
        locale={esLocale}
        height={"auto"}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        selectMirror={true}
        events={events}
        eventSources={eventSources}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
      {showModal && <ModalCalendar title={title} handleTitleChange={handleTitleChange} handleSave={handleSave} handleClose={handleClose} />}

    </>
  );
};

export default Calendar;
