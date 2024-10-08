import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";
import TimezoneSelector from "../../common/TimezoneSelector";
import { parse } from "date-fns";
import EventList from "./components/EventList";

const ClockItem = ({ clock, setClocks, clocks }) => {
  const [currentTime, setCurrentTime] = useState(clock.time);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(clock.title);
  const [newTimezone, setNewTimezone] = useState(clock.timezone);
  const [events, setEvents] = useState(clock.events || []);

  // Update the clock's time every second to keep it dynamic

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = formatInTimeZone(now, clock.timezone, "HH:mm:ss");

      setCurrentTime(formattedTime);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [clock.timezone]);

  // Function to handle deleting the clock
  const handleDelete = () => {
    const updatedClocks = clocks.filter((item) => item.title !== clock.title);
    setClocks(updatedClocks);
  };

  // Function to handle editing the clock
  const handleSave = () => {
    if (!Array.isArray(clocks)) {
      console.error("Clocks is not an array:", clocks);
      return;
    }

    const updatedClocks = clocks.map((item) => {
      if (item.title === clock.title) {
        return { ...item, title: newTitle, timezone: newTimezone, events };
      }
      return item;
    });

    setClocks(updatedClocks);
    setIsEditing(false);
  };



// Utility function to format the time difference
const formatTimeDifference = (localTime, timeInZone) => {
  const difference = Math.abs(localTime - timeInZone) / (1000 * 60) // minutes
  const hours = Math.floor(difference / 60);
  const minutes = Math.round(difference % 60);
  return `${hours} hours, ${minutes} minutes`;
}

// Convert currentTime string back to Date object for accurate calculation
const localTime = new Date();
const timeInZone = parse(currentTime, "HH:mm:ss", new Date());

  return (
    <div className="clock-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <TimezoneSelector
            selectedTimezone={newTimezone}
            setSelectedTimezone={setNewTimezone}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{clock.title}</h3>
          <p>Time: {currentTime} ({clock.timezone})</p>
          <p>Time difference: {formatTimeDifference(localTime, timeInZone)}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      {/* Event List */}
      <EventList
        clock={clock}
        events={events}
        setEvents={setEvents}
        clocks={clocks}
      />
    </div>
  );
};

export default ClockItem;
