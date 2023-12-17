import React from "react";
import "./liked.css";
import "./shoppingcart.css";

export default function Liked({ likedItems }) {
  return (
    <div className="container_liked">
      <h2 className="mylikes">My Favourites</h2>

      {likedItems.map((item) => (
        <div key={item.id} className="liked_container">
          <div className="single_item_cart">
            <img className="cart_image" src={item.image} alt={item.image} />
          </div>
        </div>
      ))}
    </div>
  );
}
