import Project from "../../models/project";

export const slasherLock: Project = {
  id: "slasher-lock",
  order: 2,
  name: "Slasher Lock",
  type: "Game",
  pitch: "In this intense 2D top-down horror game you must run, think, hide and lock doors behind you to survive a relentless slasher that won't stop hunting you down.",
  description: "Game created in 2 weeks for the \"My First GameJam 2021 Winter\" with the theme \"Locked\".\nIn this game we explored the concept of locking and unlocking doors while you are chased by a typical slasher movie killer in a top down mansion. Your goal is to find all the keys and escape the house before the slasher catches you!",
  capsuleAlt: "image from the slasher lock main menu",
  publicDir: "projects/slasher-lock",
  platforms: [{
    link: "https://lucasteles.itch.io/slasherlock",
    name: "Itch.io",
    icon: "itch",
  }],
  creators: [{
    name: "Gustavo Passos",
    role: "Programmer",
    photo: "gus.png",
    socials: "https://bsky.app/profile/guspassos.bsky.social",
  },
  {
    name: "Lucas Teles",
    role: "Programmer and compositor",
    socials: "https://x.com/LucasTeles42",
  },
  {
    name: "Luiz Strobelt",
    role: "Artist and programmer",
    socials: "https://github.com/strobelt",
  }],
  externalLinks: {
    hasPressKit: false,
    trailer: "https://www.youtube.com/embed/qay9OZwyhBw?si=5Q7Q18vymOVnkCm4",
  }
};

