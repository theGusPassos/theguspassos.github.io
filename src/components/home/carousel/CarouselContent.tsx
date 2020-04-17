import React from "react";
import SlideContent from "./slide/SlideContent";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";
import DeviceInfo from "../../../models/deviceInfo";
import { device } from "../../../data/device";

const CarouselContainer = styled.div`
  z-index: 10;
`;

const CarouselStyled = styled(Carousel)`
  .control-dots {
    top: 0;
    bottom: unset;
  }

  .dot {
    :focus {
      border: 5px solid white;
    }
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

interface CarouselContent extends DeviceInfo {}

const CarouselContent = (props: CarouselContent) => {
  const projectSlides = () => {
    return projectList.map((value: Project, i: number) => {
      return <SlideContent index={i} project={value} key={i}></SlideContent>;
    });
  };

  return (
    <CarouselContainer>
      <CarouselStyled
        showArrows={props.isDesktop}
        showThumbs={false}
        showStatus={false}
        showIndicators
        emulateTouch
        autoPlay
        transitionTime={700}
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
