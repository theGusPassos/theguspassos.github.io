import Project from "../../../models/project";
import img from "./acadev-logo.png";
import BlogInfo from "./BlogInfo";

export const blog: Project = {
  id: 3,
  name: "Academic Developer",
  description: "Personal blog where I write about software development",
  tags: ["vue"],
  imageAlt: "Academic Developer blog logo",
  image: img,
  projectInfo: BlogInfo,
};
