import { motion } from "framer-motion";
import data from "../data/data.json";

export default function Contact() {
  const { contact } = data;

  return (
    <article className="contact" data-page="contact">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h2 article-title">Contact</h2>
      </motion.header>

      <motion.section
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <ul className="input-wrapper">
          {[
            {
              icon: "mail-outline",
              title: "Email",
              children: (
                <a href={`mailto:${contact.email}`} className="contact-link">
                  {contact.email}
                </a>
              ),
            },
            {
              icon: "phone-portrait-outline",
              title: "Phone",
              children: (
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="contact-link"
                >
                  {contact.phone}
                </a>
              ),
            },
          ].map((item, i) => (
            <motion.li
              className="contact-item"
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="icon-box">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">{item.title}</p>
                {item.children}
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="mapbox"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <figure>
          <iframe
            src={contact.mapEmbedUrl}
            width="400"
            height="300"
            loading="lazy"
            title="Location map"
          ></iframe>
        </figure>
      </motion.section>
    </article>
  );
}