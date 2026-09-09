import data from "../data/data.json";

export default function Contact() {
  const { contact } = data;

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <ul className="input-wrapper">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${contact.email}`} className="contact-link">
                {contact.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contact-link">
                {contact.phone}
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="mapbox">
        <figure>
          <iframe
            src={contact.mapEmbedUrl}
            width="400"
            height="300"
            loading="lazy"
            title="Location map"
          ></iframe>
        </figure>
      </section>
    </article>
  );
}