
import React, { useState,useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Pagination from "./Pagination";

import "./csspages/sandals.css"
export default function Catalog({fulldatas,handleAddProduct,handleAddProductDetails}) {
    
    const location = useLocation();
    const [query] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('query');
    
        // Perform search with your data from the database
        
        const filteredResults = fulldatas.filter(item =>
            item.title?.toLowerCase().includes(query.toLowerCase())
          );
    
        setSearchResults(filteredResults);
      }, [location.search,fulldatas]);
      const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container_sandals'>

<div className='routes_sandals'>
<a href='./' style={{textDecoration:"none"}}>Home </a> &gt; 
<a href='./shoes'style={{textDecoration:"none"}} >Shoes</a> &gt; 
<a href='./sandals'style={{textDecoration:"none"}} >Sandals</a>
</div>




<div className='container_functionalities' >
  <h3>Category</h3>
</div>


              <div className="products_sandals">
              <p> {searchResults.length} products found</p>

                <hr className='line' />
               <div className="template">    
                {query === '' ? (
          // Render all items when there is no search query
          fulldatas.map(product => (
            <div className="product_search" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.image}
            />
            <h4 className="product-title">{product.title}</h4>
  
            <span className="product-price">{product.price}$</span>
  
          
          </div>
          ))
        ) : (
          // Render search results when there is a search query
          searchResults.map(product => (
            <div className="product_search" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.image}
            />
            <h4 className="product-title">{product.title}</h4>
  
            <span className="product-price">{product.price}$</span>
  
          
          </div>
          ))
        )}
          <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
  
  <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={searchResults.length}
        paginate={paginate}
      />     
     
     
      </div>
</div>

    </div>
  )
}
