import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import timegrid from "@fullcalendar/timegrid";
import rrulePlugin from "@fullcalendar/rrule";
import ModalCalendar from "./ModalCalendar";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { SkeletonCalendar } from "../../skeletonLoaders";

const Calendar = () => {
  const timeZone = 'America/Bogota';
  const dispatch = useDispatch();

  // Loaders
  const groupFetchStatus = useSelector((state) => state.group.loading);

  // Data
  const arrayRecurringEvent = useSelector((state) => state.group.group?.recurring_todo);

  // Calendar
  const [editModal, setEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dateSelected, setDateSelected] = useState("");
  const [eventSelected, setEventSelected] = useState("");
  // El siguiente estado servirá para fusionar los eventos dinamicos con los de la base de datos
  const [eventSources, setEventSources] = useState([]);

  // Eventos dinamicos
  const [events, setEvents] = useState([
    {
      title: "DemoDay",
      date: new Date(2023, 2, 22),
      start: "2023-03-22T14:00:00",
    }
  ]);

  const handleClose = () => {
    setShowModal(false);
    setEditModal(false);
  };

  const handleShow = () => setShowModal(true);

  const handleEdit = () => setEditModal(true);

  const handleDateClick = (daySelected) => {
    handleShow();
    setDateSelected(daySelected.date);
  };

  const handleSave = (title, hour, description) => {
    hour = hour -5;
    const dateSelectedFormat = new Date(dateSelected);
    console.log("FECHA", dateSelectedFormat);

    // crear un nuevo objeto Date con la hora actualizada
    const dateAndHour = new Date(dateSelectedFormat.setHours(hour));
    console.log("FECHA", dateAndHour);

    // obtener la fecha y hora en formato ISOString
    const newDate = dateAndHour.toISOString();
    console.log("FECHA FORMATO ISO", newDate);

    /*  
    console.log("FECHA FORMATO",newDate); */
    const newEvent = {
      title,
      date: dateSelected,
      start: newDate,
    };
    setEvents([...events, newEvent]);
    setDateSelected("");
    handleClose();
  };

  const handleEventClick = (eventInfo) => {
    handleEdit();
    setEventSelected(eventInfo.event);
  };

  useEffect(() => {
    if (groupFetchStatus === "fulfilled") {
      const existingEvents = arrayRecurringEvent.map((event) => ({
        ...event,
        startTime: new Date(Date.parse(event.rrule.dtstart)),
        endTime: new Date(Date.parse(event.rrule.until)),
      }));
      const allEvents = [...existingEvents, ...events];
      setEventSources([
        {
          events: allEvents,
          color: "green",
          textColor: "white",
        },
      ]);
    }
  }, [groupFetchStatus, arrayRecurringEvent, events]);
  /* ------------------------------------------------ */

  return (
    <>
      {groupFetchStatus === "pending" ?//Loading
        (
          <SkeletonCalendar />
        )
        :
        groupFetchStatus === "rejected" ?//Error
          (<h1>Hubo un error</h1>)
          : //Success
          (
            <>
              <FullCalendar
                timeZone={timeZone}
                plugins={[dayGridPlugin, interactionPlugin, timegrid, rrulePlugin]}
                locale={esLocale}
                height={"auto"}
                initialView="dayGridMonth"
                selectable={true}
                editable={true}
                selectMirror={true}
/*                 events={events}
 */                eventSources={eventSources}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
              />

              {editModal && <ModalCalendar edit={true} event={eventSelected} handleSave={handleSave} handleClose={handleClose} />}
              {showModal && <ModalCalendar edit={false} handleSave={handleSave} handleClose={handleClose} />}
            </>
          )
      }
    </>
  )
};

export default Calendar;
