import { Component } from "react";

export default interface Project {
  name: string;
  image: string;
  imageBig: string;
  imageAlt: string;
  tags: string[];
  container(): JSX.Element;
}
