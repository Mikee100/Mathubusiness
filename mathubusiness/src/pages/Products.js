import React from "react";
import "./navbar.css";
import "./home.css";
import "./modal.css";


import LeftNav from "./LeftNav";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Products({productItems,   handleAddProductDetails,productDresses, productShoes,fashionwomenboot,productshoessandals  }) {



  return (
  
    
    <div className='container' id="container" key={1} >
    
           
           <div className="products"    >
           <h3><a href="./bags" style={{textDecoration:"none"}} >Bags</a></h3>
{productItems.map((product,index) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)} key={product.id}>
 key={index}
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <p className="product-title" >
      {product.title}

    </p>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

<div className="div_arrow_right" >

<MdKeyboardArrowRight  className="arrow_right"/>
</div>

</div>

<div className="make1_products">

<h3><a href="./shoes" style={{textDecoration:"none"}} >Shoes</a></h3>
{productShoes.map((product) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>
    



<div className="make2_products">


{productItems.map((product) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>
<div className="make3_products">


{fashionwomenboot.map((product) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>



<div className="make4_products">


{productItems.map((product) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>

<div className="make5_products">


{productshoessandals.map((product) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>


<div className="make6_products">


{productItems.map((product) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>

<div className="make7_products">


{productDresses.map((product) => (
  

  <Link to="/productdetails"  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>



<LeftNav />
<Footer />








    </div>





  )
}
