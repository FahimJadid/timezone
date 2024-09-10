import { useState } from "react";
import EventForm from "./EventForm";

const EventList = ({ clock, events, setEvents, clocks }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const addEvent = (clock, newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setIsAdding(false);
  };

  const saveEvent = (clock, editedEvent) => {
    const updatedEvents = events.map((event) =>
      event.title === eventToEdit.title ? editedEvent : event
    );

    setEvents(updatedEvents);
    setEventToEdit(null);
  };

  const deleteEvent = (eventTitle) => {
    const updatedEvents = events.filter((event) => event.title !== eventTitle);
    setEvents(updatedEvents);
  };

  return (
    <>
      <div className="event-list">
        <h4>Events for {clock.title}</h4>

        {events.map((event) => (
          <div key={event.title} className="event-item">
            <p>
              {event.title} at {event.time}
            </p>
            <button onClick={() => setEventToEdit(event)}>Edit</button>
            <button onClick={() => deleteEvent(event.title)}>Delete</button>
          </div>
        ))}

        {isAdding || eventToEdit ? (
          <EventForm
            clock={clock}
            addEvent={addEvent}
            eventToEdit={eventToEdit}
            saveEvent={saveEvent}
            events={events}
            clocks={clocks}
          />
        ) : (
          <button onClick={() => setIsAdding(true)}>Add Event</button>
        )}
      </div>
    </>
  );
};

export default EventList;
