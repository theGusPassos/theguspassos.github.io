import React from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SlideContent from "./Slide/SlideContent";

import sketchImage from "../../images/projects/sketch/sketch-carousel.png";
import Title from "./Title";
import Project from "../../shared/project";

const projectsInCarousel: Project[] = [
  {
    image: sketchImage,
    imageAlt: "Image the game Sketch",
    name: "sketch",
    tags: ["Unity", "C#"]
  }
];

function CarouselContent() {
  return (
    <div>
      <Title></Title>
      <CarouselProvider
        naturalSlideWidth={13}
        naturalSlideHeight={10}
        visibleSlides={1}
        totalSlides={2}
      >
        <Slider>
          {projectsInCarousel.map((value: Project, i: number) => {
            return (
              <SlideContent index={i} project={value} key={i}></SlideContent>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default CarouselContent;
