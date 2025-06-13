import Project from "../../models/project";

export const blog: Project = {
  id: "blog",
  order: 4,
  name: "Academic Developer",
  type: "Blog",
  pitch: "",
  description: "My personal blog where I write about software development and some of my experiences related to the industry.",
  publicDir: "projects/blog",
  capsuleAlt: "Academic Developer blog logo",
  externalLinks: {
    hasPressKit: false,
  },
  platforms: [{
    link: "https://gustavopassos.hashnode.dev",
    name: "Hashnode",
    icon: "hashnode",
  }],
  creators: [{
    name: "Gustavo Passos",
    role: "Writer",
    photo: "gus.png",
    socials: "https://bsky.app/profile/guspassos.bsky.social",
  }],
};
