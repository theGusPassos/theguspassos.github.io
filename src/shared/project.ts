import ProjectType from "./projectType";

export default interface Project {
  name: string;
  image: string;
  tags: ProjectType[];
}
