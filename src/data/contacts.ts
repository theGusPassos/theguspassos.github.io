import Contact from "../models/contact";
import gmailLogo from "../images/contacts/gmail.png";
import githubLogo from "../images/contacts/github.png";
import linkedinLogo from "../images/contacts/linkedin.png";
import itchioLogo from "../images/contacts/itchio.png";
import hashnodeLogo from "../images/contacts/hashnode.png";

export const contacts: Contact[] = [
  {
    image: gmailLogo,
    altImage: "gmail logo",
    message: "mail me",
    contactText: "theguspassos@gmail.com",
  },
  {
    image: linkedinLogo,
    altImage: "linkedin logo",
    message: "connect with me",
    contactText: "linkedin.com/in/guspassos/",
    url: "https://www.linkedin.com/in/guspassos/",
  },
  {
    image: hashnodeLogo,
    altImage: "hashnode logo",
    message: "read my blog",
    contactText: "acadev.hashnode.dev",
    url: "https://acadev.hashnode.dev/",
  },
  {
    image: githubLogo,
    altImage: "github logo",
    message: "code with me",
    contactText: "github/theguspassos",
    url: "https://github.com/theGusPassos",
  },
  {
    image: itchioLogo,
    altImage: "itch.io logo",
    message: "play my games",
    contactText: "itchio/theguspassos",
    url: "https://guspassos.itch.io",
  },
];
