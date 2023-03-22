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
  const dispatch = useDispatch();
  // Loaders
  const groupFetchStatus = useSelector((state) => state.group.loading);
  // Data
  const arrayRecurringEvent = useSelector((state) => state.group.group?.recurring_todo);
  // Calendar
  const [editModal, setEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dateSelected, setDateSelected] = useState("");
  const [eventSelected, setEventSelected] = useState("")
  const [events, setEvents] = useState(useSelector((state) => state.user.user?.todo));
  console.log(events);
  const [eventSources, setEventSources] = useState([])

  // Fetch group data
  useEffect(() => {
    if (groupFetchStatus === "fulfilled") {
      setEventSources([
        {
          events: arrayRecurringEvent.map((event) => ({
            ...event,
            rrule: {
              ...event?.rrule,
              dtstart: new Date(Date.parse(event?.rrule?.dtstart)),
              until: new Date(Date.parse(event?.rrule?.until)),
            },
            extendedProps: {
              ...event?.extendedProps,
              startTime: new Date(event?.rrule?.dtstart),
              endTime: new Date(event?.rrule?.until),
            },
          })),
        },
      ])
    }
  }, [groupFetchStatus]);

  const handleClose = () => {
    setShowModal(false);
    setEditModal(false);
  }
  const handleShow = () => setShowModal(true);
  const handleEdit = () => setEditModal(true);



  const handleSave = () => {
    setEvents([...events, { title, dateSelected }]);
    setDateSelected("");
    handleClose();
  };

  const handleDateClick = (daySelected) => {
    handleShow();
    setDateSelected(daySelected.date);

  };
  const handleEventClick = (eventInfo) => {
    handleEdit();
    setEventSelected(eventInfo.event);

  };
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

              {editModal && <ModalCalendar edit={true} event={eventSelected} handleSave={handleSave} handleClose={handleClose} />}
              {showModal && <ModalCalendar edit={false} handleSave={handleSave} handleClose={handleClose} />}
            </>
          )
      }
    </>
  )
};

export default Calendar;
