import React from "react";
import styled from "styled-components";
import Project from "../../../models/project";
import Platforms from "./Platforms";
import Links from "./Links";

const Container = styled.div`
  margin: 20px;

  @media (min-width: 850px) {
    margin-top: 20px;
    margin-left: 40px;
  }
`

const SectionTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 42px;
  color: white;
  margin: 20px 0 10px 0;
`

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 24px;
  color: white;
`

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo = ({project}: ProjectInfoProps) => {
  const getFormattedText = (txt: string) => {
    return txt.split('\n').map((paragraph: string, i: number) => {
      return (
        <Text key={i}>{paragraph}</Text>
      )
    });
  }

  return (
    <Container>
      { project.pitch && 
        <React.Fragment>
          <SectionTitle>Pitch</SectionTitle>
          { getFormattedText(project.pitch!) }
        </React.Fragment>
      }

      <SectionTitle>Description</SectionTitle>
      { getFormattedText(project.description) }

      { project.platforms.length > 0 && 
        <React.Fragment>
          <SectionTitle>Platforms</SectionTitle>
          <Platforms platforms={project.platforms} />
        </React.Fragment>
      }

      { (project.externalLinks.hasPressKit 
        || project.externalLinks.basicExternal != null 
        || project.externalLinks.trailer != null) &&
        <React.Fragment>
          <SectionTitle>Links</SectionTitle>
          <Links projectId={project.id} externalLinks={project.externalLinks}/>
        </React.Fragment>
      }
    </Container>
  );
};

export default ProjectInfo;


