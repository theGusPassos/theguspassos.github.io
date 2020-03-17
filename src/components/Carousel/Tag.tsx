import React from "react";
import ProjectType from "../../shared/projectType";
import colors from "../../shared/colors";

const style = {
  textAlign: "center" as const,
  display: "inline-block",
  minWidth: "70px",
  margin: 10,
  padding: 5,
  border: "3px solid",
  borderColor: colors.mainColor,
  color: colors.mainColor,
  borderRadius: "50px"
};

function getTagStyle(projectType: ProjectType) {
  return {
    ...style,
    backgroundColor: projectType.color
  };
}

function Tag(props: ProjectType): React.ReactElement {
  return <div style={getTagStyle(props)}>{props.name}</div>;
}

export default Tag;
