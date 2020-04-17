import React from "react";
import styled from "styled-components";
import PageStyle from "../../common-styles/PageStyle";
import {
  AnimationDirection,
  GetAnimator,
  GetAnimationTransform,
} from "../../../shared/animations";
import PageTitle from "../../common-styles/PageTitle";
import Project from "../../../models/project";
import { device } from "../../../shared/device";
import ReturnButton from "../../common-styles/ReturnButton";
import { getProjectById } from "../../../data/projects/projectList";
import { getTagsInProject } from "../tag/tagList";
import DeviceInfo from "../../../shared/deviceInfo";

const ProjectViewPageAnimated = GetAnimator(PageStyle);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromUp);

interface ProjectViewProps extends DeviceInfo {
  projectId: number;
}

const Image = styled.img`
  width: 100%;
  max-height: 400px;
`;

const TagContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const ProjectText = styled.section`
  height: 90%;
  padding: 15px 20px 20px 20px;
  margin-bottom: 10%;

  @media ${device.tablet} {
    padding: 30px;
  }
`;

const ProjectViewPage = (props: ProjectViewProps) => {
  let project = getProjectById(Number(props.projectId));

  return (
    <ProjectViewPageAnimated transform={AnimationTransform}>
      {props.isDesktop ? null : <PageTitle centered>{project.name}</PageTitle>}
      <Image src={project.imageBig} alt={project.imageAlt}></Image>
      <TagContainer>{getTagsInProject(project)}</TagContainer>
      <ProjectText>{project.projectInfo()}</ProjectText>
      {/* {props.isDesktop ? null : <ReturnButton></ReturnButton>} */}
    </ProjectViewPageAnimated>
  );
};

export default ProjectViewPage;
