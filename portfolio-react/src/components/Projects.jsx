import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
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
          {filteredProjects.map((project) => {
            const originalIndex = projects.indexOf(project);
            return (
              <li
                className="project-item active"
                data-filter-item
                data-category={project.category.toLowerCase()}
                key={project.title}
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
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}