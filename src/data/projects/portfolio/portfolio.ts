import Project from "../../../models/project";
import img from "./portfolio-site.png";
import PortfolioInfo from "./PortfolioInfo";

export const portfolio: Project = {
  id: 1,
  name: "My Portfolio",
  description:
    "The website you're accessing right now was designed and developed by me.",
  tags: ["react"],
  imageAlt: "an image of this very own website",
  image: img,
  projectInfo: PortfolioInfo,
};
