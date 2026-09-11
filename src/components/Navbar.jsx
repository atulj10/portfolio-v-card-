import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/themeContext";

const links = ["about", "resume", "project", "blog", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <ul className="navbar-list">
        {links.map((link, i) => (
          <motion.li
            className="navbar-item"
            key={link}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
          >
            <NavLink
              to={`/${link === "about" ? "" : link}`}
              end={link === "about"}
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      >
        <ion-icon name={isDark ? "sunny-outline" : "moon-outline"}></ion-icon>
      </motion.button>
    </motion.nav>
  );
}
