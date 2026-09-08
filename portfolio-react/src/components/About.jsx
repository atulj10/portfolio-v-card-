import data from "../data/data.json";
import SkillsCarousel from "./SkillsCarousel";

export default function About() {
  const { personal, services } = data;

  return (
    <article className="about" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {personal.about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service) => (
            <li className="service-item" key={service.title}>
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
            </li>
          ))}
        </ul>
      </section>

      <SkillsCarousel />
    </article>
  );
}
