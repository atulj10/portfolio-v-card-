import { useEffect, useState } from "react";
import data from "../data/data.json";

const TEXT = "Welcome \n Hi I'm Atul ";
const TYPE_DURATION = 2000;
const HOLD = 500;
const FADE = 800;

export default function SplashScreen({ children }) {
  const [chars, setChars] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (gone) return;

    if (chars < TEXT.length) {
      const t = setTimeout(
        () => setChars((c) => c + 1),
        TYPE_DURATION / TEXT.length
      );
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setFading(true), HOLD);
    return () => clearTimeout(t);
  }, [gone, chars]);

  useEffect(() => {
    if (!fading) return;

    const t = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, FADE);
    return () => clearTimeout(t);
  }, [fading]);

  const active = !gone;
  const wrapperClass = `site-wrapper${
    fading && active
      ? " site-wrapper--fade-in"
      : !active
        ? " site-wrapper--visible"
        : ""
  }`;

  return (
    <>
      {active && (
        <div className={`splash-screen${fading ? " splash-screen--fade-out" : ""}`}>
          <img
            className="splash-avatar"
            src={data.personal.avatar}
            alt={data.personal.name}
            draggable="false"
          />
          <h1 className="splash-text">
            {TEXT.slice(0, chars)}
            <span className="splash-caret" >
              |
            </span>
          </h1>
        </div>
      )}

      <div className={wrapperClass}>{children}</div>
    </>
  );
}