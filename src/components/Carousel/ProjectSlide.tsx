import React from "react";
import { Slide } from "pure-react-carousel";

const style = {
  image: {
    width: "100%"
  }
};

type ProjectSlideProps = {
  index: number;
  img: string;
};

function ProjectSlide(props: ProjectSlideProps) {
  return (
    <Slide index={props.index}>
      <img src={props.img} style={style.image}></img>
    </Slide>
  );
}

export default ProjectSlide;
