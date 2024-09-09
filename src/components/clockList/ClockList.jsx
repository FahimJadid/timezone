import ClockItem from "./components/ClockItem";

const ClockList = ({ clocks, setClocks }) => {
  return (
    <div className="clock-list">
      {clocks && clocks.length > 0 ? (
        clocks.map((clock, index) => (
          <ClockItem key={index} clock={clock} setClocks={setClocks} />
        ))
      ) : (
        <p>No Clocks added yet.</p>
      )}
    </div>
  );
};

export default ClockList;
