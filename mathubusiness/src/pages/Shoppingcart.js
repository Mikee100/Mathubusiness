import React, { useState } from 'react'
import "./shoppingcart.css"

export default function ShoppingCart(handleClick) {
  const [cart] = useState([]);

  return (
    <>
    <div className='container_shopping' >
      <h2>Cart Items</h2>
      <hr  className='line' />

      {cart.map((item) => {
        return(
          <p>{item.about}</p>
        )
      })}




 
      </div>
      </>
  )
}
