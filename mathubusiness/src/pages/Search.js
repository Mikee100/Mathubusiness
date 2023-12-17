import React, { useState } from "react";
import "./home.css";
import "./navbar.css";
import { FaTimes } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Search(fulldatas, { handleAddProduct }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [popupcontent, setpopupcontent] = useState([]);
  const changecontent = (product) => {
    setpopupcontent([product]);
    setModal(!modal);
  };

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
            <div className="product" key={product.id}>
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
            </div>
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
