import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">

      <h1>About Nike</h1>

      <p>
        Nike is one of the world's leading sportswear brands,
        known for innovation, premium quality, and iconic designs.
        From professional athletes to everyday fitness enthusiasts,
        Nike inspires people to push beyond their limits.
      </p>

      <div className="about-boxes">

        <div>
          <h2>1964</h2>
          <p>Founded</p>
        </div>

        <div>
          <h2>190+</h2>
          <p>Countries</p>
        </div>

        <div>
          <h2>75,000+</h2>
          <p>Employees</p>
        </div>

        <div>
          <h2>100M+</h2>
          <p>Customers</p>
        </div>

      </div>

    </section>
  );
};

export default About;