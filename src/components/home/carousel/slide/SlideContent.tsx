import React from "react";
import styled from "styled-components";
import SlideDescription from "./SlideDescription";
import { createHashHistory } from "history";
import { getTagsInProject } from "../../../project/tag/tagList";
import { colors } from "../../../../data/colors";
import Project from "../../../../models/project";
import { device } from "../../../../data/device";

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
  padding: 2% 5%;
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

const SlideContent = (props: ProjectSlideProps) => {
  const goToProjectPage = (projectId: number) => {
    const history = createHashHistory();
    history.push("project/" + projectId);
  };

  return (
    <ImageContainer onClick={() => goToProjectPage(props.project.id)}>
      <TagContainer>{getTagsInProject(props.project)}</TagContainer>
      <Image src={props.project.image} alt={props.project.imageAlt}></Image>
      <SlideDescription project={props.project}></SlideDescription>
    </ImageContainer>
  );
};

export default SlideContent;
