import Project from "../models/project";
import { brokenDeliveryService } from "./projects/broken-delivery-service";
import { slasherLock } from "./projects/slasher-lock";
import { whoKilledGeorge } from "./projects/who-killed-george";
import { superDash } from "./projects/super-dash";
import { blog } from "./projects/blog";

export const projectList: Project[] = [
  superDash,
  whoKilledGeorge,
  slasherLock,
  brokenDeliveryService,
];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.order === id)[0];
};
