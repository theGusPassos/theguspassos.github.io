import React from "react";
import Project from "../../../models/project";
import styled from "styled-components";
import { deviceSize } from "../../../shared/device";
import { colors } from "../../../shared/colors";
import TagContainer from "./TagContainer";
import SlideDescription from "./SlideDescription";
import { createHashHistory } from "history";

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

const goToProjectPage = (projectId: number) => {
  const history = createHashHistory();
  history.push("project/" + projectId);
};

const SlideContent = (props: ProjectSlideProps) => {
  return (
    <ImageContainer onClick={() => goToProjectPage(1)}>
      <TagContainer tags={props.project.tags}></TagContainer>
      <Image
        src={getImageByDeviceSize(props.project)}
        alt={props.project.imageAlt}
      ></Image>
      <SlideDescription projectName={props.project.name}></SlideDescription>
    </ImageContainer>
  );
};

export default SlideContent;
