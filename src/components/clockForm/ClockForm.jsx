import { formatInTimeZone } from "date-fns-tz";
import { useState } from "react";
import { isDuplicateTitle } from "../../utils/validation";
import TimezoneSelector from "./../common/TimezoneSelector";

const ClockForm = ({ clocks, setClocks }) => {
  const [title, setTitle] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDuplicateTitle(title, clocks)) {
      alert("A Clock with this title already exists");
      return;
    }

    
    const now = new Date();
    try {
      const formattedTime = formatInTimeZone(now, timezone, "HH:mm:ss"); 
      

      const newClock = {
        title,
        timezone,
        time: formattedTime,
      };

      setClocks([...clocks, newClock]);
      setTitle("");
      setTimezone("UTC"); // Reset to default "UTC"
    } catch (error) {
      console.error("Error formatting time:", error);
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="clock-form">
        <input
          onChange={handleTitle}
          type="text"
          value={title}
          placeholder="Clock Title"
          required
        />
        <TimezoneSelector
          selectedTimezone={timezone}
          setSelectedTimezone={setTimezone}
        />

        <button type="submit">Add Clock</button>
      </form>
    </>
  );
};

export default ClockForm;
