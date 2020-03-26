import React from "react";
import { colors } from "../../shared/colors";
import styled from "styled-components";

const TitleContent = styled.div`
  background: ${colors.mainColor};
  color: ${colors.mainTextColor};
  text-align: center;
  padding: 10px;
  font-size: 0.95em;
`;

const CarouselTitle = () => {
  return (
    <TitleContent>those are some of the projects I've worked on</TitleContent>
  );
};

export default CarouselTitle;
