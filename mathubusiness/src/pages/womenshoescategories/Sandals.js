import React from 'react'
import { Link } from "react-router-dom";
import "../csspages/sandals.css"
export default function Sandals({productshoessandals,handleAddProduct,handleAddProductDetails}) {
  return (
    <div className='container_sandals'>

<div className='routes_sandals'>
<a href='./home' style={{textDecoration:"none"}}>Home </a> &gt; 
<a href='./shoes'style={{textDecoration:"none"}} >Shoes</a> &gt; 
<a href='./sandals'style={{textDecoration:"none"}} >Sandals</a>
</div>

<div className='container_functionalities' >
  <h3>Category</h3>
</div>


              <div className="products_sandals">
                <p>Womens Sandals</p>
                <hr className='line' />
                
{productshoessandals.map((product) => (

<Link  key={product.id}
// Moving to the product page
to={`/productdetails?name=${product.title}?id=${product.id}`}  ><div className="product_sandals" 
onClick={() => handleAddProductDetails(product)}>   
 
    <img  
      className="product-image_sandals"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
      KSh {product.price}
    </span>




  </div></Link>
  
     ))}

</div>

    </div>
  )
}
