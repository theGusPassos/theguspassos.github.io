import React, { useEffect } from "react";
import Project from "../../../models/project";
import styled, { css } from "styled-components";
import { colors } from "../../../data/colors";
import { useHistory } from "react-router-dom";
import { buttonOnHover } from "../../common-styles/buttonStyles";
import { device } from "../../../data/device";
import { sectionWithText } from "../../common-styles/sectionWithText";
import ButtonToExternalLink from "../../common-components/ButtonToExternalLink";
import { projectList } from "../../../data/projects/projectList";

interface ProjectCardProps {
  project: Project;
}

const ProjectCardStyled = styled.div`
  position: relative;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
`;

const ImageBackground = styled.div`
  position: absolute;
  background-color: ${colors.secondColor};
  width: 100%;
  height: 100%;
  top: 10px;
  left: 10px;
`;

const Image = styled.img`
  position: relative;
`;

const ProjectInfo = styled.div`
  color: ${colors.mainTextColor};
  ${sectionWithText};
  padding: 0 10px;
  margin: 15px 0;

  p {
    font-size: 0.9em;
  }
`;

const LinkToProject = styled.div`
  width: 70%;
  margin: auto;

  button {
    font-size: 1em;
  }
`;

const ProjectCard = (props: ProjectCardProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectCardStyled>
      <ImageContainer>
        <ImageBackground></ImageBackground>
        <Image src={props.project.image} alt={props.project.imageAlt}></Image>
      </ImageContainer>
      <ProjectInfo>
        <p>{props.project.description}</p>
        <p>{props.project.madeWithText}</p>
      </ProjectInfo>
      <LinkToProject>
        <ButtonToExternalLink url={props.project.linkToProject}>
          {props.project.linkButton}
        </ButtonToExternalLink>
      </LinkToProject>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
