import Project from "../../models/project";
import { sketch } from "./sketch/sketch";

export const projectList: Project[] = [sketch, sketch];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
