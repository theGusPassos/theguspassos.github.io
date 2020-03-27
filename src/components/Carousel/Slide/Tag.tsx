import React from "react";
import { colors } from "../../../shared/colors";
import styled from "styled-components";
import { device } from "../../../shared/device";

const TagName = styled.div`
  font-size: 0.8em;
  background: ${colors.mainBackgroundColor};
  color: ${colors.mainColor};
  text-align: center;
  min-width: 60px;
  margin: 10px;
  padding: 3px;
  border: 3px solid;
  border-color: ${colors.mainColor};
  border-radius: 50px;
  float: right;

  @media ${device.tablet} {
    font-size: 1.3em;
    min-width: 100px;
    margin: 15px;
  }
`;

interface TagProps {
  name: string;
}

const Tag = (props: TagProps): React.ReactElement => {
  return <TagName>{props.name}</TagName>;
};

export default Tag;
