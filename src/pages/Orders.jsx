import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Orders.css";

const Orders = () => {
  const { orders } = useCart();

  const [selectedDate, setSelectedDate] = useState("");

  const filteredOrders = selectedDate
    ? orders.filter((item) => item.orderDate === selectedDate)
    : orders;

  return (
    <section className="orders-container">

      <div className="orders-header">

        <h1>📦 Recent Orders</h1>

        <div className="date-filter">
          <label>Select Date</label>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

      </div>

      {filteredOrders.length === 0 ? (
        <div className="empty-orders">
          <h2>No Orders Found 😔</h2>
        </div>
      ) : (
        filteredOrders.map((item, index) => (
          <div className="order-card" key={index}>

            <img
              src={item.image}
              alt={item.name}
              className="order-image"
            />

            <div className="order-details">

              <h2>{item.name}</h2>

              <p>
                <strong>Price :</strong> ₹
                {item.price.toLocaleString("en-IN")}
              </p>

              <p>
                <strong>Size :</strong> {item.size}
              </p>

              <p>
                <strong>Quantity :</strong> {item.quantity}
              </p>

              <p>
                <strong>Order Date :</strong> {item.orderDate}
              </p>

              <p>
                <strong>Order Time :</strong> {item.orderTime}
              </p>

            </div>

            <div className="status-section">

              <span className="status">
                {item.status}
              </span>

            </div>

          </div>
        ))
      )}

    </section>
  );
};

export default Orders;