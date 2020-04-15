import React from "react";
import styled from "styled-components";
import SlideDescription from "./SlideDescription";
import { createHashHistory } from "history";
import { getTagsInProject } from "../../../project/tag/tagList";
import { colors } from "../../../../shared/colors";
import Project from "../../../../models/project";
import { deviceSize, device } from "../../../../shared/device";

const ImageContainer = styled.section`
  position: relative;
  display: block;
  background-color: ${colors.mainBackgroundColor};

  :hover {
    cursor: pointer;
  }
`;

const TagContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin: auto;

  @media ${device.desktop} {
    border-radius: 50px;
  }
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
      <TagContainer>{getTagsInProject(props.project)}</TagContainer>
      <Image
        src={getImageByDeviceSize(props.project)}
        alt={props.project.imageAlt}
      ></Image>
      <SlideDescription projectName={props.project.name}></SlideDescription>
    </ImageContainer>
  );
};

export default SlideContent;
