import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import OpeningItem from "./OpeningItem";
import data from "../../data/userData.json";

import { StyledOpeningContainer, StyledOpeningTitle, StyledHeading, StyledOpeningGrid } from "./styles";

/**
 *
 * @param {json} resturantOpenings - PASS DATA DOWN FROM APP
 */
const Opening = ({ resturantOpenings }) => {
  const TODAY = new Date();
  const renderOpeningItems = Object.keys(data).map((e, i) => {
    return <OpeningItem key={e} label={e} openingTimes={data[e]} today={TODAY.getDay() === i + 1 ? true : false}/>;
  });

  return (
    <StyledOpeningContainer>
      <StyledOpeningTitle>
        <FontAwesomeIcon icon={faClock} size="xs" />
        <StyledHeading>Opening hours</StyledHeading>
      </StyledOpeningTitle>
      <StyledOpeningGrid>{renderOpeningItems}</StyledOpeningGrid>
    </StyledOpeningContainer>
  );
};

export default Opening;
