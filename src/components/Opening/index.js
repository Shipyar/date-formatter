import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import PropTypes from "prop-types";

// Hook to transform the data
import useCalculateOpening from "../../lib/useCalculateOpening";

// Opening item component
import OpeningItem from "./OpeningItem";

// Styled Components
import {
  StyledOpeningContainer,
  StyledOpeningTitle,
  StyledHeading,
  StyledOpeningGrid
} from "./styles";

/**
 * Opening Component
 * This component is used to render all openings for an individual resturant.
 * @param {json} openings - PASS DATA DOWN FROM APP
 */
const Opening = ({ openings }) => {
  const TODAY = new Date();

  // turns out getDay presumes Sunday is the first day of the week
  let dayIndex = TODAY.getDay();
  dayIndex = dayIndex === 0 ? 7 : dayIndex;

  const [result] = useCalculateOpening(openings);

  const renderOpeningItems = result.map((e, i) => {
    return (
      <OpeningItem
        key={e.day}
        label={e.day}
        openingTimes={e.openingTimes}
        today={dayIndex === i + 1 ? true : false}
      />
    );
  });

  return (
    <StyledOpeningContainer>
      <StyledOpeningTitle>
        <FontAwesomeIcon icon={faClock} />
        <StyledHeading>Opening hours</StyledHeading>
      </StyledOpeningTitle>
      <StyledOpeningGrid>{renderOpeningItems}</StyledOpeningGrid>
    </StyledOpeningContainer>
  );
};

Opening.propTypes = {
  /** Json object of all resturant openin times for the week */
  openings: PropTypes.object.isRequired
};

export default Opening;
