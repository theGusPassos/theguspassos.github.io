import React, { useEffect } from "react";
import styled from "styled-components";
import { getProjectById } from "../../../data/projects/projectList";
import DeviceInfo from "../../../models/deviceInfo";
import { colors } from "../../../data/colors";
import { sectionWithText } from "../../common-styles/sectionWithText";
import { maxWidthStyle } from "../../common-styles/maxWidthStyle";
import ContactsButton from "../../contacts/ContactsButton";
import { device } from "../../../data/device";

interface ProjectViewProps extends DeviceInfo {
  projectId: number;
}

const ProjectViewStyled = styled.section`
  ${maxWidthStyle};
`;

const ProjectTitle = styled.h1`
  color: ${colors.mainColor};
  font-size: 2em;
  margin: 0;
`;

const ProjectTechStack = styled.span`
  color: ${colors.mainColor};
  font-size: 1.4em;
`;

const PaddedContent = styled.div`
  ${maxWidthStyle};
  padding: 0 5% 5% 5%;

  button {
    color: ${colors.mainColor};
    padding: 10px;
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ProjectText = styled.section`
  ${sectionWithText};
  font-size: 1.2em;
  padding-top: 5%;
`;

const ProjectViewPage = (props: ProjectViewProps) => {
  let project = getProjectById(Number(props.projectId));

  const concatTags = (tags: string[]) => {
    return tags.join(" and ");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectViewStyled>
      <Image src={project.image} alt={project.imageAlt}></Image>
      <PaddedContent>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectTechStack>
          built with {concatTags(project.tags)}
        </ProjectTechStack>
        <ProjectText>{project.projectInfo()}</ProjectText>
        <ContactsButton></ContactsButton>
      </PaddedContent>
    </ProjectViewStyled>
  );
};

export default ProjectViewPage;
