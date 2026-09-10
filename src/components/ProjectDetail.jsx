import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../data/data.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = Number(id);
  const project = data.projects[index];

  if (!project) {
    return (
      <motion.article
        className="project-details"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header>
          <button className="back-btn" onClick={() => navigate("/project")}>
            <ion-icon name="arrow-back"></ion-icon> Back to Projects
          </button>
          <h2 className="h2 detail-title">Project not found</h2>
        </header>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="project-details"
      data-page="project-details"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <button className="back-btn" onClick={() => navigate("/project")}>
          <ion-icon name="arrow-back"></ion-icon> Back to Projects
        </button>
        <motion.h2
          className="h2 detail-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {project.title}
        </motion.h2>
      </header>

      <motion.section
        className="project-detail-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.25, staggerChildren: 0.1 },
          },
        }}
      >
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
            <motion.div
              className="warning-box"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p>
                <strong>Note:</strong> {project.issue} Apologies for the
                inconvenience
              </p>
            </motion.div>
          )}

          <div className="project-info">
            <motion.ul
              className="tech-stack-list"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
              }}
            >
              {project.techStack.map((tech) => (
                <motion.li
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="project-text"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></motion.div>

            <motion.div
              className="project-links"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
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
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.article>
  );
}