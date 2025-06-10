import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { maxWidthStyle } from "../common-styles/maxWidthStyle";
import ProjectHeader from "./ProjectHeader";
import ProjectInfo from "./Info/ProjectInfo";
import Footer from "../common-components/Footer";
import { useParams } from "react-router-dom";
import { projectList } from "../../data/project-list";
import Project from "../../models/project";

const ProjectPageStyled = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  background-color: #171719;

  min-height: 100vh;

  margin: auto;

  @media (min-width: 1440px) {
    width: 1440px;
    ${maxWidthStyle};
  }
`

const BackgroundScreenshotImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  top: 0; /* Start from the top */
  left: 0;
  position: absolute;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%, 
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.3) 60%,
    transparent 100% 
  );
  mask: linear-gradient(
    to bottom,
    black 0%, 
    rgba(0, 0, 0, 0.1) 65%,
    rgba(0, 0, 0, 0.05) 90%,
    transparent 100% 
  );
`

const ProjectContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
`

const Columns = styled.div`
  margin: 150px auto 0 auto;

  @media (min-width: 640px) {
    margin: 310px auto 0 auto;
    max-width: 950px;
    display: grid;
    grid-template-columns: 40% 60%;
  }
`

const ProjectPage = () => {
  const { projectId } = useParams<{projectId: string}>(); 
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const p =  projectList.filter(p => p.id === projectId)[0];
    setProject(p);
  }, [projectId]);

  if (project) {
    return (
      <ProjectPageStyled>
          <BackgroundScreenshotImage src={`projects/${projectId}/presskit/1.png`}></BackgroundScreenshotImage>
          <ProjectContent>
              <Columns>
                  <ProjectHeader project={project!}/>
                  <ProjectInfo project={project!}/>
              </Columns>
              <Footer />
          </ProjectContent>
      </ProjectPageStyled>
    );
  }
  else {
    return (<div></div>)
  }
};

export default ProjectPage;

