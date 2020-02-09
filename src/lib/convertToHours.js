/**
 * Helper function to convert seconds into a 12 hour clock format
 * @param {number} seconds
 * @returns A string containing hours in the day and meridian of the day.
 */
const convertToHours = seconds => {
  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_HOUR = 3600;

  // Divide total seconds by the seconds in an hour to give us the hour rounded down.
  let hours = Math.floor(seconds / SECONDS_IN_HOUR);

  // find the remainder of all hours past midday to conver to 12 hour clock
  if (hours > 12) hours = hours % 12;

  // Calculate if seconds if after miday or before
  let meridian = seconds < SECONDS_IN_DAY / 2 ? "AM" : "PM";

  return `${hours} ${meridian}`;
};

export default convertToHours;
