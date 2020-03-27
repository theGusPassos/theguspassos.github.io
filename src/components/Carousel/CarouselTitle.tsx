import React from "react";
import { colors } from "../../shared/colors";
import styled from "styled-components";
import { device } from "../../shared/device";

const TitleContent = styled.div`
  background: ${colors.mainColor};
  color: ${colors.mainTextColor};
  padding: 10px 20px;
  font-size: 0.95em;

  @media ${device.tablet} {
    padding: 10px 30px;
    font-size: 1.4em;
  }
`;

const CarouselTitle = () => {
  return <TitleContent>some of the projects I've worked on:</TitleContent>;
};

export default CarouselTitle;
