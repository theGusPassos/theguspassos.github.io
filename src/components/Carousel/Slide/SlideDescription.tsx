import React from "react";
import { colors } from "../../../shared/colors";
import styled from "styled-components";
import { device } from "../../../shared/device";

const DescriptionContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: -15%;
  width: 100%;
  height: 25%;

  @media ${device.tablet} {
    bottom: 0;
    width: 60%;
  }
`;

const Title = styled.div`
  background: ${colors.mainColor};
  padding: 10px 20px;
  color: #fff;
  font-size: 1.1em;
  letter-spacing: 5px;
  border: 1px solid #c2c2c2;
  position: absolute;
  top: -35px;

  @media ${device.tablet} {
    font-size: 1.3em;
    top: -60px;
    padding: 20px;
  }
`;

const Description = styled.div`
  font-size: 0.9em;
  background: #e6e6e6;
  width: 100%;
  padding: 10px 20px;

  @media ${device.tablet} {
    font-size: 1.1em;
    border-radius: 0 30px 0 0;
  }
`;

const SlideDescription = () => {
  return (
    <DescriptionContainer>
      <Title>
        <strong>SKETCH</strong>
      </Title>
      <Description>
        My firt project made with commercial intent. There’s a playable demo
        available
      </Description>
    </DescriptionContainer>
  );
};

export default SlideDescription;
