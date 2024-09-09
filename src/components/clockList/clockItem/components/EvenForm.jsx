import { useState } from "react";

const EventForm = ({ addEvent, clock, eventToEdit, saveEvent }) => {
  const [eventTitle, setEventTitle] = useState(
    eventToEdit ? eventToEdit.title : ""
  );
  const [eventTime, setEventTime] = useState(
    eventToEdit ? eventToEdit.time : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventTitle && eventTime) {
      if (eventToEdit) {
        saveEvent(clock, { title: eventTitle, time: eventTime });
      } else {
        addEvent(clock, { title: eventTitle, time: eventTime });
      }
      setEventTitle("");
      setEventTime("");
    } else {
      alert("Both event title and time are required");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />

        <input
          type="time"
          value={eventTime}
          placeholder="Event Time"
          onChange={(e) => setEventTime(e.target.value)}
        />

        <button type="submit">{eventToEdit ? 'Save Event' : 'Add Event'}</button>
      </form>
    </>
  );
};

export default EventForm;
