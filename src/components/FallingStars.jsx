export default function FallingStars() {
  return (
    <div className="stars-layer">
      <div className="neon-orbit">
        <div className="neon-ball neon-ball--pink"></div>
        <div className="neon-ball neon-ball--blue"></div>
      </div>
      <div className="moon">
        <div className="moon-crater moon-crater--1"></div>
        <div className="moon-crater moon-crater--2"></div>
        <div className="moon-crater moon-crater--3"></div>
      </div>
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
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}