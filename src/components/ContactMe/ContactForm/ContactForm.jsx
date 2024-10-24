import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mh5vhv6", "template_hygmyrm", form.current, {
        publicKey: "VPt-jEXPYzc2UFUDe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          resetEmail();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const resetEmail = () => {
    document.getElementById("myform").reset();
  };
  {
    return (
      <div className="contact-form-contant">
        <form id="myform" ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <div className="input-identity">
              <input type="text" name="firstname" placeholder="First Name" />
              <div className="error-txt error">Firtname can't be blank</div>
            </div>
            <div className="input-identity">
              <input type="text" name="lastname" placeholder="Last Name" />
              <div className="error-txt error">Lastname can't be blank</div>
            </div>
          </div>
          <input type="text" name="email" placeholder="Email" />
          <div className="error-email-message error">
            Email address can't be blank
          </div>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            rows={3}
          ></textarea>
          <div className="error-email-message error">
            Message can't be blank
          </div>

          <input className="button" type="submit" value="SEND" />
        </form>
      </div>
    );
  }
};
export default ContactForm;
