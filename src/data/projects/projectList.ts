import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";
import { sketch } from "./sketch/sketch";

export const projectList: Project[] = [portfolio, sketch];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
