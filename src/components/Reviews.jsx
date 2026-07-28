import React from "react";

import "./review.css"
import rohith from "../assets/shoe/review/rohith.jpeg";
import ali from "../assets/shoe/review/ali.jpeg";
import srikanth from "../assets/shoe/review/srikanth.jpeg";

const reviews = [
  {
    id: 1,
    name: "S.Rohith",
    image: rohith,
    rating: "★★★★★",
    review:
      "Absolutely love the Nike Air Max! The comfort is outstanding and the quality is top-notch.",
  },
  {
    id: 2,
    name: "M.Ali",
    image: ali,
    rating: "★★★★★",
    review:
      "Fast delivery, premium quality and stylish design. Worth every rupee.",
  },
  {
    id: 3,
    name: "S.Srikanth",
    image: srikanth,
    rating: "★★★★☆",
    review:
      "Perfect running shoes with excellent cushioning. Highly recommended for athletes.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <h1>Customer Reviews</h1>

      <div className="review-container">
        {reviews.map((item) => (
          <div className="review-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <h4 className="rating">{item.rating}</h4>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;