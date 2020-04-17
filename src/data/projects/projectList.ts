import Project from "../../models/project";
import { sketch } from "./sketch/sketch";
import { portfolio } from "./portfolio/portfolio";

export const projectList: Project[] = [portfolio];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
