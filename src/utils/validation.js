// Basic validation to check for duplicate titles

export const isDuplicateTitle = (title, clocks) => {
   return clocks.some((clock) => clock.title.toLowerCase() === title.toLowerCase())
}


// Basic validation for timezone 

export const isValidTimezone = (timezone) => {  
    return timezone && timezone.trim().length > 0;
}