import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import {FaShoppingCart} from 'react-icons/fa'
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"

function Navbar({cartItems}) {
  const[Mobile, setMobile] = useState(false)
  return (

    <div className='container_navbar'> 
        
    <div className="nav">
    
       <Link to='./products' > <h1 className=" company_name ">MEZURI SHOPPING WEBSITE </h1></Link>
      
            
       <ul className={Mobile ? "nav-links-mobile":"nav-ul"} onClick={ ()=> setMobile(false)  } >
       <Link to='./products'  style={{ textDecoration: 'none'}} > <li >Bags  </li></Link>
      
       <Link to='./about'  style={{ textDecoration: 'none'}} > <li> Shoes </li></Link>
  
       <Link to='./contact' style={{ textDecoration: 'none'}}  > <li>Dresses </li></Link>
     
      
      </ul>
     <Link to="./shoppingcart" style={{color:"black"}} ><span className='count' > {cartItems.length === 0 ? "" : cartItems.length } </span> <FaShoppingCart  className='cart-icon'  /></Link>
        </div >
        <button className='bars' onClick={() => setMobile(!Mobile)} >
          {Mobile ? <FaTimes/> : <FaBars  />}</button>
       {/* <hr className='nav_line' /> */}
      
      

    </div>


    
  )
}

export default Navbar