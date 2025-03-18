import React, { useEffect } from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
`

const Title = styled.h1`
    color: white;
    font-size: 2.25rem;
    line-height: 64px;
    font-weight: 700;
    text-align: center;
    margin-top: 130px;
`

const Projects = () => {
  return (
    <ProjectsContainer>
        <Title>My Projects</Title>
    </ProjectsContainer>
  );
};

export default Projects;

