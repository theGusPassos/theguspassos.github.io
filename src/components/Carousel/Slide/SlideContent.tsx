import React from "react";
import { Slide } from "pure-react-carousel";
import TagContainer from "./TagContainer";
import Project from "../../../models/project";
import SlideDescription from "./SlideDescription";
import styled from "styled-components";
import { deviceSize, device } from "../../../shared/device";

const ImageContainer = styled.section`
  position: relative;
  display: block;
  height: 100%;

  @media ${device.tablet} {
    max-height: 350px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

interface ProjectSlideProps {
  index: number;
  project: Project;
}

const getImageByDeviceSize = (project: Project) => {
  return window.screen.width < deviceSize.tablet
    ? project.image
    : project.imageBig;
};

const SlideContent = (props: ProjectSlideProps) => {
  return (
    <Slide index={props.index}>
      <ImageContainer>
        <TagContainer tags={props.project.tags}></TagContainer>
        <Image
          src={getImageByDeviceSize(props.project)}
          alt={props.project.imageAlt}
        ></Image>
        <SlideDescription></SlideDescription>
      </ImageContainer>
    </Slide>
  );
};

export default SlideContent;
