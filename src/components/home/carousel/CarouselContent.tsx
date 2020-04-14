import React from "react";
import SlideContent from "./slide/SlideContent";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import { isInDesktop } from "../../../shared/device";

const CarouselContainer = styled.div`
  z-index: 10;
`;

const CarouselStyled = styled(Carousel)`
  .control-dots {
    top: 0;
    bottom: unset;
  }
`;

function projectSlides() {
  return projectList.map((value: Project, i: number) => {
    return <SlideContent index={i} project={value} key={i}></SlideContent>;
  });
}

const CarouselContent = () => {
  return (
    <CarouselContainer>
      <CarouselStyled
        showArrows={isInDesktop(10)}
        showThumbs={false}
        showStatus={false}
        showIndicators
        emulateTouch
        autoPlay
        interval={4000}
        stopOnHover
        infiniteLoop
      >
        {projectSlides()}
      </CarouselStyled>
    </CarouselContainer>
  );
};

export default CarouselContent;
