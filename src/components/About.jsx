import { motion } from "framer-motion";
import data from "../data/data.json";
import SkillsCarousel from "./SkillsCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function About() {
  const { personal, services } = data;

  return (
    <article className="about" data-page="about">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h2 article-title">About me</h2>
      </motion.header>

      <section className="about-text">
        {personal.about.map((para, i) => (
          <motion.p
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={i}
          >
            {para}
          </motion.p>
        ))}
      </section>

      <motion.section
        className="service"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, i) => (
            <motion.li
              className="service-item"
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={i}
            >
              <div className="service-icon-box">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width="40"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <SkillsCarousel />
    </article>
  );
}
