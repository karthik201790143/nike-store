import React, { useState, useEffect } from "react";
import "./Gallery.css";

import g1 from "../assets/shoe/gallery/g1.jpg";
import g2 from "../assets/shoe/gallery/g2.jpg";
import g3 from "../assets/shoe/gallery/g3.jpg";
import g4 from "../assets/shoe/gallery/g4.jpg";
import g5 from "../assets/shoe/gallery/g5.jpg";
import g6 from "../assets/shoe/gallery/g6.jpg";
import g7 from "../assets/shoe/gallery/g7.jpg";
import g8 from "../assets/shoe/gallery/g8.jpg";
import g9 from "../assets/shoe/gallery/g9.jpg";

const slides = [
  [g1, g2, g3],
  [g4, g5, g6],
  [g7, g8, g9],
];

const Gallery = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery">

      <h1>New Collection</h1>

      <div className="slider">

        <button className="btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="slide">

          {slides[currentSlide].map((img, index) => (
            <img key={index} src={img} alt="Nike Shoe" />
          ))}

        </div>

        <button className="btn right" onClick={nextSlide}>
          ❯
        </button>

      </div>

    </section>
  );
};

export default Gallery;