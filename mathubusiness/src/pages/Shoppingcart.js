import React from "react";
import "./shoppingcart.css";
import { Link } from "react-router-dom";

export default function ShoppingCart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  handleAddProductDetails
}) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="container_shopping">
      <div className='small_routes_shopping' >
      <a href='./products' ><p className='p_home' >Home</p> </a>
      <p className='this_sign'> &gt; </p>
      <a href="./productdetails" >  <p className='p_prdt_detail' >Product Details</p></a>
      <p className='cart_this_sign'> &gt; </p>
      <p className="route_cart" >Cart</p>
        </div>
        <h2>Cart Items</h2>
        {cartItems.length >= 1 && (
          <button className="bt_clear" onClick={handleCartClearance}>
            clear cart{" "}
          </button>
        )}
        <hr className="line" />

        {cartItems.length === 0 && (
          <p className="cart_empty"> No items are added</p>
        )}

        {cartItems.map((item) => (
          <div key={item.id} className="cart_container">
           <Link to="/productdetails" >

             <div className="single_item_cart"  onClick={() => handleAddProductDetails(item)} >
              <img className="cart_image" src={item.image} alt={item.image} />
              <h4 className="cart-title">{item.title}</h4>

              <span className="cart-price">
                <p>{item.quantity}</p> ${item.price}
              </span>

              <button
                className="increase-item"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="decrease-item"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
              <hr className="line-cart" />
            </div>
            </Link> 
           
          
          </div>
        ))}

        <div className="total_container">
          <hr className="summary_ln" />
          <p className="sub_total">Subtotal</p>
          <p className="cart_summary">Cart Summary</p>
          <small>KSh {totalPrice}</small>
          <button className="checkout">Checkout (KSh {totalPrice})</button>
        </div>
      </div>
    </>
  );
}
