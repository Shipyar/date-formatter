import React from "react";

import OpeningItem from "./OpeningItem";
import data from "../../data/userData.json";

import { StyledOpeningContainer, StyledOpeningGrid } from "./styles";

/**
 *
 * @param {json} resturantOpenings - JSON object
 */
const Opening = ({ resturantOpenings }) => {
  const renderOpeningItems = Object.keys(data).map((e, i) => {
    return <OpeningItem key={e} label={e} openingTimes={data[e]} />;
  });

  return (
    <StyledOpeningContainer>
      <div>Opening Hours</div>
      <StyledOpeningGrid>{renderOpeningItems}</StyledOpeningGrid>
    </StyledOpeningContainer>
  );
};

export default Opening;
