import React from 'react'
import { Link } from "react-router-dom";
import "../csspages/sandals.css"
export default function Sandals({productshoessandals,handleAddProduct,handleAddProductDetails}) {
  return (
    <div className='container_sandals'>
              <div className="products_sandals">
{productshoessandals.map((product) => (

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

    </div>
  )
}
