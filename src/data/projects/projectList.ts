import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";

export const projectList: Project[] = [portfolio, portfolio, portfolio];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
