import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../context/themeContext";

const SWAP = { duration: 0.8, ease: "easeInOut" };

export default function FallingStars() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="stars-layer">
      <div className="neon-orbit">
        <div className="neon-ball neon-ball--pink"></div>
        <div className="neon-ball neon-ball--blue"></div>
      </div>

      <AnimatePresence initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            className="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={SWAP}
            style={{ originX: 2.43, originY: -1.14 }}
          >
            <div className="moon-crater moon-crater--1"></div>
            <div className="moon-crater moon-crater--2"></div>
            <div className="moon-crater moon-crater--3"></div>
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            className="sun-orbit"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={SWAP}
            style={{ originX: 2.43, originY: -1.14 }}
          >
            <div className="sun">
              <div className="ray_box">
                <div className="ray ray1"></div>
                <div className="ray ray2"></div>
                <div className="ray ray3"></div>
                <div className="ray ray4"></div>
                <div className="ray ray5"></div>
                <div className="ray ray6"></div>
                <div className="ray ray7"></div>
                <div className="ray ray8"></div>
                <div className="ray ray9"></div>
                <div className="ray ray10"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}
