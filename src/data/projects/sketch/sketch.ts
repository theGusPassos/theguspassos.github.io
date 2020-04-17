import Project from "../../../models/project";
import img from "../../../images/projects/sketch/sketch-carousel.png";
import imgBig from "../../../images/projects/sketch/sketch-carousel-big.png";
import SketchDescription from "./SketchDescription";

export const sketch: Project = {
  id: 2,
  name: "sketch",
  description: "none",
  tags: ["c#", "Unity"],
  imageAlt: "sketch gameplay screenshot",
  image: img,
  imageBig: imgBig,
  projectInfo: SketchDescription,
};
