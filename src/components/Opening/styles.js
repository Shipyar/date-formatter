import styled from "styled-components";

export const StyledOpeningContainer = styled.div`
  width: 300px;
  height: 350px;
  display: grid;
  grid-template-rows: 30px 1fr;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(64, 64, 64, 0.15);
`;

export const StyledOpeningGrid = styled.div`
  display: grid;
  align-items: center;
`;

export const StyledOpeningItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.greyOne};
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  height: 100%;
`;
