import React from "react";
import Project from "../../../models/project";
import Tag from "./Tag";

export const getTagsInProject = (project: Project) => {
  return getTags(project.tags);
};

export const getTags = (tags: string[]) => {
  return tags.map((tag: string, key: number) => {
    return <Tag key={key}>{tag}</Tag>;
  });
};
