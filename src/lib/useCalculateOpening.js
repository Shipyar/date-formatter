// TODO: GOING TO CREATE A SIMPLE HOOK TO CONVERT TIME IN SECONDS TO HOUR
import React, { useState, useEffect } from "react";

const useCalculateOpening = ({ openingTimes }) => {
  const [openingTime, setOpeningTime] = useState(null);

  // constant to hold seconds
  const SECONDS_IN_DAY = 86400;

  if (!Array.isArray(openingTimes) || !openingTimes.length) return "closed";
};
