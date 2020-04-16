import React from "react";
import SlideContent from "./slide/SlideContent";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import DeviceInfo from "../../../shared/deviceInfo";
import { device } from "../../../shared/device";

const CarouselContainer = styled.div`
  z-index: 10;
`;

const CarouselStyled = styled(Carousel)`
  .control-dots {
    top: 0;
    bottom: unset;
  }

  @media ${device.desktop} {
    .carousel.carousel-slider .control-arrow {
      height: 50%;
      margin: auto 0;

      :focus,
      :hover {
        background: rgba(0, 0, 0, 0.9);
        padding: 20px;
        border: 1px solid white;
      }
    }
  }
`;

function projectSlides() {
  return projectList.map((value: Project, i: number) => {
    return <SlideContent index={i} project={value} key={i}></SlideContent>;
  });
}

interface CarouselContent extends DeviceInfo {}

const CarouselContent = (props: CarouselContent) => {
  return (
    <CarouselContainer>
      <CarouselStyled
        showArrows={props.isDesktop}
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
