import React, { useEffect } from "react";
import Project from "../../../models/project";
import styled from "styled-components";
import { colors } from "../../../data/colors";
import { sectionWithText } from "../../common-styles/sectionWithText";
import ButtonToExternalLink from "../../common-components/ButtonToExternalLink";
import { device } from "../../../data/device";

interface ProjectCardProps {
  project: Project;
}

const ProjectCardStyled = styled.div`
  display: inline-block;
  clear: right;
  position: relative;
  margin-bottom: 30px;

  img {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;

  @media ${device.tablet} {
    width: 50%;
  }
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

const ProjectInfoContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
`;

const ProjectInfo = styled.div`
  color: ${colors.mainTextColor};
  ${sectionWithText};
  padding: 0 10px;
  margin: 15px 0;

  p {
    font-size: 0.9em;
  }

  @media ${device.tablet} {
    width: 50%;
  }
`;

const LinkToProject = styled.div`
  width: 70%;
  margin: auto;

  button {
    font-size: 1em;
  }

  @media ${device.tablet} {
    width: 40%;
    float: right;
  }
`;

const ProjectCard = (props: ProjectCardProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectCardStyled>
      <ProjectInfoContainer>
        <ImageContainer>
          <ImageBackground></ImageBackground>
          <Image src={props.project.image} alt={props.project.imageAlt}></Image>
        </ImageContainer>
        <ProjectInfo>
          <p>{props.project.description}</p>
          <p>{props.project.madeWithText}</p>
        </ProjectInfo>
      </ProjectInfoContainer>
      <LinkToProject>
        <ButtonToExternalLink url={props.project.linkToProject}>
          {props.project.linkButton}
        </ButtonToExternalLink>
      </LinkToProject>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
