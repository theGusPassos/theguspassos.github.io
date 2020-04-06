import Contact from "../models/contact";
import gmailLogo from "../images/contacts/gmail.png";
import githubLogo from "../images/contacts/github.png";
import linkedinLogo from "../images/contacts/linkedin.png";

export const contacts: Contact[] = [
  {
    image: gmailLogo,
    message: "mail me",
    contactText: "theguspassos@gmail.com",
  },
  {
    image: linkedinLogo,
    message: "connect with me",
    contactText: "linkedin.com/in/theguspassos/",
  },
  {
    image: githubLogo,
    message: "code with me",
    contactText: "github/theguspassos",
  },
];
