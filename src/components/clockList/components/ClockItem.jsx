import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";

const ClockItem = ({ clock, setClocks, clocks }) => {
  const [currentTime, setCurrentTime] = useState(clock.time);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(clock.title);
  const [newTimezone, setNewTimezone] = useState(clock.timezone);

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
    const updatedClocks = clocks.filter((item) => item.title !== clock.title)
    setClocks(updatedClocks)
  };

  // Function to handle editing the clock
  const handleSave = () => {
    if (!Array.isArray(clocks)) {
      console.error('Clocks is not an array:', clocks);
      return;
    }

    const updatedClocks = clocks.map((item) => {
      if(item.title === clock.title){
        return {...item, title: newTitle, timezone: newTimezone}
      }
      return item;
    })

    setClocks(updatedClocks)
    setIsEditing(false);
  };

  return (
    <div className="clock-item">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input 
            type="text" 
            value={newTimezone}
            onChange={(e) => setNewTimezone(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>
            {clock.title} <span>({clock.timezone})</span>
          </h3>
          <p>Current Time: {currentTime}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ClockItem;
