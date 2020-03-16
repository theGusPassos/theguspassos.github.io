import React from "react";
import ProjectType from "../../shared/projectType";

function Tag(props: ProjectType): React.ReactElement {
  return <div>{props.name}</div>;
}

export default Tag;
