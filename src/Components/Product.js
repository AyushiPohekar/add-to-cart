import React, { useState } from "react";
import "./Product.css";
import Navbar from "./Navbar";

export default function Product({
  product,
  sale,
  handleClick,
  cart,
  setCart,
  id,
}) {
  const handleRemove = (id) => {
    const arr = () => cart.filter((pr) => pr.id !== id);
    setCart(arr);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
      <div className="card ProductCard">
        {sale && (
          <div className="badge bg-dark text-white Productbadge ">Sale</div>
        )}

        {/* Image */}
        <img
          src={product.img}
          className="card-img-top Productimg"
          alt="product-image"
        />

        {/* Details */}
        <div className="card-body text-center">
          {/* title */}
          <h5 className="card-title producttitle">{product.title}</h5>
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p className="card-text Producttext">
            <span className="text-muted Productspan">{product.mutedprice}</span>
            {product.price}
          </p>
          <a
            type="button"
            class="btn btn-outline-dark"
            href="#"
            style={{ color: "green", fontWeight: "bold", marginBottom: 10 }}
            onClick={() => handleClick(product)}
          >
            Add to Cart
          </a>
          <a
            type="button"
            class="btn btn-outline-dark"
            id={"btn" + id}
            href="#"
            style={{ color: "red", fontWeight: "bold", marginBottom: 10 }}
            onClick={() => handleRemove(id)}
          >
            Remove from cart
          </a>
        </div>
      </div>
    </div>
  );
}

function starRating(value) {
  let stars = [];
  let i = 1;
  if (!(value > 5)) {
    while (i <= value) {
      stars.push(<div key={i++} className="bi-star-fill"></div>);
    }
    if (value % 1 !== 0) {
      stars.push(<div key={i++} className="bi-star-half"></div>);
    }
  }
  while (i <= 5) {
    stars.push(<div key={i++} className="bi-star"></div>);
  }
  return stars;
}
