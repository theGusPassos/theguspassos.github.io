import Project from "../../../models/project";
import img from "../../../images/projects/sketch/sketch-carousel.png";
import imgBig from "../../../images/projects/sketch/sketch-carousel-big.png";
import PortfolioInfo from "./PortfolioInfo";

export const portfolio: Project = {
  id: 1,
  name: "My Portfolio",
  description:
    "The website you're accessing right now was designed and developed by me.",
  tags: ["react"],
  imageAlt: "an image of this very own website",
  image: img,
  imageBig: imgBig,
  projectInfo: PortfolioInfo,
};
