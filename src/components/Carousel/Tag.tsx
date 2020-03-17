import React from "react";
import colors from "../../shared/colors";

const style = {
  background: colors.mainBackgroundColor,
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

interface TagProps {
  name: string;
}

function Tag(props: TagProps): React.ReactElement {
  return <div style={style}>{props.name}</div>;
}

export default Tag;
