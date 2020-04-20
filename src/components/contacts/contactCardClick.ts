import Contact from "../../models/contact";
import { copyToClipboard } from "../../common-functions/copyToClipboard";
import { toast } from "react-toastify";
import { goToExternalPage } from "../../common-functions/goToExternalPage";

export const onCardClick = (contact: Contact) => {
  if (contact.url) {
    goToExternalPage(contact.url);
  } else {
    copyToClipboard(contact.contactText);
    toast.info(`my e-mail has been copied to your clipboard =)`, {
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
