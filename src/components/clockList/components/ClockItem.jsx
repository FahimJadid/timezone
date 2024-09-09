const ClockItem = ({ clock, setClocks }) => {
  return (
    <div className="clock-item">
      <h3>
        {clock.title} <span>({clock.timezone})</span>
      </h3>

      <p>Current Time: {clock.time}</p>
    </div>
  );
};

export default ClockItem;
