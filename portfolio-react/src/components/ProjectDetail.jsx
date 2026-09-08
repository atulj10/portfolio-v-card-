import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = Number(id);
  const project = data.projects[index];

  if (!project) {
    return (
      <article className="project-details">
        <header>
          <button className="back-btn" onClick={() => navigate("/project")}>
            <ion-icon name="arrow-back"></ion-icon> Back to Projects
          </button>
          <h2 className="h2 detail-title">Project not found</h2>
        </header>
      </article>
    );
  }

  return (
    <article className="project-details" data-page="project-details">
      <header>
        <button className="back-btn" onClick={() => navigate("/project")}>
          <ion-icon name="arrow-back"></ion-icon> Back to Projects
        </button>
        <h2 className="h2 detail-title">{project.title}</h2>
      </header>

      <section className="project-detail-content">
        <div className="main-div">
          <figure className="project-detail-img">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              style={{ maxHeight: "50vh" }}
            />
          </figure>

          {project.issue && (
            <div className="warning-box">
              <p>
                <strong>Note:</strong> {project.issue} Apologies for the
                inconvenience
              </p>
            </div>
          )}

          <div className="project-info">
            <ul className="tech-stack-list">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div
              className="project-text"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ion-icon name="logo-github"></ion-icon> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ion-icon name="globe-outline"></ion-icon> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}