import Project from "../../models/project";

export const blog: Project = {
  id: "blog",
  order: 4,
  name: "Academic Developer",
  type: "Blog",
  pitch: "",
  description:
    "Personal blog where I write about software development and some of my experiences related to the industry. built with vue.js",
  publicDir: "projects/blog",
  capsuleAlt: "Academic Developer blog logo",
  platforms: [{
    link: "https://acadev.hashnode.dev/",
    name: "Hashnode",
    icon: "hashnode",
  }],
  creators: [],
};
