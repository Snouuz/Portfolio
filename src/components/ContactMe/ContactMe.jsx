import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import mail from "/icons/mail.svg";
import github from "/icons/github.svg";
import { useLanguage } from "../LanguageContext"; 
import { translate } from "../translate";

const ContactMe = () => {
  const { language } = useLanguage();
  return (
    <>
      <section id="contact" className="contact-container">
        <h5>{translate("title_Contact_Me", language)} </h5>
        <div className="contact-content">
          <div style={{ flex: 1 }}>
            <a href=""></a>
            <ContactInfoCard
              iconUrl={mail}
              text="reda.roig@gmail.com"
              link="mailto:reda.roig@gmail.com"
            />
            <ContactInfoCard
              iconUrl={github}
              text="Github"
              link="https://github.com/Snouuz"
            />
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactMe;
