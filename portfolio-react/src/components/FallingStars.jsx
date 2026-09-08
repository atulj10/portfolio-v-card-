import { useEffect } from "react";

export default function FallingStars() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "stars-container";
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const size = Math.random() * 5 + 1;
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 10;
      const left = Math.random() * 100;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${left}%`;
      star.style.top = `-10vh`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;

      if (Math.random() > 0.7) {
        star.style.boxShadow = `0 0 ${Math.random() * 5 + 5}px white`;
      }

      container.appendChild(star);
    }

    return () => {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, []);

  return null;
}
