import { formatInTimeZone } from "date-fns-tz";
import { useState } from "react";

const ClockForm = ({ clocks, setClocks }) => {
  const [title, setTitle] = useState("");
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating that the timezone is valid (for now, simple check for empty)
    if (!timezone) {
      alert("Please provide a valid timezone");
      return;
    }

    // Get the current time based on the selected timezone
    const now = new Date();
    console.log("Now:", now);
    try {
      const formattedTime = formatInTimeZone(now, timezone, "HH:mm:ss"); // Format the time in the selected timezone
      // console.log("formattedTime: ", formattedTime);

      const newClock = {
        title,
        timezone,
        time: formattedTime,
      };

      setClocks([...clocks, newClock]);
      setTitle("");
      setTimezone("");
    } catch (error) {
      console.error("Error formatting time:", error);
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleTimezone = (e) => {
    setTimezone(e.target.value);
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
        <input
          onChange={handleTimezone}
          type="text"
          value={timezone}
          placeholder="TimeZone (e.g., UTC"
          required
        />

        <button type="submit">Add Clock</button>
      </form>
    </>
  );
};

export default ClockForm;
