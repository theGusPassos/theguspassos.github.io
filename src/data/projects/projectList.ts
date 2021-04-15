import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";
import { brokenDeliveryService } from "./broken-delivery-service/broken-delivery-service";
import { slasherLock } from "./slasher-lock/slasher-lock";

export const projectList: Project[] = [
  slasherLock,
  brokenDeliveryService,
  portfolio,
];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
