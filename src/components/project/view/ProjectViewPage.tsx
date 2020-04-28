import React from "react";
import styled from "styled-components";
import { pageStyleFullWidth } from "../../common-styles/pageStyle";
import {
  AnimationDirection,
  GetAnimator,
  GetAnimationTransform,
} from "../../../animations/animations";
import PageTitle from "../../common-components/PageTitle";
import { device } from "../../../data/device";
import ReturnButton from "../../common-components/ReturnButton";
import { getProjectById } from "../../../data/projects/projectList";
import { getTagsInProject } from "../tag/tagList";
import DeviceInfo from "../../../models/deviceInfo";
import { colors } from "../../../data/colors";
import { ScrollableArea } from "../../common-components/ScrollableArea";

const ProjectViewPageAnimated = GetAnimator(pageStyleFullWidth);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromUp);

interface ProjectViewProps extends DeviceInfo {
  projectId: number;
}

const ProjectTitle = styled.strong`
  color: ${colors.mainColor};
  font-size: 1.5em;
  width: 100%;
  text-align: center;
  padding: 5px;

  @media ${device.desktop} {
    padding: 10px 0;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
`;

const TagContainer = styled.div`
  display: block;
  margin: 0 auto;
`;

const ProjectText = styled.section`
  height: 100%;
  padding: 15px 20px 15% 20px;

  @media ${device.tablet} {
    padding: 30px 30px 10px 30px;
  }
`;

const ProjectViewPage = (props: ProjectViewProps) => {
  let project = getProjectById(Number(props.projectId));

  return (
    <ProjectViewPageAnimated transform={AnimationTransform}>
      <ScrollableArea>
        {props.deviceType.isDesktop ? null : (
          <PageTitle centered>{project.name}</PageTitle>
        )}
        <Image src={project.image} alt={project.imageAlt}></Image>
        {props.deviceType.isDesktop ? (
          <ProjectTitle>{project.name}</ProjectTitle>
        ) : null}
        <TagContainer>{getTagsInProject(project)}</TagContainer>
        <ProjectText>{project.projectInfo()}</ProjectText>
      </ScrollableArea>
      {props.deviceType.isDesktop ? null : <ReturnButton></ReturnButton>}
    </ProjectViewPageAnimated>
  );
};

export default ProjectViewPage;
