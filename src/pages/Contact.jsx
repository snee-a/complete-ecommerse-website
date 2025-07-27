import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
        {success && <p className="success-text">Message sent successfully!</p>}
      </form>

      <div className="socials">
        <h3>Connect with me:</h3>
        <a href="https://www.instagram.com/sne_a55" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://github.com/snee-a" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/sneha-pandey-a530342b3/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
