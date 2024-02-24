import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../csspages/sandals.css";

export default function Heels({ womenheels, handleAddProductDetails }) {
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [filteredProducts, setFilteredProducts] = useState(womenheels);

  // Filter products based on price range
  const filterProducts = () => {
    const filtered = womenheels.filter(product => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className='container_sandals'>

      <div className='routes_sandals'>
        <a href='./' style={{ textDecoration: "none" }}>Home </a> &gt;
        <a href='./shoes' style={{ textDecoration: "none" }}>Shoes</a> &gt;
        <a href='./womenboots' style={{ textDecoration: "none" }}>Boots</a>
      </div>

      <div className='container_functionalities'>
        
          
          <input
            type="number"
            value={minPrice}
            onChange={e => setMinPrice(Number(e.target.value))}
          />
      
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
          />
        
        <button onClick={filterProducts}>Filter</button>
      </div>

      <div className="products_sandals">
        <p>Womens Heels</p>
        <hr className='line' />
     
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/productdetails?name=${product.title}?id=${product.id}`}>
            <div className="product_sandals" onClick={() => handleAddProductDetails(product)}>
              <img
                className="product-image_sandals"
                src={product.image}
                alt={product.image}
              />
              <h4 className="product-title">{product.title}</h4>
              <span className="product-price">KSh {product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
