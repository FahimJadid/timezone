// // Basic validation to check for duplicate titles
export const isDuplicateTitle = (title, clocks = []) => {
  return clocks.some(
    (clock) => clock.title.toLowerCase() === title.toLowerCase()
  );
};


// Validate event and check for duplicate titles within the clock and across all clocks
export const validateEvent = (events = [], newEvent, clocks = []) => {
  if (!newEvent.title || !newEvent.time) {
    return { isValid: false, message: "Event Title and time are required." };
  }

  // Check for duplicate title within the same clock
  const eventExists = events.some((event) => event.title.toLowerCase() === newEvent.title.toLowerCase());
  if (eventExists) {
    return {
      isValid: false,
      message: "An event with this title already exists in this clock.",
    };
  }

  // Check for duplicate title across all clocks
  const titleExistsInClocks = clocks.some((clock) =>
    Array.isArray(clock.events) && clock.events.some((event) => event.title.toLowerCase() === newEvent.title.toLowerCase())
  );

  if (titleExistsInClocks) {
    return {
      isValid: false,
      message: "An event with this title already exists in another clock.",
    };
  }

  return { isValid: true };
};