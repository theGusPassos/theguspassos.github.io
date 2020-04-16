import Contact from "../models/contact";
import gmailLogo from "../images/contacts/gmail.png";
import githubLogo from "../images/contacts/github.png";
import linkedinLogo from "../images/contacts/linkedin.png";

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
    contactText: "linkedin.com/in/theguspassos/",
    url: "https://www.linkedin.com/in/theguspassos/",
  },
  {
    image: githubLogo,
    altImage: "github logo",
    message: "code with me",
    contactText: "github/theguspassos",
    url: "https://github.com/theGusPassos",
  },
];
