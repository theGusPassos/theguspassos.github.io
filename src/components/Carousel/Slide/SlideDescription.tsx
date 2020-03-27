import React from "react";
import { colors } from "../../../shared/colors";
import styled from "styled-components";
import { device } from "../../../shared/device";

const DescriptionContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;

  @media ${device.tablet} {
    bottom: 0;
    width: 60%;
  }
`;

const Title = styled.strong`
  background: ${colors.mainColor};
  padding: 10px 20px;
  color: #fff;
  font-size: 1.1em;
  letter-spacing: 5px;
  text-transform: uppercase;
  border: 1px solid #c2c2c2;
  position: absolute;
  top: -35px;

  @media ${device.tablet} {
    font-size: 1.2em;
    top: -60px;
    padding: 20px;
  }
`;

const Description = styled.div`
  font-size: 0.9em;
  background: #e6e6e6;
  padding: 10px 20px;

  @media ${device.tablet} {
    font-size: 1.1em;
    border-radius: 0 30px 0 0;
  }
`;

const SlideDescription = () => {
  return (
    <DescriptionContainer>
      <Description>
        My firt project made with commercial intent. There’s a playable demo
        available
      </Description>
      <Title>Sketch</Title>
    </DescriptionContainer>
  );
};

export default SlideDescription;
