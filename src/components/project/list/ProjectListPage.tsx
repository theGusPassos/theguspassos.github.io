import React from "react";
import { projectList } from "../../../data/projects/projectList";
import Project from "../../../models/project";

const ProjectListPage = () => {
  const getProjects = () => {
    return projectList.map((project: Project, i: number) => {
      return <div key={i}>{project.name}</div>;
    });
  };

  return <div>{getProjects()}</div>;
};

export default ProjectListPage;
