import React from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Thank your for connecting! I'll be in touch soon!");
  }

  return (
    <div className="contactContainer">
      <h1 className="contactHeader">GET ON THE GOOD FOOT</h1>
      <div className="flexContainer">
        <p>
          Reach out and let us know how we can help you & your event get on the
          Good Foot. Our goal is to facilitate success for performers, venues,
          festivals and events through constantly evolving creative management.
          We have worked with top quality talent, festivals and venues both
          locally and nationally. We relish every opportunity to make events
          worthwhile, create memorable experiences, and take great pride in our
          reputation for doing so with an upbeat positive energy.
        </p>
        <br />
        <br />
        <br />
        <form className="contact-form" onSubmit={sendEmail}>
          {/* <input type="hidden" name="contact_number" /> */}
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
          <label>Message</label>
          <textarea name="message" placeholder="Drop me a line..." required />
          <input id="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
