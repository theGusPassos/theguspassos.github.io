import React from "react";
import Tag from "../Tag";

const style = {
  position: "absolute" as const,
  top: "0px",
  left: "0px",
  width: "100%"
};

interface TagContainerProps {
  tags: string[];
}

function TagContainer(props: TagContainerProps) {
  return (
    <div style={style}>
      {props.tags.map((value: string, i: number) => {
        return <Tag name={value} key={i}></Tag>;
      })}
    </div>
  );
}

export default TagContainer;
