import React,{useState} from 'react'
import "./leftnav.css";
import "./navbar.css";
import { Link } from 'react-router-dom'
import "./navbar.css";
import { FaBagShopping } from "react-icons/fa6";
import { GiConverseShoe } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";

export default function LeftNav(cartItems) {

    const[Mobile, setMobile] = useState(false);


  
 

  return (
    <div className='left_container' >

<div className="nav_left">
    
    <ul className={Mobile ? "nav-links-mobile":"nav-ul"} onClick={ ()=> setMobile(false)  }>
    <Link to='./products'  style={{ textDecoration: 'none'}} > <li className='li_nav_left' ><FaBagShopping   /> Bags  </li></Link>
   
    <Link to='./about'  style={{ textDecoration: 'none'}} > <li className='li_nav_left'><GiConverseShoe  /> Shoes </li></Link>

    <Link to='./contact' style={{ textDecoration: 'none'}}  > <li className='li_nav_left'><GiAmpleDress  /> Dresses </li></Link>
 
   </ul>
  
     </div >
        
    </div>
  )
}
