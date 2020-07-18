import Project from "../../../models/project";
import img from "./portfolio-site.png";

export const portfolio: Project = {
  id: 1,
  name: "My Portfolio",
  description:
    "The website you're accessing right now was designed and developed by me.",
  tags: ["react"],
  imageAlt: "an image of this very own website",
  image: img,
  madeWithText: "made with react",
  linkButton: "check the source code",
};
