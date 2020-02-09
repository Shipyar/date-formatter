import styled from "styled-components";

export const StyledOpeningContainer = styled.div`
  min-width: 300px;
  height: 350px;
  display: grid;
  grid-template-rows: 30px 1fr;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(64, 64, 64, 0.15);
`;

export const StyledOpeningTitle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.default};
  padding-bottom: 10px;
  & svg {
    color: ${props => props.theme.colors.greyThree};
  }
`;

export const StyledHeading = styled.h3`
  margin: 0;
  color: ${props => props.theme.colors.default};
  font-size: 24px;
  line-height: 30px;
  padding-left: 12px;
`;

export const StyledOpeningGrid = styled.div`
  display: grid;
  align-items: center;
`;

export const StyledOpeningItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.greyOne};
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  height: 100%;
`;

export const StyledWeekday = styled.h4`
  margin: 0;
  color: ${props => props.theme.colors.default};
`;

export const StyledOpening = styled.p`
  margin: 0;
  font-size: ${props => props.isLarge ? '12px' : '16px'};
  line-height: 22px;
  font-weight: 400;
  color: ${props =>
    props.isClosed ? props.theme.colors.greyThree : props.theme.colors.default};
`;

export const StyledDate = styled.span`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  padding-left: 12px;
  color: ${props => props.theme.colors.green};
`;
