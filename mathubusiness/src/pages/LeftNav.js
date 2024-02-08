import React,{useState} from 'react'
import "./leftnav.css";
import "./navbar.css";

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
     <li className='li_nav_left'   ><FaBagShopping   /> <a href='./bags'  style={{ textDecoration: 'none'}}>  Bags   </a>  </li>
   
     <li className='li_nav_left'  ><GiConverseShoe  /> <a href='./shoes' style={{ textDecoration: 'none'}}>Shoes  </a> </li>

     <li className='li_nav_left'  ><GiAmpleDress  /> <a href='./dresses' style={{ textDecoration: 'none'}}> Dresses </a> </li>
 
   </ul>
  
     </div >
        
    </div>
  )
}
