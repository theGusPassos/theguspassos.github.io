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
import DeviceInfo from "../../../models/deviceInfo";
import { device } from "../../../data/device";

const ProjectListPageStyled = styled.section`
  ${pageMarginStyle};
  margin-top: 20px !important;

  section {
    text-align: left !important;
  }

  @media ${device.tablet} {
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
`;

const Header = styled.header`
  display: flex;
`;

const LeftFloat = styled.div`
  @media ${device.tablet} {
    width: 50%;
  }
`;

const RightFloat = styled.div`
  width: 50%;
  float: right;
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
  margin: auto;
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
      <Header>
        <LeftFloat>
          <NameSection></NameSection>
          {props.deviceType.isTablet || props.deviceType.isDesktop ? (
            <ContactIcons></ContactIcons>
          ) : null}
        </LeftFloat>
        {props.deviceType.isTablet || props.deviceType.isDesktop ? (
          <RightFloat>
            <BackToHomeButton>
              <ButtonToInternalPage path="/">back to home</ButtonToInternalPage>
            </BackToHomeButton>
          </RightFloat>
        ) : null}
      </Header>
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
