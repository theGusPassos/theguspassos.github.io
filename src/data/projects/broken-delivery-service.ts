import Project from "../../models/project";

export const brokenDeliveryService: Project = {
  id: "broken-delivery-service",
  order: 3,
  name: "Broken Delivery Service",
  type: "Game",
  pitch: "Help the robot deliver his package to a safe location while facing difficult challenges in this 2D platformer.",
  description: "Made in 48 hours for the 2020 GMT Game Jam with the theme \"Out of Control\".\nBroken Delivery Service is a A 2D plataform that uses simple plataform challenges that become a nightmare when the player has no control over the jump timing.",
  capsuleAlt: "scene from the broken delivery service game",
  publicDir: "projects/broken-delivery-service",
  platforms: [{
    link: "https://guspassos.itch.io/broken-delivery-service",
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
    name: "Lucas Porto",
    role: "Artist",
    socials: "https://www.instagram.com/portluc/",
  },
  {
    name: "Flávio Cravero",
    role: "Compositor",
    socials: "https://soundcloud.com/flaviocravero",
  }],
  externalLinks: {
    hasPressKit: false,
  }
};
