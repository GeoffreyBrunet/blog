import React from "react";
import ContactLinks from "@/components/contact-links";
import EmailForm from "@/components/email-form";

const Contact = () => {
  return (
    <React.Fragment>
      <h1 className="pb-4">Contact</h1>
      <ContactLinks />
      <EmailForm />
    </React.Fragment>
  );
};

export default Contact;
