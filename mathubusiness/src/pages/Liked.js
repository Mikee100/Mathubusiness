import React from 'react'

export default function Liked({cartItems}) {
  return (
    <div className='container'>
        <div className="products">
{cartItems.map((product) => (

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
   <button className="btn"  > details </button>
   <button className="btn"   > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>



    </div>

  )
}
