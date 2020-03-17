import React from "react";
import { Slide } from "pure-react-carousel";
import Tag from "./Tag";

const style = {
  image: {
    width: "100%"
  }
};

interface ProjectSlideProps {
  index: number;
  img: string;
}

function ProjectSlide(props: ProjectSlideProps) {
  return (
    <Slide index={props.index}>
      <img src={props.img} style={style.image}></img>
      <Tag name="test" color="#fafafa"></Tag>
    </Slide>
  );
}

export default ProjectSlide;
