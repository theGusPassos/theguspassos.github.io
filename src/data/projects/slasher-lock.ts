import Project from "../../models/project";

export const slasherLock: Project = {
  id: "slasher-lock",
  order: 2,
  name: "Slasher Lock",
  type: "Game",
  pitch: "",
  description:
    "Game made for the My First Game Jam: Winter in 2 weeks. Made together with the Red Rat Team: @lucasteles42 and @luizstrobelt.",
  capsuleAlt: "image from the slasher lock main menu",
  publicDir: "projects/slasher-lock",
  platforms: [{
    link: "https://lucasteles.itch.io/slasherlock",
    name: "Itch.io",
    icon: "itch",
  }],
  creators: [],
  externalLinks: {
    hasPressKit: false,
  }
};

