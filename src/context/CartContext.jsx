import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    const existing = cartItems.find(
      (item) =>
        item.id === product.id &&
        item.size === product.size
    );

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id &&
          item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (id, size) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          !(item.id === id && item.size === size)
      )
    );
  };

  const increaseQty = (id, size) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, size) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id &&
        item.size === size &&
        item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

const checkout = () => {
  const newOrders = cartItems.map((item) => ({
    ...item,
    orderDate: new Date().toISOString().split("T")[0], // Example: 2026-07-28
    orderTime: new Date().toLocaleTimeString("en-IN"),
    status: "Delivered",
  }));

  setOrders((prevOrders) => [...prevOrders, ...newOrders]);
  setCartItems([]);
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);