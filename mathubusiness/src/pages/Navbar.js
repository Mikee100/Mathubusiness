import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import {FaShoppingCart} from 'react-icons/fa'


function Navbar({cartItems}) {
  return (

    <div className='container_navbar'> 
        
    <div className="nav">
       <Link to='./products' > <h1 className=" company_name ">MEZURI SHOPPING WEBSITE </h1></Link>
      
            
            <ul>
       <Link to='./products'  style={{ textDecoration: 'none'}} > <li >Bags  </li></Link>
      
       <Link to='./about'  style={{ textDecoration: 'none'}} > <li> Shoes </li></Link>
  
       <Link to='./contact' style={{ textDecoration: 'none'}}  > <li>Dresses </li></Link>
     
      </ul>

     <Link to="./shoppingcart" style={{color:"black"}} ><span className='count' > {cartItems.length === 0 ? "" : cartItems.length } </span> <FaShoppingCart  className='cart-icon'  /></Link>
        </div >
 
       {/* <hr className='nav_line' /> */}
      
    </div>


    
  )
}

export default Navbar