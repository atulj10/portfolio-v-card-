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
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}