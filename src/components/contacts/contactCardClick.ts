import Contact from "../../models/contact";

export const onCardClick = (contact: Contact) => {
  if (contact.url) {
    let windowRef = window.open(contact.url, "_blank");
    windowRef = null;
  }
};

export const onCardKeyDown = (e: any, contact: Contact) => {
  if (e.keyCode === 13 || e.charCode === 13) onCardClick(contact);
};
