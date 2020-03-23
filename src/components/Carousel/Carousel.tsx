import React from "react";
import {
  CarouselProvider,
  ButtonNext,
  ButtonBack,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProjectSlide from "./Slide/ProjectSlide";

import sketchImage from "../../images/projects/sketch/sketch-carousel.png";
import CarouselTitle from "./CarouselTitle";
import Project from "../../shared/project";

const projectsInCarousel: Project[] = [
  {
    image: sketchImage,
    imageAlt: "Image the game Sketch",
    name: "sketch",
    tags: ["Unity", "C#"]
  }
];

function Carousel() {
  return (
    <div>
      <CarouselTitle></CarouselTitle>
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={10}
        visibleSlides={1}
        totalSlides={2}
      >
        <Slider>
          {projectsInCarousel.map((value: Project, i: number) => {
            return (
              <ProjectSlide index={i} project={value} key={i}></ProjectSlide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default Carousel;
