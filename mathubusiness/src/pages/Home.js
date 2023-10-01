import React, {useState} from "react";
import "./home.css";
import {FaTimes} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa';





export default function Home() {
    
    const  [modal, setModal] = useState(false);

    const toggleModal = () =>{
    
      setModal(!modal)
    
    
    }
    
const [popupcontent, setpopupcontent] = useState([]);
const changecontent = (product) =>{
    setpopupcontent([product]);
    setModal(!modal);
  
  }
    return(
      <main>
        
<div  className="container"> 



{ modal &&  (
  <div className='modal'  onClick={toggleModal} >

    
{popupcontent.map((pop) => {
return(
  <div className="popup_product"
 key={pop.id}>

  <img  
    className="product_image_popup_cart" 
    src={pop.image}
    alt={pop.image}
    
  />
  
 <h4 className="pop_product-title" >
      {pop.title}

    </h4>
    
    <p className="product_about">{pop.about}</p>
    <span  className="pop_product-price" >
      Ksh.{pop.price} 
    </span>
    <button className="pop_btn" >
    ADD TO CART
   <FaShoppingCart  className="carticon" />
    </button>
    {/** 
     <button className="pop_btn_wish" >
    Wish List
   
    </button>
*/}
<FaRegHeart  className="icon_heart" />

 <button onClick={changecontent} className='cross'  ><FaTimes/></button>

</div>
)


}
  



  )}
    </div> 

) 



}





</div>

</main>

    )

        


 
 
}

