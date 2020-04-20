import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";
import { unityStateMachine } from "./unity-state-machine/unityStateMachine";

export const projectList: Project[] = [portfolio, unityStateMachine];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
