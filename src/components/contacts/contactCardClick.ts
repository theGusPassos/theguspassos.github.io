import Contact from "../../models/contact";
import { copyToClipboard } from "../../shared/copyToClipboard";
import { toast } from "react-toastify";

export const onCardClick = (contact: Contact) => {
  if (contact.url) {
    let windowRef = window.open(contact.url, "_blank");
    if (windowRef) windowRef.opener = null;
  } else {
    copyToClipboard(contact.contactText);
    toast.info(`my e-mail was copied to your clipboard =)`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  }
};

export const onCardKeyDown = (e: any, contact: Contact) => {
  if (e.keyCode === 13 || e.charCode === 13) onCardClick(contact);
};
