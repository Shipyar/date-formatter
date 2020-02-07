// TODO: GOING TO CREATE A SIMPLE HOOK TO CONVERT TIME IN SECONDS TO HOUR
import { useState, useEffect } from "react";

/**
 * 
 * @param {array} openings - 
 */
const useCalculateOpening = (openings) => {
  const [result, setResult] = useState(null);

  // constant to hold seconds
  const SECONDS_IN_DAY = 86400;

  const MINUTES_IN_DAY = 60;

  // Calculate result each time the opening times change
  useEffect(() => {
    let string = '';

    openings.forEach((day) => {
      
      let hours = Math.floor(day.value / MINUTES_IN_DAY / MINUTES_IN_DAY);

      if (hours > 12) {
        hours = hours % 12;
      }
      
      // Check wether the value is less than half a day in seconds making it the morning.
      let meridian = day.value < (SECONDS_IN_DAY / 2) ? 'AM' : 'PM';

      string = `${string} ${hours}${meridian}`;
    })
    
    setResult(string);

    // If the array is empty we can safely say that the resturant is closed on that day.
    if (!Array.isArray(openings) || !openings.length) setResult('Closed');
  }, [openings])

  

  return [result]
};

export default useCalculateOpening;