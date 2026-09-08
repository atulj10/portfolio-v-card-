import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FallingStars from "./components/FallingStars";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <FallingStars />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="project" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}