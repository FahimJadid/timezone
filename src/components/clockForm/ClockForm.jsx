import { useState } from "react";

const ClockForm = ({clocks, setClocks}) => {
  const [title, setTitle] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClock = {
      title,
      timezone,
      time: '00:00'
    }

    setClocks([...clocks, newClock ])
    setTitle('');
    setTimezone('');
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  
  const handleTimezone = (e) => {
    setTimezone(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="clock-form">
        <input onChange={handleTitle} type="text" value={title} placeholder="Clock Title" required/>
        <input onChange={handleTimezone} type="text" value={timezone} placeholder="TimeZone (e.g., UTC" required />

        <button type="submit">Add Clock</button>
      </form>
    </>
  );
};

export default ClockForm;
