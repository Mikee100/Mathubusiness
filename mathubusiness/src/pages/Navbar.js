import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import {FaShoppingCart} from 'react-icons/fa'
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
import {AiFillHeart} from 'react-icons/ai'
import { LuLogIn } from "react-icons/lu";

function Navbar({cartItems}) {
  const[Mobile, setMobile] = useState(false)
  return (

    <div className='container_navbar'> 
        
    <div className="nav">
    
       <Link to='./products' > <h1 className=" company_name ">MEZURI SHOPPING WEBSITE </h1></Link>
      
            
       <ul className={Mobile ? "nav-links-mobile":"nav-ul"} onClick={ ()=> setMobile(false)  }>
       <Link to='./products'  style={{ textDecoration: 'none'}} > <li className='li_nav' >Bags  </li></Link>
      
       <Link to='./about'  style={{ textDecoration: 'none'}} > <li className='li_nav'> Shoes </li></Link>
  
       <Link to='./contact' style={{ textDecoration: 'none'}}  > <li className='li_nav'>Dresses </li></Link>
     <Link  to="./search" style={{ textDecoration: 'none'}} className='search_icon'>< FaSearch/> </Link>
     <Link  to="./liked" style={{ textDecoration: 'none'}} className='heart_icon' ><AiFillHeart    /> </Link>
     <Link  to="./login" style={{ textDecoration: 'none'}} className='login_icon' ><LuLogIn    /> </Link>
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