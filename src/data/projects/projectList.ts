import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";
import { sketch } from "./unity-state-machine/unityStateMachine";

export const projectList: Project[] = [portfolio, sketch, sketch];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
