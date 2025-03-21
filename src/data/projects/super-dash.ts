import Project from "../../models/project";

export const superDash: Project = {
  order: 0,
  id: "super-dash",
  name: "Super Dash",
  type: "Game",
  pitch: "A fast paced bullet hell where your ship doesn't shoot — you dash through enemies to destroy them.\nThe game has a variety of power-ups, enemy types, and bosses that create interesting and distinct challenges when surviving through waves. The minimalist gameplay is easy to learn but hard to master.",
  description: "Get ready to dodge and dash through a barrage of bullets while collecting insane power-ups that will transform your gaming experience. With a variety of enemies and bosses that will test your reflexes and skills, each match is a new adventure.\nThe best part? Super Dash is easy to learn but a true challenge to master. Are you ready to face the chaos and become the master of the \"dash\"?",
  capsuleAlt: "super dash logo",
  publicDir: "projects/super-dash",
  externalLinks: {
    hasPressKit: true,
    trailer: "https://www.youtube.com/embed/BRRZeoSrIPI?si=9J8XAVh3Ot1rGikD",
  },
  platforms: [{
    link: "https://guspassos.itch.io/super-dash",
    name: "Itch.io",
    icon: "itch",
  },
  {
    link: "https://store.steampowered.com/app/2726350/Super_Dash/",
    name: "Steam",
    icon: "steam",
  }],
  creators: [{
    name: "Gustavo Passos",
    role: "Creator, programmer e game designer",
    photo: "gus.png",
    socials: "https://bsky.app/profile/guspassos.bsky.social",
  },
  {
    name: "Phelippe Afonso",
    role: "Compositor",
    socials: "https://www.instagram.com/heylistenofc",
  },
  {
    name: "Marcus Costa",
    role: "Game Designer",
    socials: "https://www.instagram.com/heylistenofc",
  }
]};
