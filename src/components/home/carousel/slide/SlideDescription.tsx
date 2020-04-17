import React from "react";
import styled from "styled-components";
import { device } from "../../../../shared/device";
import { colors } from "../../../../data/colors";
import Project from "../../../../models/project";

const DescriptionContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;

  @media ${device.tablet} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 55%;
  }
`;

const Title = styled.strong`
  background: ${colors.mainColor};
  color: #fff;
  font-size: 1.1em;
  letter-spacing: 5px;
  text-transform: uppercase;
  border: 1px solid #c2c2c2;
  position: absolute;
  left: 0px;
  top: -35px;
  padding: 10px 20px;

  @media ${device.tablet} {
    font-size: 1.2em;
    top: -60px;
    padding: 20px 30px;
  }
`;

const Description = styled.div`
  font-size: 0.9em;
  background: #e6e6e6;
  padding: 10px 20px;
  text-align: left;

  @media ${device.tablet} {
    font-size: 1.1em;
    border-radius: 0 30px 0 0;
    padding: 20px 30px;
  }
`;

const SlideDescription = (props: SlideDescriptionProps) => {
  return (
    <DescriptionContainer>
      <Description>{props.project.description}</Description>
      <Title>{props.project.name}</Title>
    </DescriptionContainer>
  );
};

interface SlideDescriptionProps {
  project: Project;
}

export default SlideDescription;
