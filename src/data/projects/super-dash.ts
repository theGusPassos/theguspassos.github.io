import Project from "../../models/project";

export const superDash: Project = {
  order: 0,
  id: "super-dash",
  name: "Super Dash",
  type: "Game",
  pitch: "Super Dash é um jogo frenético do gênero rogue-lite e bullet-hell, onde sua nave faz mais do que atirar – ela passa por cima dos inimigos, literalmente!",
  description: "Prepare-se para desviar e atravessar uma avalanche de tiros enquanto coleta power-ups insanos que vão transformar sua experiência de jogo. Com uma diversidade de inimigos e chefões que vão testar seus reflexos e habilidades, cada partida é uma nova aventura.\nO melhor de tudo? Super Dash é fácil de aprender, mas um verdadeiro desafio para dominar. Você está pronto para enfrentar o caos e se tornar o mestre do \"dash\"?",
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
    role: "Criador, programador e game designer",
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
