import Project from "../../models/project";

export const whoKilledGeorge: Project = {
  id: "who-killed-george",
  order: 1,
  name: "Who Killed George",
  type: "Game",
  pitch: "Play as a detective in this 2D mistery game.\nWho Killed George challenges you to piece together the evidence, connect the dots, and interrogate suspects to uncover the truth behind George’s murder.",
  description: "Who Killed George was created in just 48 hours for the GMTK Game Jam 2021, where the theme was \"Joined Together\". This concept was used as the core of the game, both in its mechanics and its narrative.\nThe classic detective clue board - with red lines linking photos of evidence and suspects - evokes this theme. The player will gather more evidence as he progress, creating more links between them.\nWhen interrogating, instead of choosing from a set of questions, the player must link 2 pieces of evidence and ask about it, this also evokes the jam's theme.\nWith a strict deadline to solve the case, you can’t afford to brute-force your way through every possible combination. Every day you have a limit amount of suspects to interrogate and there's only a few days to solve the mistery.",
  capsuleAlt: "image from the who killed george game main menu",
  publicDir: "projects/who-killed-george",
  platforms: [{
    link: "https://guspassos.itch.io/who-killed-george",
    name: "Itch.io",
    icon: "itch",
  }],
  creators: [{
    name: "Gustavo Passos",
    role: "Programmer and writer",
    photo: "gus.png",
    socials: "https://bsky.app/profile/guspassos.bsky.social",
  },
  {
    name: "Lucas Porto",
    role: "Artist and writer",
    socials: "https://www.instagram.com/portluc/",
  },
  {
    name: "Flávio Cravero",
    role: "Compositor and writer",
    socials: "https://soundcloud.com/flaviocravero",
  }],
  externalLinks: {
    hasPressKit: false,
  }
};
