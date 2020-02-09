import { useState, useEffect } from "react";
import convertToHours from "./convertToHours";

/**
 * React hook to convert opening times into sorted array of opening times.
 * @param {object} openings - Holds key value pairs for days of the week and opening Times
 * @returns {array} Returns an array of objects containing day of the week and its opening times
 */
const useCalculateOpening = openings => {
  // State to hold the final result
  const [result, setResult] = useState([]);

  // Effect hook to be called each time openings is modified.
  useEffect(() => {
    if (openings !== undefined) {
      Object.keys(openings).forEach((weekday, weekdayIndex, weekdays) => {
        let openingTimes = "";
        // If there is an empty array the day is closed
        if (!Array.isArray(openings[weekday]) || !openings[weekday].length)
          openingTimes = "Closed";

        // store a reference to the next day. We will need this later on
        // to check if the next day closed the previous day.
        const nextDay =
          weekdayIndex === weekdays.length - 1
            ? weekdays[0]
            : weekdays[weekdayIndex + 1];

        // loop through all opening times of each week day
        openings[weekday].forEach(({ type, value }, index, openingsArray) => {
          // use the conversion function to change the value into 12hr string
          const calculatedTime = convertToHours(value);

          // Handle all open types
          if (type === "open") {
            // Check if this is the second open on the weekday
            if (index > 1) {
              // if its the second open we want to append the calculated time to the origional
              openingTimes = `${openingTimes}, ${calculatedTime}`;
            } else {
              // we can be sure its the first time and we just set it to the calculated time
              openingTimes = `${calculatedTime}`;
            }

            // Check if its the last opening in the weekday
            if (index === openingsArray.length - 1) {
              // desctructure the type and value for the next day.
              const { type, value } = openings[nextDay][0];
              // final check to make sure the following day is closed
              if (type === "close") {
                openingTimes = `${openingTimes} - ${convertToHours(value)}`;
              }
            }
          }
          // handle all close types
          if (type === "close") {
            // We know that if there is only one item in the array we and its close
            // its been handled in the previous open so we can set this to be closed
            if (index === 0 && openingsArray.length === 1) {
              openingTimes = "Closed";
            } else if (index !== 0) {
              // Otherwise we apped the calculated time to the opening times
              openingTimes = `${openingTimes} - ${calculatedTime}`;
            }
          }
        });
        // append the new opening day info to the previous state
        setResult(prevState => [
          ...prevState,
          {
            day: weekday,
            openingTimes
          }
        ]);
      });
    }
  }, [openings]);

  return [result];
};

export default useCalculateOpening;
