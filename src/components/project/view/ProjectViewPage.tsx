import React from "react";
import styled from "styled-components";
import pageStyle from "../../common-styles/pageStyle";
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

const ProjectViewPageAnimated = GetAnimator(pageStyle);
const AnimationTransform = GetAnimationTransform(AnimationDirection.FromUp);

interface ProjectViewProps extends DeviceInfo {
  projectId: number;
}

const ScrollableArea = styled.div`
  display: flex;
  flex-direction: column;
`;

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

  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

const ProjectViewPage = (props: ProjectViewProps) => {
  let project = getProjectById(Number(props.projectId));

  return (
    <ProjectViewPageAnimated transform={AnimationTransform}>
      <ScrollableArea>
        {props.isDesktop ? null : (
          <PageTitle centered>{project.name}</PageTitle>
        )}
        <Image src={project.image} alt={project.imageAlt}></Image>
        <TagContainer>{getTagsInProject(project)}</TagContainer>
        <ProjectText>{project.projectInfo()}</ProjectText>
      </ScrollableArea>
      {props.isDesktop ? null : <ReturnButton></ReturnButton>}
    </ProjectViewPageAnimated>
  );
};

export default ProjectViewPage;
