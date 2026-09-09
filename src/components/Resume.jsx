import data from "../data/data.json";

export default function Resume() {
  const { experience, resumePdf } = data;

  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((job, index) => (
            <li className="timeline-item" key={`${job.company}-${index}`}>
              <h4 className="h4 timeline-item-title">
                {job.company}
                {job.url && (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon name="link" size="large"></ion-icon>
                  </a>
                )}
              </h4>
              <span>{job.duration}</span>
              <p className="timeline-text">
                {job.role && <strong>{job.role}</strong>}
                {job.role ? " " : ""}
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <li className="service-item" style={{ marginTop: 20 }}>
        <div className="service-content-box">
          <h4 className="h4 service-item-title">
            <a
              href={resumePdf}
              download="Atul-Anand-Resume.pdf"
              style={{
                color: "#ceb15a",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <ion-icon name="download" size="large"></ion-icon>
              Click here to download my Resume
            </a>
          </h4>
        </div>
      </li>
    </article>
  );
}
