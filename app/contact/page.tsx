import React from "react";
import ContactLinks from "@/components/contact/contact-links";
import EmailForm from "@/components/contact/email-form";
import { cn } from "@/lib/utils";

const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className={cn("pb-4")}>Contact</h1>
      <ContactLinks />
      <EmailForm />
    </React.Fragment>
  );
};

export default Contact;
