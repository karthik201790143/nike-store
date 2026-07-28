import React from "react";
import "./Athlete.css";
import athlete1 from "../assets/shoe/athletes/athlete1.jpg";
import athlete2 from "../assets/shoe/athletes/athlete2.jpg";
import athlete3 from "../assets/shoe/athletes/athlete3.jpg";
const Athletes = () => {
  return (
    <section className="athletes">
      <h1>Nike Athletes</h1>

     <div className="athlete-grid">

  <div className="athlete-card">
    <img src={athlete1} alt="Michael Jordan" />
    <h3>Michael Jordan</h3>
    <p>Basketball Legend</p>
  </div>

  <div className="athlete-card">
    <img src={athlete2} alt="Cristiano Ronaldo" />
    <h3>Cristiano Ronaldo</h3>
    <p>Football Legend</p>
  </div>

  <div className="athlete-card">
    <img src={athlete3} alt="LeBron James" />
    <h3>LeBron James</h3> 
    <p>NBA Superstar</p>
  </div>

</div>
    </section>
  );
};

export default Athletes;