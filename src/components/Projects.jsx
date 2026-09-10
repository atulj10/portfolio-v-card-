import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import data from "../data/data.json";

export default function Projects() {
  const { projects, filterCategories } = data;
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  const handleSelect = (category) => {
    setActiveFilter(category);
    setSelectOpen(false);
  };

  return (
    <article className="project" data-page="project">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h2 article-title">Projects</h2>
      </motion.header>

      <motion.section
        className="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <ul className="filter-list">
          {filterCategories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={activeFilter === category ? "active" : ""}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select${selectOpen ? " active" : ""}`}
            onClick={() => setSelectOpen((prev) => !prev)}
          >
            <div className="select-value">{activeFilter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map((category) => (
              <li className="select-item" key={category}>
                <button onClick={() => handleSelect(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list" id="project-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const originalIndex = projects.indexOf(project);
              return (
                <motion.li
                  layout
                  className="project-item active"
                  data-filter-item
                  data-category={project.category.toLowerCase()}
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <a
                    className="project-container"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/project/${originalIndex}`);
                    }}
                  >
                    <figure className="project-img">
                      <img
                        style={{ objectFit: "cover" }}
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </a>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </motion.section>
    </article>
  );
}