import Wrapper from "./Wrapper";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xcu23z8",
        "template_nhvwsku",
        form.current,
        "Se1MdLD1YQpSKk_Qd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Wrapper>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>fazliddin0815@gmail.com</h5>
              <a href="mailto:fazliddin0815@gmail.com" target="balnk">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsTelegram className="contact__option-icon" />
              <h4>Telegram</h4>
              <h5>@fazliddinrasulov</h5>
              <a href="https://t.me/fazliddinrasulov/" target="blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsLinkedin className="contact__option-icon" />
              <h4>Linkedin</h4>
              <h5>fazliddin-rasulov</h5>
              <a
                href="https://www.linkedin.com/in/fazliddin-rasulov/"
                target="blank"
              >
                Send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
