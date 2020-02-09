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
  //const [result] = useCalculateOpening(openingTimes);

  return (
    <StyledOpeningItem>
      <StyledWeekday>
        {CAPITALISE_LABEL}
        {today ? <StyledDate>TODAY</StyledDate> : ""}
      </StyledWeekday>
      <StyledOpening isClosed={openingTimes === "Closed" ? true : false}>
        {openingTimes}
      </StyledOpening>
    </StyledOpeningItem>
  );
};

export default OpeningItem;
