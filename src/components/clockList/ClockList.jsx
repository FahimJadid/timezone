import ClockItem from "./components/ClockItem";

const ClockList = ({ clocks, setClocks }) => {
  return (
    <div className="clock-list">
      {clocks && clocks.length > 0 ? (
        clocks.map((clock) => (
          <ClockItem key={clock.title} clock={clock} setClocks={setClocks} clocks={clocks} />
        ))
      ) : (
        <p>No Clocks added yet.</p>
      )}
    </div>
  );
};

export default ClockList;
