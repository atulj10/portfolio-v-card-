import { useEffect, useRef } from "react";
import data from "../data/data.json";

export default function SkillsCarousel() {
  const carouselRef = useRef(null);
  const { skillCategories } = data;

  useEffect(() => {
    let autoScrollInterval;
    let isScrolling = false;

    const scrollToGroup = (index) => {
      isScrolling = true;
      carouselRef.current.scrollTo({
        top: index * carouselRef.current.clientHeight,
        behavior: "smooth",
      });
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    const startInterval = () => {
      autoScrollInterval = setInterval(() => {
        if (!isScrolling && document.hasFocus()) {
          const currentIndex = Math.round(
            carouselRef.current.scrollTop / carouselRef.current.clientHeight
          );
          scrollToGroup(
            ((currentIndex + 1) % skillCategories.length + skillCategories.length) %
              skillCategories.length
          );
        }
      }, 200);
    };

    const handleMouseEnter = () => clearInterval(autoScrollInterval);
    const handleMouseLeave = startInterval;

    startInterval();
    const el = carouselRef.current;
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(autoScrollInterval);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [skillCategories.length]);

  return (
    <section className="skills-carousel-section">
      <h3 className="h3 service-title">My Skills</h3>
      <div className="skills-carousel-wrapper">
        <div className="skills-carousel" ref={carouselRef}>
          {skillCategories.map((category) => (
            <div className="skills-group" key={category.name}>
              <div className="skills-category-header">
                <span className="skills-category-name">{category.name}</span>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-card-icon">
                      <ion-icon name={skill.icon}></ion-icon>
                    </div>
                    <p className="skill-card-name">{skill.name}</p>
                    <div className="skill-level-bar">
                      <div
                        className="skill-level-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-level-text">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
