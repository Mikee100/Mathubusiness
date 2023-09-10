import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
import {FaShoppingCart} from 'react-icons/fa'


function Navbar() {
  return (

    <div className='container_navbar'> 
        
    <div className="nav">
       <Link to='./home' > <h1 className=" company_name ">Soleil Africa Leather </h1></Link>
      
            
            <ul>
       <Link to='./home'  style={{ textDecoration: 'none'}} > <li >Home  </li></Link>
       <Link to='./about'  style={{ textDecoration: 'none'}} > <li> About </li></Link>
       <Link to='./contact' style={{ textDecoration: 'none'}}  > <li>Contact  </li></Link>
      </ul>

     <Link to="./shoppingcart" style={{color:"black"}}  ><p className='count' >0</p> <FaShoppingCart  className='cart-icon'  /></Link>
        </div >
        <hr className='nav_line' />
      
    </div>


    
  )
}

export default Navbar