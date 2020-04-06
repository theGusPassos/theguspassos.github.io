import React from "react";
import LinkButton from "../common/LinkButton";

const ContactsButton = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <LinkButton onClick={() => setIsOpen(true)}>My Contacts</LinkButton>
    </div>
  );
};

export default ContactsButton;
