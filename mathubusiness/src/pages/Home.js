import React from "react";
import "./home.css";


const products = [
    {
        id: 0,
        image:  '/images/bag1.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 1,
        image:  '/images/bag2.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 2,
        image:  '/images/bag3.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 3,
        image:  '/images/bag4.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 4,
        image:  '/images/bag5.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 5,
        image:  '/images/bag6.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 6,
        image:  '/images/bag7.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    
    {
        id: 7,
        image:  '/images/bag8.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    }
    ];
export default function Home() {

    return(
      <main>
        
<div  className="container"> 

<div className="products">
{products.map((product) => (
 
  <div className="product"
   key={product.id}>

    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
      
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price" >
      {product.price}$ 
    </span>
   <div className="buttons"> 
   <button className="btn"> details </button>
   <button className="btn" >
    Add to Cart
   
    </button>
   </div>


  </div>
  
    ))}

</div> 
</div>
</main>
    )
 
        


  
 
}
