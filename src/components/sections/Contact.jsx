import { Mail, Send } from "lucide-react";

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

function Contact() {
  return (
    <section id="kontak" className="section-pad">
      <div className="wrap contact-wrapper">
        <Reveal>
          <div className="contact-card">
            <Eyebrow>Contact & Social Media</Eyebrow>

            <h2 className="font-display contact-title">
              You have a project? Lets talk it.
            </h2>

            <p className="contact-description">
              Terbuka untuk proyek freelance, kolaborasi, atau sekadar ngobrol
              soal produk digital. Silakan hubungi lewat salah satu channel saya
              di bawah.
            </p>

            <div className="contact-grid">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=a.iqbal27112005@gmail.com"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={17} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/ahmad-iqbal-software-engineer"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={17} />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/amd_ibl/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={17} />
                Instagram
              </a>

              <a
                href="https://discord.com/users/1188651593952936028"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={17} />
                Discord
              </a>

              <a
                href="https://wa.me/6281919511189"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={17} />
                WhatsApp
              </a>

              <a
                href="https://github.com/AhmadIqbalFE"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={17} />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
