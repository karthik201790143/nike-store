import React from "react";
import "./CustomerService.css";

const CustomerService = () => {
  return (
    <section className="customer-service">

      <div className="service-header">
        <h1>Customer Service</h1>
        <p>
          We're here to help you with your orders, returns, shipping,
          payments, and any questions about Nike products.
        </p>
      </div>

      <div className="service-container">

        <div className="service-card">
          <h2>📦 Track Your Order</h2>
          <p>
            Check your shipment status and estimated delivery date using your
            order ID.
          </p>
        </div>

        <div className="service-card">
          <h2>↩ Easy Returns</h2>
          <p>
            Return or exchange products within 30 days in their original
            condition.
          </p>
        </div>

        <div className="service-card">
          <h2>🚚 Shipping Information</h2>
          <p>
            Free shipping on orders above ₹3,999. Standard delivery takes
            3–7 business days.
          </p>
        </div>

        <div className="service-card">
          <h2>💳 Payment Options</h2>
          <p>
            Secure payments via UPI, Credit Card, Debit Card, Net Banking and
            Cash on Delivery.
          </p>
        </div>

        <div className="service-card">
          <h2>❓ Frequently Asked Questions</h2>
          <ul>
            <li>How do I track my order?</li>
            <li>How do I cancel an order?</li>
            <li>What is the return policy?</li>
            <li>How can I exchange a product?</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>📞 Contact Us</h2>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@myshoestore.com</p>
          <p><strong>Hours:</strong> Monday – Saturday (9:00 AM – 7:00 PM)</p>
          <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
        </div>

      </div>

    </section>
  );
};

export default CustomerService;