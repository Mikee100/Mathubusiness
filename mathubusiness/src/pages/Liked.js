import React from "react";
import "./liked.css";

export default function Liked({ likedItems }) {
  return (
    <div className="container_liked">
      <div className="products_liked">
      {likedItems.map((item) => (
  <div key={item.id} className='cart_container'>
    <div className='single_item_cart'>
    <img   className='cart_image' 
    src={item.image}
    alt={item.image}

    />
    


    
   <hr className='line-cart' />
</div>
  </div>
) )}
      </div>
    </div>
  );
}
