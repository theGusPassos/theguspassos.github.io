import React from "react";
import colors from "../../shared/colors";

const style = {
  fontSize: "0.9em",
  background: colors.mainBackgroundColor,
  textAlign: "center" as const,
  display: "inline-block",
  minWidth: "70px",
  margin: 5,
  padding: 3,
  border: "3px solid",
  borderColor: colors.mainColor,
  color: colors.mainColor,
  borderRadius: "50px",
  float: "right" as const
};

interface TagProps {
  name: string;
}

function Tag(props: TagProps): React.ReactElement {
  return <div style={style}>{props.name}</div>;
}

export default Tag;
