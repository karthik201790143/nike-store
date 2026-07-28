import { useCart } from "../context/CartContext";
import "./Profile.css";

const Profile = () => {
  const { orders } = useCart();

  const totalSpent = orders.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="profile">

      {/* Left Profile Card */}

      <div className="profile-card">

        <img
          src="https://static.vecteezy.com/system/resources/previews/038/512/035/non_2x/cute-boy-face-logo-design-free-vector.jpg"
          alt="Profile"
        />

        <h2>Sajja Srikanth</h2>

        <p>📧 sajjasrikanth@gmail.com</p>

        <p>📞 +91 9876543210</p>

        <p>📍 Hyderabad, Telangana</p>

        <div className="profile-stats">

          <div className="stat">
            <h3>{orders.length}</h3>
            <span>Orders</span>
          </div>

          <div className="stat">
            <h3>12</h3>
            <span>Wishlist</span>
          </div>

          <div className="stat">
            <h3>Gold</h3>
            <span>Member</span>
          </div>

        </div>

        <div className="total-spent">
          <h3>Total Spent</h3>

          <h2>
            ₹{totalSpent.toLocaleString("en-IN")}
          </h2>
        </div>

      </div>

      {/* Right Orders Section */}

      <div className="recent-orders">

        <h2>Recent Orders</h2>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h3>No Recent Orders</h3>
          </div>
        ) : (
          orders
            .slice()
            .reverse()
            .slice(0, 5)
            .map((item, index) => (
              <div className="recent-card" key={index}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="order-details">

                  <h3>{item.name}</h3>

                  <p>
                    <strong>Size:</strong> {item.size}
                  </p>

                  <p>
                    <strong>Qty:</strong> {item.quantity}
                  </p>

                  <p>
                    <strong>Date:</strong> {item.orderDate}
                  </p>

                  <p>
                    <strong>Time:</strong> {item.orderTime}
                  </p>

                  <div className="order-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </div>

                </div>

                <span className="order-status">
                  {item.status}
                </span>

              </div>
            ))
        )}

      </div>

    </section>
  );
};

export default Profile;