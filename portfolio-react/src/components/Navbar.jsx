import { NavLink } from "react-router-dom";

const links = ["about", "resume", "project", "blog", "contact"];

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li className="navbar-item" key={link}>
            <NavLink
              to={`/${link === "about" ? "" : link}`}
              end={link === "about"}
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
