import React from "react";
import TagContainer from "./TagContainer";
import Project from "../../../models/project";
import SlideDescription from "./SlideDescription";
import styled from "styled-components";
import { deviceSize } from "../../../shared/device";
import { colors } from "../../../shared/colors";

const ImageContainer = styled.section`
  position: relative;
  display: block;
  background-color: ${colors.mainBackgroundColor};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin: auto;
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
    <ImageContainer>
      <TagContainer tags={props.project.tags}></TagContainer>
      <Image
        src={getImageByDeviceSize(props.project)}
        alt={props.project.imageAlt}
      ></Image>
      <SlideDescription></SlideDescription>
    </ImageContainer>
  );
};

export default SlideContent;
