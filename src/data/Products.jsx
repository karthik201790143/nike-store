import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import products from "./ProductData";

const Products = ({ search = "", category, title }) => {
  const filteredProducts = products.filter((item) => {
    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch = category
      ? item.category === category
      : true;

    return searchMatch && categoryMatch;
  });

  return (
    <section className="products">
      <h1>{title || "Trending Products"}</h1>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹{item.price.toLocaleString("en-IN")}</p>

              <Link to={`/product/${item.id}`}>
                <button>View Product</button>
              </Link>
            </div>
          ))
        ) : (
          <h2
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            No Products Found 👟
          </h2>
        )}
      </div>
    </section>
  );
};

export default Products;