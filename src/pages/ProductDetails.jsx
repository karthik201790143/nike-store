import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/ProductData";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="details">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  // Shoe sizes or T-shirt sizes
  const sizes =
    product.category === "tshirt"
      ? ["S", "M", "L", "XL"]
      : ["7", "8", "9", "10"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      quantity: 1,
    });

    alert("Product added to cart successfully!");
  };

  return (
    <section className="details">

      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">

        <h1>{product.name}</h1>

        <h2>₹{product.price.toLocaleString("en-IN")}</h2>

        <p>
          Experience premium comfort and performance with this Nike product.
          Perfect for sports, running, gym workouts and everyday wear.
        </p>

        <h3>Category</h3>
        <p>{product.category.toUpperCase()}</p>

        <h3>Select Size</h3>

        <div className="sizes">
          {sizes.map((size) => (
            <button
              key={size}
              className={selectedSize === size ? "active-size" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

      </div>

    </section>
  );
};

export default ProductDetails;