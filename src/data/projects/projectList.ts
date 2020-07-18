import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";
import { blog } from "./blog/blog";

export const projectList: Project[] = [blog, portfolio];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
