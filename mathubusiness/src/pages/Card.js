import React from 'react'

const Card = ({item, handleClick}) => {
    const {title ,price, image}  = item;
  return (
    <div className="products">


  <div className="product" 
 >
 
    <img  
      className="product-image"
      src={image}
      alt={image}
      
    />
    <h4 className="product-title" >
      {title}

    </h4>
    <span  className="product-price" >
      {price}$ 
    </span>


   <div className="buttons"> 
   <button className="btn" > details </button>
   <button className="btn" onClick={ () => handleClick(item)  } > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
    

</div>

  )
}

export default Card