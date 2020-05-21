import React from "react";
import DeviceInfo from "../../models/deviceInfo";
import ContactsButton from "./ContactsButton";
import ContactIcons from "./ContactIcons";

interface ContactChooser extends DeviceInfo {}

const ContactChooser = (props: ContactChooser) => {
  return props.deviceType.isDesktop ? (
    <ContactIcons></ContactIcons>
  ) : (
    <ContactsButton></ContactsButton>
  );
};

export default ContactChooser;
