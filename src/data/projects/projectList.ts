import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";
import { brokenDeliveryService } from "./broken-delivery-service/broken-delivery-service";
import { slasherLock } from "./slasher-lock/slasher-lock";
import { whoKilledGeorge } from "./who-killed-george/who-killed-george";

export const projectList: Project[] = [
  whoKilledGeorge,
  slasherLock,
  brokenDeliveryService,
  portfolio,
];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
