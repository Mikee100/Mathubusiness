import React, {useState} from "react";
import "./navbar.css";
import "./home.css";
import "./modal.css";

import LeftNav from "./LeftNav";

import { Link } from "react-router-dom";



export default function Products({productItems, handleAddProduct,  handleAddProductDetails  }) {
    const  [modal, setModal] = useState(false);
    

    
const [ setpopupcontent] = useState([]);
const changecontent = (product) =>{
    setpopupcontent([product]);
    setModal(!modal);
    
  
  }

 

  return (
  
    
    <div className='container'>
     
           
           <div className="products">
{productItems.map((product) => (

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
{productItems.map((product) => (

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

    


<div className="make2_products">
{productItems.map((product) => (

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

<div className="make3_products">
{productItems.map((product) => (

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

    



<div className="make4_products">
{productItems.map((product) => (

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

<div className="make5_products">
{productItems.map((product) => (

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


<LeftNav />









    </div>





  )
}
