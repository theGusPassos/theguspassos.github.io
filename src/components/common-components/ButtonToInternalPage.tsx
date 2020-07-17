import React from "react";
import styled from "styled-components";
import { colors } from "../../data/colors";

const ButtonStyled = styled.button`
  background-color: ${colors.mainBackgroundColor};
  border: none;
  border-right: 6px solid ${colors.secondColor};
  border-bottom: 6px solid ${colors.secondColor};
  color: ${colors.mainTextColor};
  font-size: 1.3em;
  letter-spacing: 4px;
  width: 100%;
  padding: 10px;
`;

const ButtonToInternalPage = () => {
  return (
    <ButtonStyled>
      <span>see my projects</span>
    </ButtonStyled>
  );
};

export default ButtonToInternalPage;
