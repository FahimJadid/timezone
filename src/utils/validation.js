// Basic validation to check for duplicate titles

export const isDuplicateTitle = (title, clocks) => {
   return clocks.some((clock) => clock.title.toLowerCase() === title.toLowerCase())
}

// 

export const validateEvent = (events, newEvent) => {
    if(!newEvent.title || !newEvent.time){
        return {isValid: false, message: 'Event Title and time are required.'}
    }

    const eventExists = events.some((event) => event.title === newEvent.title)
    if(eventExists){
        return {isValid: false, message: 'An event with this title already exists.' };
    }

    return {isValid: true};
}


