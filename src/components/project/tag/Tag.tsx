import React from "react";
import { colors } from "../../../data/colors";
import styled from "styled-components";
import { device } from "../../../shared/device";

const TagName = styled.div`
  font-size: 0.8em;
  background: ${colors.mainBackgroundColor};
  color: ${colors.mainColor};
  text-align: center;
  min-width: 60px;
  margin: 10px;
  padding: 3px 7px;
  border: 3px solid;
  border-color: ${colors.mainColor};
  border-radius: 50px;
  float: right;

  @media ${device.tablet} {
    font-size: 1.2em;
    min-width: 90px;
    margin: 15px;
  }

  @media ${device.desktop} {
    padding: 5px 20px;
  }
`;

interface TagProps {
  children: string;
}

const Tag = (props: TagProps): React.ReactElement => {
  return <TagName>{props.children}</TagName>;
};

export default Tag;
