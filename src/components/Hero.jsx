import React from "react";
import "./Hero.css";
import nikehero from "../assets/shoe/nikehero.jpg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="tag"> NEW COLLECTION 2026</span>

        <h1>
          RUN THE
          <br />
          FUTURE IN
          <span> STYLE</span>
        </h1>

        <p>
          Discover the newest collection of premium sneakers designed for
          performance, comfort, and everyday style. Upgrade your game with the
          latest arrivals.
        </p>

        <div className="hero-stats">
          <div>
            <h2>200+</h2>
            <p>Shoe Models</p>
          </div>

          <div>
            <h2>50K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>4.9★</h2>
            <p>Customer Rating</p>
          </div>
        </div>

      </div>

      <div className="hero-right">
        <div className="circle"></div>
        <div className="swing-hero">
  <div className="rope"></div>
  <div className="hero-figure"></div>
</div>

        <img src={nikehero} alt="Nike Shoe" className="nike-1"  />
      </div>

    </section>
  );
};

export default Hero;