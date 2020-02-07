import React from "react";

import useCalculateOpening from '../../lib/useCalculateOpening';

import { StyledOpeningItem, StyledWeekday, StyledOpening } from "./styles";

const OpeningItem = ({ label, openingTimes, today }) => {
  // capitalise the label.
  const CAPITALISE_LABEL = label.charAt(0).toUpperCase() + label.slice(1);
  const [ result ] = useCalculateOpening(openingTimes);

  return (
    <StyledOpeningItem>
      <StyledWeekday>{CAPITALISE_LABEL}</StyledWeekday>
      {today ? <span>TODAY</span> : ''}
      <StyledOpening>{result}</StyledOpening>
    </StyledOpeningItem>
  )
  
};

export default OpeningItem;
