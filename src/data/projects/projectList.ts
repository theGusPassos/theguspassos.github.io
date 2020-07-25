import Project from "../../models/project";
import { portfolio } from "./portfolio/portfolio";
import { blog } from "./blog/blog";
import { brokenDeliveryService } from "./broken-delivery-service/broken-delivery-service";

export const projectList: Project[] = [blog, portfolio, brokenDeliveryService];

export const getProjectById = (id: number) => {
  return projectList.filter((a) => a.id === id)[0];
};
