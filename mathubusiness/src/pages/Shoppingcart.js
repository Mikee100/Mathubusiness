import React,{useEffect,useState,useRef} from "react";
import "./shoppingcart.css";
import { Link,useNavigate } from "react-router-dom";
import { auth } from '../Firebase' 
import emailjs from "emailjs-com"


export default function ShoppingCart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  handleAddProductDetails,
}) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const [user, setUser] = useState(null);
 
  const history = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const handleCheckout = () => {
    if (user) {
      // User is logged in, proceed with checkout
     
      console.log("Proceeding with checkout...");
      // You can add your checkout logic here
    } else {
      // User is not logged in, redirect to login page
      history("/mainlogin"); // Assuming you have a route for the login page
    }
   
  
      
      emailjs
        .sendForm(
          "service_a911eb5",
          "template_ye9c297",
          form.current,
          "KeePPXIGkpTcoiTBJ"
        )
        .then(
          (result) => {
            window.location.reload(); 
            //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
          
          },
          (error) => {
            console.log(error.text);
            
          }
        );
    
    
  };

  const form = useRef();
  

  return (
    <>
      <div className="container_shopping">
      
        <div className="small_routes_shopping">
          <a href="./products">
            <p className="p_home">Home</p>{" "}
          </a>
          <p className="this_sign"> &gt; </p>
          <Link  key={handleAddProductDetails.id}
// Moving to the product page
to={`/productdetails?name=${handleAddProductDetails.title}?id=${handleAddProductDetails.id}`}  >
            {" "}
            <p className="p_prdt_detail">Product Details</p>
          </Link>
          <p className="cart_this_sign"> &gt; </p>
          <p className="route_cart">Cart</p>
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
           
              <div
                className="single_item_cart"
                
              >
                <img className="cart_image" src={item.image} alt={item.image} />
                <Link to="/productdetails">  <h4 className="cart-title" onClick={() => handleAddProductDetails(item)} >{item.title}</h4></Link>

                <span className="cart-price">
                  <p className="p_count">{item.quantity}</p> KSh {item.price}
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
      
          </div>
        ))}

        <div className="total_container">
          <hr className="summary_ln" />
          <p className="sub_total">Subtotal</p>
          <p className="cart_summary">Cart Summary</p>
          <small>KSh {totalPrice}</small>
          <button className="checkout" onClick={handleCheckout} >Checkout (KSh {totalPrice})</button>
        </div>
      </div>
    </>
  );
}
