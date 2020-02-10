import React from "react";
import PropTypes from "prop-types";

import {
  StyledOpeningItem,
  StyledWeekday,
  StyledDate,
  StyledOpening
} from "./styles";

const OpeningItem = ({ label, openingTimes, today }) => {
  // capitalise the label.
  const CAPITALISE_LABEL = label.charAt(0).toUpperCase() + label.slice(1);

  // Wanted a way to reduce the size of the opening times if they are far too large
  const reduceSize = openingTimes.length > 35 ? true : false;

  return (
    <StyledOpeningItem>
      <StyledWeekday>
        {CAPITALISE_LABEL}
        {today ? <StyledDate>TODAY</StyledDate> : ""}
      </StyledWeekday>
      <StyledOpening
        isClosed={openingTimes === "Closed" ? true : false}
        isLarge={reduceSize}
      >
        {openingTimes}
      </StyledOpening>
    </StyledOpeningItem>
  );
};

OpeningItem.propTypes = {
  /** Json object of all resturant openin times for the week */
  label: PropTypes.string,

  /** String containing opening times for the day */
  openingTimes: PropTypes.string,

  /** Bool which states if the weekday is also the current day */
  today: PropTypes.bool
};

export default OpeningItem;
