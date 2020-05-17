import React from "react";
import styled from "styled-components";
import { pageStyleFullWidth } from "../../common-styles/pageStyle";
import {
  AnimationDirection,
  GetAnimator,
  GetAnimationTransform,
} from "../../../animations/animations";
import { device } from "../../../data/device";
import { getProjectById } from "../../../data/projects/projectList";
import DeviceInfo from "../../../models/deviceInfo";
import { colors } from "../../../data/colors";
import { defaultPadding, sectionWithText } from "../../common-styles/styles";

interface ProjectViewProps extends DeviceInfo {
  projectId: number;
}

const ProjectViewStyled = styled.section``;

const ProjectTitle = styled.h1`
  color: ${colors.mainColor};
  font-size: 1.8em;
  margin: 0;
`;

const ProjectTechStack = styled.span`
  color: ${colors.mainColor};
  font-size: 1.2em;
`;

const PaddedContent = styled.div`
  padding: 0 5% 5% 5%;
`;

const Image = styled.img`
  width: 100%;
`;

const ProjectText = styled.section`
  ${sectionWithText};
  padding-top: 10%;
`;

const ProjectViewPage = (props: ProjectViewProps) => {
  let project = getProjectById(Number(props.projectId));

  return (
    <ProjectViewStyled>
      <Image src={project.image} alt={project.imageAlt}></Image>
      <PaddedContent>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectTechStack>bult with c# and unity</ProjectTechStack>
        <ProjectText>{project.projectInfo()}</ProjectText>
      </PaddedContent>
    </ProjectViewStyled>
  );
};

export default ProjectViewPage;
