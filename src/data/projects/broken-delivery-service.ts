import Project from "../../models/project";

export const brokenDeliveryService: Project = {
  id: "broken-delivery-service",
  order: 3,
  name: "Broken Delivery Service",
  type: "Game",
  pitch: "",
  description:
    "Game made for the GMTK Jam 2020 in 42 hours. Made together with the Last Minute Team: @portluc and @flaviocravero.",
  capsuleAlt: "scene from the broken delivery service game",
  publicDir: "projects/broken-delivery-service",
  platforms: [{
    link: "https://guspassos.itch.io/broken-delivery-service",
    name: "Itch.io",
    icon: "itch",
  }],
  creators: [],
  externalLinks: {
    hasPressKit: false,
  }
};
