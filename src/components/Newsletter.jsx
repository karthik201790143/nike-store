import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">

      <div className="newsletter-container">

        <div className="newsletter-left">
          <h1>
            JOIN THE <span>NIKE</span> COMMUNITY
          </h1>

          <p>
            Subscribe to receive exclusive sneaker drops, early access,
            discounts, member-only collections, and the latest Nike news.
          </p>
        </div>

        <div className="newsletter-right">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;