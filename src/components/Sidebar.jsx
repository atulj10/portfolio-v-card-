import { useState } from "react";
import { motion } from "framer-motion";
import data from "../data/data.json";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  const { personal, contacts } = data;

  return (
    <motion.aside
      className={`sidebar${showContacts ? " active" : ""}`}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="sidebar-info">
        <motion.figure
          className="avatar-box"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={personal.avatar} alt={personal.name} width="80" />
        </motion.figure>

        <motion.div
          className="info-content"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="name" title={personal.name}>
            {personal.name}
          </h1>
          <p className="title">{personal.title}</p>
        </motion.div>

        <button
          className="info_more-btn"
          onClick={() => setShowContacts((prev) => !prev)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${contacts.email}`} className="contact-link">
                {contacts.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${contacts.phone.replace(/\s/g, "")}`} className="contact-link">
                {contacts.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time>{contacts.birthday}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{contacts.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {contacts.social.map((social, i) => (
            <motion.li
              className="social-item"
              key={social.platform}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                className="social-link"
              >
                <ion-icon
                  className="socials-icons"
                  name={`logo-${social.platform}`}
                ></ion-icon>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
