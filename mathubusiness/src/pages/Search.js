import React, { useState,useEffect } from "react";
import "./home.css";
import "./navbar.css";
import { FaTimes } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { db} from '../Firebase';
import { Link } from "react-router-dom";

import {collection, getDocs  } from "firebase/firestore"; 

export default function Search(fulldatas, { handleAddProduct }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);
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
  }, []);


  const toggleModal = () => {
    setModal(!modal);
  };

  const [popupcontent, setpopupcontent] = useState([]);
  const changecontent = (product) => {
    setpopupcontent([product]);
    setModal(!modal);
  };
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');


  return (
    <div>
      <input
        type="text"
        className="search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        placeholder="Search..."
      />
  <h2>Search Results for: {searchQuery}</h2>


   
      <div className="template">
        {myproducts.myproducts
          // eslint-disable-next-line
          .filter((product) => {
            if (
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })

          .map((product) => (
            <Link key={product.id}
            // Moving to the product page
            to={`/productdetails?name=${product.title}?id=${product.id}`}  >
            <div className="product_search" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.image}
              />
              <h4 className="product-title">{product.title}</h4>

              <span className="product-price">{product.price}$</span>

              <div className="buttons">
                <button className="btn" onClick={() => changecontent(product)}>
                  {" "}
                  details{" "}
                </button>
                <button
                  className="btn"
                  onClick={() => handleAddProduct(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div></Link>
          ))}
      </div>

      {modal && (
        <div className="modal" onClick={toggleModal}>
          {popupcontent.map((pop) => {
            return (
              <div className="popup_product" key={pop.id}>
                <img
                  className="product_image_popup_cart"
                  src={pop.image}
                  alt={pop.image}
                />

                <h4 className="pop_product-title">{pop.title}</h4>

                <p className="product_about">{pop.about}</p>
                <span className="pop_product-price">Ksh.{pop.price}</span>

                {/** 
     <button className="pop_btn_wish" >
    Wish List
   
    </button>
*/}
                <FaRegHeart className="icon_heart" />

                <button onClick={changecontent} className="cross">
                  <FaTimes />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
