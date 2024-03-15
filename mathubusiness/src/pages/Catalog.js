
import React, { useState,useEffect} from "react";
import { useLocation } from 'react-router-dom';
// import Pagination from "./Pagination";

import "./csspages/sandals.css"

import {collection, getDocs  } from "firebase/firestore"; 
import { db} from '../Firebase';
export default function Catalog({fulldatas,handleAddProduct,handleAddProductDetails}) {
    
    const location = useLocation();
    const [query,setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [myproducts, MysetProducts] = useState([]);

  
    useEffect(() => {
  
      const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "Product Information"));
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(products);
        MysetProducts(products);
        
      };
      fetchProducts();
    }, [])

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('query');
    
        // Perform search with your data from the database
        setQuery(query || '');
        const filteredResults = myproducts.filter(item =>
            item.title?.toLowerCase().includes(query.toLowerCase())
          );
    
        setSearchResults(filteredResults);
      }, [location.search,myproducts,query]);
     // const [currentPage, setCurrentPage] = useState(1);
  //const [itemsPerPage] = useState(10); // Number of items per page

  //const indexOfLastItem = currentPage * itemsPerPage;
  //const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
 // const paginate = pageNumber => setCurrentPage(pageNumber);
 const containerHeight = {
  height: `${searchResults.length * 90}px` // Adjust the height based on your item height
};


  return (
    <div className='container_sandals' >

<div className='routes_sandals'>
<a href='./' style={{textDecoration:"none"}}>Home </a> &gt; 
<p className="p_query" >{query}</p> 

</div>




<div className='container_functionalities' >
  <h3>Category</h3>
</div>


              <div className="products_sandals"style={containerHeight} >
              <p> {searchResults.length} products found</p>

                <hr className='line' />
               <div className="catalog_template" >    
      
          {searchResults.map(product => (
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
       
        
           {/**  <ul>
          
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>*/}
  {/** 
  <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={searchResults.length}
        paginate={paginate}
      />     
     */}
     
      </div>
</div>

    </div>
  )
}
