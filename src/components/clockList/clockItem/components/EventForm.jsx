import { useState } from "react";
import { validateEvent } from "../../../../utils/validation";


const EventForm = ({ addEvent, clock, eventToEdit, saveEvent, events, clocks }) => {
  const [eventTitle, setEventTitle] = useState(
    eventToEdit ? eventToEdit.title : ""
  );
  const [eventTime, setEventTime] = useState(
    eventToEdit ? eventToEdit.time : ""
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {title: eventTitle, time: eventTime};
    const validation = validateEvent(events, newEvent, clocks)

    if (validation.isValid) {
      if (eventToEdit) {
        saveEvent(clock, newEvent);
      } else {
        addEvent(clock, newEvent);
      }
      setEventTitle("");
      setEventTime("");
      setErrorMessage("");
    } else {
      setErrorMessage(validation.message)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p className="error">{errorMessage}</p>}
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
