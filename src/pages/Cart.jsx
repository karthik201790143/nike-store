import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    checkout,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              className="cart-card"
              key={`${item.id}-${item.size}`}
            >
              <img src={item.image} alt={item.name} />

              <div>
                <h2>{item.name}</h2>

                <p>₹{item.price}</p>

                <p>Size : {item.size}</p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQty(item.id, item.size)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQty(item.id, item.size)
                    }
                  >
                    +
                  </button>

                </div>

                <button
  className="remove-btn"
  onClick={() => removeFromCart(item.id, item.size)}
>
  Remove
</button>
              </div>
            </div>
          ))}

          <h2>Total : ₹{total}</h2>

          <button
            className="checkout-btn"
            onClick={checkout}
          >
            Checkout
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;