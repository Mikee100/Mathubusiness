import React, {useState} from "react";
import "./home.css";
import {FaTimes} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import LeftNav from "./LeftNav";
import { Link } from "react-router-dom";

export default function Dresses({productDresses, handleAddProduct, handleAddProductDetails }) {
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
{productDresses.map((product) => (

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
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>



<div className="make1_products">
{productDresses.map((product) => (

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
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>

    


<div className="make2_products">
{productDresses.map((product) => (

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
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>

<div className="make3_products">
{productDresses.map((product) => (

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
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>

<div className="make4_products">
{productDresses.map((product) => (

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
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>

<div className="make5_products">
{productDresses.map((product) => (

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
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
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

        



<LeftNav />
    </div>





  )
}
