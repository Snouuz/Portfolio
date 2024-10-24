import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import mail from "../../assets/mail.svg";
import github from "../../assets/github.svg";

const ContactMe = () => {
  return (
    <>
      <section id="contact" className="contact-container">
        <h5>Contact Me</h5>
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
              text="https://github.com/Snouuz"
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
