import { useEffect, useRef } from "react";
import { useTheme } from "../context/themeContext";

export default function ShootingStars() {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;

    const clearStars = () =>
      container.querySelectorAll("span").forEach((span) => span.remove());

    if (theme !== "dark") {
      clearStars();
      return;
    }

    let timeout;

    const createStar = () => {
      const span = document.createElement("span");
      span.className = "shooting-star";

      const fromTop = Math.random() > 0.5;
      if (fromTop) {
        span.style.left = `${Math.random() * 100}%`;
        span.style.top = "0";
      } else {
        span.style.left = "100%";
        span.style.top = `${Math.random() * 100}%`;
      }

      span.style.setProperty("--distance", `${600 + Math.random() * 500}px`);
      span.style.setProperty("--duration", `${0.9 + Math.random() * 0.7}s`);

      container.appendChild(span);
      span.addEventListener("animationend", () => span.remove());
    };

    const spawn = () => {
      createStar();
      if (Math.random() < 0.35) {
        createStar();
      }
    };

    const schedule = () => {
      timeout = setTimeout(() => {
        spawn();
        schedule();
      }, 1200 + Math.random() * 1800);
    };

    spawn();
    schedule();

    return () => {
      clearTimeout(timeout);
      clearStars();
    };
  }, [theme]);

  return (
    <div className="shooting-stars" ref={containerRef} aria-hidden="true"></div>
  );
}