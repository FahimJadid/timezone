import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";

const ClockItem = ({ clock, setClocks }) => {
  // console.log("time:", clock.time)
  const [currentTime, setCurrentTime] = useState(clock.time);

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

  return (
    <div className="clock-item">
      <h3>
        {clock.title} <span>({clock.timezone})</span>
      </h3>

      <p>Current Time: {currentTime}</p>
    </div>
  );
};

export default ClockItem;
