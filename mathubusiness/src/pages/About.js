import React, {useState} from "react";
import "./home.css";
import {FaTimes} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'



export default function About({productShoes, handleAddProduct }) {
    const  [modal, setModal] = useState(false);

    const toggleModal = () =>{
    
      setModal(!modal)
    
    
    }
  
const [popupcontent, setpopupcontent] = useState([]);
const changecontent = (product) =>{
    setpopupcontent([product]);
    setModal(!modal);
  
  }

  return (
    <div className='container'>
        <div className="products">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
      KSh {product.price}
    </span>


   <div className="buttons"> 
   <button className="btn" onClick={() => changecontent(product)} > details </button>
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>




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
    <button className="pop_btn"   onClick={() => handleAddProduct(pop)}  >
   ADD TO CART
  
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


<ul className="ul_media">

<li className="li_media" style={{ textDecoration: 'none'}} >bags</li>     

<a href="./contact" style={{ textDecoration: 'none'}} ><li className="li_media" >Dresses</li> </a>   
<li className="li_media" style={{ textDecoration: 'none'}} >Shoes</li>   
<li className="li_media" style={{ textDecoration: 'none'}} >Favourites</li>    
 <li className="li_media" style={{ textDecoration: 'none'}} >Search</li>    

  </ul>
  



    </div>
    





  )
}
