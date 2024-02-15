
import React, { useLocation,useState} from "react";

import "./csspages/sandals.css"
export default function Catalog({fulldatas,handleAddProduct,handleAddProductDetails}) {
    const [searchTerm] = useState("");
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');



  return (
    <div className='container_sandals'>

<div className='routes_sandals'>
<a href='./' style={{textDecoration:"none"}}>Home </a> &gt; 
<a href='./shoes'style={{textDecoration:"none"}} >Shoes</a> &gt; 
<a href='./sandals'style={{textDecoration:"none"}} >Sandals</a>
</div>


<h2>Search Results for: {searchQuery}</h2>

<div className='container_functionalities' >
  <h3>Category</h3>
</div>


              <div className="products_sandals">
                <p>Womens Sandals</p>
                <hr className='line' />
                
                <div className="template">
        {fulldatas.fulldatas
          // eslint-disable-next-line
          .filter((product) => {
            if (
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })

          .map((product) => (
            <div className="product_search" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.image}
              />
              <h4 className="product-title">{product.title}</h4>

              <span className="product-price">{product.price}$</span>

           
            </div>
          ))}
      </div>

</div>

    </div>
  )
}
