import React from "react";
import "./liked.css";
import "./shoppingcart.css";
import { Link } from "react-router-dom";

export default function Liked({ likedItems, handleAddProductDetails }) {
  return (
    <div className="container_liked">
      <h2 className="mylikes">My Favourites</h2>

      {likedItems.map((item) => (
        <div key={item.id} className="cart_container">
          <div className="single_item_cart">
            <img
              className="cart_image"
              src={item.image}
              alt={item.image}
              name={item.image}
            />
            <Link to="/productdetails">
              {" "}
              <h4
                className="cart-title"
                onClick={() => handleAddProductDetails(item)}
              >
                {item.title}
              </h4>
            </Link>

            <span className="cart-price" name="price">
               KSh {item.price}
            </span>

            <hr className="line-cart" />
          </div>
        </div>
      ))}
    </div>
  );
}
