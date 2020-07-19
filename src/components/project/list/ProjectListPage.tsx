import React from "react";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { colors } from "../../../data/colors";
import NameSection from "../../common-components/NameSection";
import { pageMarginStyle } from "../../common-styles/pageMarginStyle";
import ContactIcons from "../../contacts/ContactIcons";
import ButtonToInternalPage from "../../common-components/ButtonToInternalPage";
import ResizeListenerProps from "../../../models/resizeListenerProps";
import DeviceInfo from "../../../models/deviceInfo";
import { device } from "../../../data/device";

const ProjectListPageStyled = styled.section`
  ${pageMarginStyle};
  margin-top: 20px !important;

  section {
    text-align: left !important;
  }

  @media ${device.tablet} {
    margin: auto;
  }
`;

const PageTitle = styled.h1`
  font-weight: normal;
  margin: 40px 0;
  color: ${colors.mainTextColor};
  text-align: center;
  letter-spacing: 4px;
  font-size: 1.2em;
`;

const ProjectWrapper = styled.section`
  max-width: 700px;
`;

const ProjectEnd = styled.div`
  color: ${colors.mainTextColor};
  text-align: right;
  letter-spacing: 4px;
  font-size: 1.3em;
  margin-bottom: 70px;
  clear: right;
`;

const BackToHomeButton = styled.div`
  width: 70%;
  margin: 10px auto 30px auto;
`;

export interface ProjectListProps extends DeviceInfo {}

const ProjectListPage = (props: ProjectListProps) => {
  const getProjects = () => {
    return projectList.map((project: Project, i: number) => {
      return <ProjectCard key={i} project={project}></ProjectCard>;
    });
  };

  return (
    <ProjectListPageStyled>
      <NameSection></NameSection>
      <PageTitle>some things I've built</PageTitle>
      <ProjectWrapper>
        {getProjects()}
        <ProjectEnd>end;</ProjectEnd>
      </ProjectWrapper>

      {props.deviceType.isDesktop || props.deviceType.isTablet ? null : (
        <React.Fragment>
          <ContactIcons></ContactIcons>
          <BackToHomeButton>
            <ButtonToInternalPage path="/">back to home</ButtonToInternalPage>
          </BackToHomeButton>
        </React.Fragment>
      )}
    </ProjectListPageStyled>
  );
};

export default ProjectListPage;
