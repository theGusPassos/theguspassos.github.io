import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { maxWidthStyle } from "../common-styles/maxWidthStyle";

const ProjectPageStyled = styled.section`
  width: 1440px;
  height: 2399px;

  background-color: #171719;

  ${maxWidthStyle};

  margin: auto;
`

const F = styled.div`

  position: relative;
  display: inline-block;


  content: '';
  position: absolute;

`


const BackgroundScreenshotImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  top: 0; /* Start from the top */
  left: 0;
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

const ProjectPage = () => {
  return (
    <ProjectPageStyled>
            <BackgroundScreenshotImage src={"projects/super-dash/presskit/1.png"}></BackgroundScreenshotImage>
    </ProjectPageStyled>
  );
};

export default ProjectPage;

