import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; 
import { translate } from "../../translate";


const ContactForm = () => {
  const { language } = useLanguage();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setErrors({});
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const firstname = formData.get("firstname").trim();
    const lastname = formData.get("lastname").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    const newErrors = {};
    if (!firstname) newErrors.firstname = translate("FirstName_error", language);
    if (!lastname) newErrors.lastname = translate("LastName_error", language);
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = translate("Email_error", language);
    }
    if (!message) newErrors.message = translate("Message_error", language);

    setErrors(newErrors);
    setIsSubmitted(true);

    if (Object.keys(newErrors).length > 0) return;

    setIsSending(true);
    emailjs
      .sendForm("service_mh5vhv6", "template_hygmyrm", form.current, "VPt-jEXPYzc2UFUDe")
      .then(
        () => {
          resetEmail();
          setIsSending(false);
        },
        () => {
          setIsSending(false);
        }
      );
  };

  const resetEmail = () => {
    form.current.reset();
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-form-content">
      <form id="myform" ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <div className="input-identity">
            <input type="text" name="firstname" placeholder={translate("FirstName", language)} />
            {isSubmitted && errors.firstname && (
              <div className="error visible">{errors.firstname}</div>
            )}
          </div>
          <div className="input-identity">
            <input type="text" name="lastname" placeholder={translate("LastName", language)} />
            {isSubmitted && errors.lastname && (
              <div className="error visible">{errors.lastname}</div>
            )}
          </div>
        </div>
        <div className="input-field">
          <input type="text" name="email" placeholder="Email" />
          {isSubmitted && errors.email && (
            <div className="error visible">{errors.email}</div>
          )}
        </div>
        <div className="input-field">
          <textarea name="message" placeholder="Message" rows={3}></textarea>
          {isSubmitted && errors.message && (
            <div className="error visible">{errors.message}</div>
          )}
        </div>
        <input
          className="button"
          type="submit"
          value={isSending ? "Sending..." : translate("send", language)}
          disabled={isSending}
        />
      </form>
    </div>
  );
};

export default ContactForm;
