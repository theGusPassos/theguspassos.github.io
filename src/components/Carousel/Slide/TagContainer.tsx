import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const Tags = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

interface TagContainerProps {
  tags: string[];
}

function TagContainer(props: TagContainerProps) {
  return (
    <Tags>
      {props.tags.map((value: string, i: number) => {
        return <Tag name={value} key={i}></Tag>;
      })}
    </Tags>
  );
}

export default TagContainer;
