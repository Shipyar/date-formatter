import React from "react";

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

  console.log(reduceSize);

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

export default OpeningItem;
