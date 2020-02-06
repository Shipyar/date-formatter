import React from "react";

import { StyledOpeningItem } from "./styles";

const OpeningItem = ({ label, openingTimes }) => {
  // capitalise the label.
  const CAPITALISE_LABEL = label.charAt(0).toUpperCase() + label.slice(1);

  console.log(openingTimes);
  return <StyledOpeningItem>{CAPITALISE_LABEL}</StyledOpeningItem>;
};

export default OpeningItem;
