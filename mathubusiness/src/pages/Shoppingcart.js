import React from 'react'
import "./shoppingcart.css"

export default function ShoppingCart({cartItems,handleAddProduct ,handleRemoveProduct, handleCartClearance}) {

  const totalPrice =cartItems.reduce((price,item) => price+item.quantity * item.price, 0 )

  return (
    <>
    <div className='container_shopping' >
      <h2>Cart Items</h2>
      {cartItems.length >=1 && (
        <button  className="bt_clear" onClick={handleCartClearance}>clear cart </button>
      )}
      <hr  className='line' />

      {cartItems.length === 0 && (
        <p className='cart_empty' > No items are added</p>
      )}

    
 
{cartItems.map((item) => (
  <div key={item.id} className='cart_container'>
    <div className='single_item_cart'>
    <img   className='cart_image' 
    src={item.image}
    alt={item.image}

    />
     <h4 className="cart-title" >
      {item.title}

    </h4>


    <span  className="cart-price" >

     
    <p>{item.quantity}</p>  ${item.price} 
    </span>

    <button className='increase-item'  onClick={()=> handleAddProduct(item) } >+</button>
    <button className='decrease-item'  onClick={()=> handleRemoveProduct(item)} >-</button>
   
</div>
  </div>
) )}




</div>
<div className='total_container'>
  <p>Total</p>
<small>${totalPrice}</small>
 
      </div>
      </>
  )
}
