import React,{useState} from 'react'
import {db} from "../Firebase"
import "./checkout.css";
import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import emailjs from 'emailjs-com';
import Notification from './Notification';

export default function Checkout( {cartItems}) {
  const [notificationMessage, setNotificationMessage] = useState('');


    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
      );

 
      const auth = getAuth();
    const [fname, setFName] = useState("");
    
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [cvc, setCvc] = useState("");
    
    const [expiryDate, setExpiryDate] = useState('');
    const handleExpiryChange = (event) => {
        const input = event.target.value;
        let formattedInput = input.replace(/\D/g, ''); // Remove non-numeric characters
        if (formattedInput.length > 2) {
          formattedInput = formattedInput.slice(0, 2) + '/' + formattedInput.slice(2); // Add slash after the second character
        }
        setExpiryDate(formattedInput);
      };

  

      const [cardNumber, setCardNumber] = useState('');

      // Function to format the card number with spaces after every four digits
      const handleCardNumberChange = (event) => {
        const input = event.target.value;
        const formattedInput = input.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(formattedInput);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Ensure user is authenticated
          const user = auth.currentUser;
          if (!user) {
            // Handle unauthenticated user
            return;
          }
      
          // Write user details, card information, and product details to Firebase Realtime Database
          await addDoc(collection(db, "Orders"), {
            uid: user.uid,
            fname: fname,
            number: number,
            address: address,
            selectedCity: selectedCity,
            email: email,
            city: city,
            region: region,
            cvc:cvc,
            cardNumber: cardNumber, // Include card number
            expiryDate: expiryDate, // Include expiry date
      
            // Include product details from the cart
            products: cartItems.map(item => ({
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              price: item.price
            }))
          });
      
          // Send email to the user
          await sendEmailToUser(email, cartItems, totalPrice); // <--- Add this line
      
          setNotificationMessage('Data submitted successfully!');
      
        } catch (e) {
          console.log("Error adding document: ", e);
        }
      };
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    
    // Define your option lists
    const options = {
      Nairobi: ['Westlands', 'Kayole', 'Kahawa','Dagoretti','Kasarani','Roysambu','Parklands'],
      Nakuru: ['Nakuru Town', 'Section 58']
    };
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
      setSelectedLocation('');
      setCity(event.target.value)
    
    };
  
    const handleLocationChange = (event) => {
      setSelectedLocation(event.target.value);
      setRegion(event.target.value)
    };

    const sendEmailToUser = async (email, cartItems, totalPrice) => {
      try {
        const templateParams = {
          to_email: email,
          subject: "Order Confirmation",
          body: `
            <h2>Order Confirmation</h2>
            <p>Dear ${fname},</p>
            <p>Your order has been successfully placed.</p>
            <p>Order details:</p>
            <ul>
              ${cartItems.map(item => `<li>${item.title} x ${item.quantity} = KSh ${item.price}</li>`).join('')}
            </ul>
            <p>Total price: KSh ${totalPrice}</p>
            <p>Thank you for shopping with us!</p>
          `,
        };
  
        emailjs.send('service_bmvwx28', 'template_zsdszy8', templateParams, 'KeePPXIGkpTcoiTBJ')
         .then((response) => {
            console.log('Email sent successfully', response.status, response.text);
          }, (error) => {
            console.log('Error sending email', error);
          });
      } catch (e) {
        console.log("Error sending email: ", e);
      }
    };
  
  return (
    <div  >
        <div className='pdrt_container_checkout'>
            <h1 className='ordered_items_h1' >Ordered Items</h1>
            <h2 className='p_totalprice' >KSh {totalPrice}</h2>
        {cartItems.map((item) => (

         
         <div key={item.id} className="cart_container_checkout">
          
             <div
               className="single_item_cart_checkout"
               
             >
               <img className="cart_image" src={item.image} alt={item.image}    />
                <h4 className="cart-title_checkout" title={item.title}  >{item.title} </h4>
              
               <span className="cart-price_checkout" name="price">
                 <p className="p_count_checkout">Qty {item.quantity}</p> KSh {item.price}
               </span>

             

             </div>
         </div>
       ))}

        </div>
       <form onSubmit={handleSubmit} className='form_checkout' >
    <h2>Delivery Information</h2>
    <input type="email" className="shippinginput" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
    <input type="text" className="shippinginput" name="first name" value={fname} onChange={(e) => setFName(e.target.value) } placeholder="Full Names" required />
    <input type="number" className="shippinginput" name="pnumber" value={number} onChange={(e) => setNumber(e.target.value) } placeholder="Phone Number" required />
    <input type="text" className="shippinginput" name="address" value={address} onChange={(e) => setAddress(e.target.value) } placeholder="Address" required />
    <div>
  <label htmlFor="city">Select City:</label>
  <select id="city" value={selectedCity} onChange={handleCityChange} className='options'  >
    <option value="">Select City</option>
    <option value="Nairobi">Nairobi</option>
    <option value="Nakuru">Nakuru</option>
  </select>

  {selectedCity && (
    <div className='location_checkout' >
      <select id="location" value={selectedLocation} onChange={handleLocationChange} className='diffoptions' >
        {options[selectedCity].map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
    </div>
  )}
</div>
      <h2>Payment Details</h2>
      <h4>Card Information</h4>

    
      <input
      className='shippinginput'
        type="text"
        id="cardNumber"
        name="cardNumber"
        placeholder="1234 5678 9012 3456"
        maxLength="19"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <div>

      <input
        type="text"
        className='expiry'
        id="expiryDate"
        name="expiryDate"
        placeholder="MM/YY"
        maxLength="5"
        value={expiryDate}
        onChange={handleExpiryChange}
      />
      <input type="number" className="expiry" name="cvc" value={cvc} onChange={(e) => setCvc(e.target.value) } placeholder="Cvc" required />
      </div>



      
      
      <button type="submit" className='registerbtn'>Pay</button>
    
      
    </form>
    {notificationMessage && <Notification message={notificationMessage} />}
    </div>
  )
}
