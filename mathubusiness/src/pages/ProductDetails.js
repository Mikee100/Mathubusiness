import React, { useState,useEffect } from "react";
import "./navbar.css";
import "./home.css";
import "./modal.css";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

import { FaFileAlt } from "react-icons/fa";
import { db} from '../Firebase';

import {collection, getDocs  } from "firebase/firestore"; 



export default function ProductDetails({
  productdetails,
  handleAddProduct,
  addLikedProduct,
  productItems,
 
}) {
  
  const [modal1, setModal1] = useState(false);
  const [myproducts, MysetProducts] = useState([]);

  const toggleModal = () => {
    setModal1(modal1);
  };

 

  const handleClickScroll = () => {
    const element = document.getElementById("prdt_details_container");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrol2 = () => {
    const element = document.getElementById("specifications_container");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrol3 = () => {
    const element = document.getElementById("rating_container");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // State to track the currently selected big image
  const [selectedImage, setSelectedImage] = useState();

  // Function to handle click on a smaller image

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

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


  return (
    <>
      <div className="modal" id="modal" key={1} onClick={toggleModal}>
        {productdetails.map((pop) => (
          <div>
            <div className="popup_product" key={pop.id}>
              <div className="small_routes">
                <a href="./">
                  <p className="p_home">Home</p>{" "}
                </a>
                <p className="this_sign"> &gt; </p>
                <p className="p_prdt_detail">Product Details</p>
                <p className="this_sign2"> &gt; </p>
             
              </div>
              <div className="pdt_container">   
                {/**
<img  
    className="product_image_popup_cart" 
    src={pop.image}
    alt={pop.image}
    
  /> */}
                <div className="image-gallery">
                  <div className="big-image">
                    {selectedImage && <img src={selectedImage} alt="Big" />}
                  </div>

                  <div className="thumbnails">
                    <img
                      src={pop.image}
                      alt="Small 1"
                      onClick={() => handleImageClick(pop.image)}
                    />
                    <img
                      src={pop.image2}
                      alt="Small 2"
                      onClick={() => handleImageClick(pop.image2)}
                    />
                    <img
                      src={pop.image3}
                      alt="Small 3"
                      onClick={() => handleImageClick(pop.image3)}
                    />
                    <img
                      src={pop.image4}
                      alt="Small 3"
                      onClick={() => handleImageClick(pop.image4)}
                    />
                    <img
                      src={pop.image5}
                      alt="Small 3"
                      onClick={() => handleImageClick(pop.image5)}
                    />
                    {/* Add more images as needed */}
                  </div>
                </div>

                <h4 className="pop_product-title">{pop.title}</h4>
                <p className="item_address" > {`${pop.title}`} </p>
                <span className="pop_product-price">Ksh.{pop.price}</span>

                <button
                  className="pop_btn"
                  onClick={() => handleAddProduct(pop)}
                >
                  ADD TO CART
                </button>

              

          
              </div>

              <FaRegHeart
                className="icon_heart"
                onClick={() => addLikedProduct(pop)}
              />

              <div
                className="prdt_details_container"
                id="prdt_details_container"
              >
                <hr className="hr_desc" />
                <small className="small_desc">PRODUCT DETAILS</small>
            
              </div>
              <div className="rating_container" id="rating_container">
                <small className="small_rate">CUSTOMER FEEDBACK</small>
                <div class="rating">
                  <input
                    type="radio"
                    id="star-1"
                    name="star-radio"
                    value="star-1"
                  />
                  <label for="star-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="star-2"
                    name="star-radio"
                    value="star-1"
                  />
                  <label for="star-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="star-3"
                    name="star-radio"
                    value="star-1"
                  />
                  <label for="star-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="star-4"
                    name="star-radio"
                    value="star-1"
                  />
                  <label for="star-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                  <input
                    type="radio"
                    id="star-5"
                    name="star-radio"
                    value="star-1"
                  />
                  <label for="star-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        pathLength="360"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div className="customer_feedback"></div>
              </div>

              <div
                className="specifications_container"
                id="specifications_container"
              >
                   <h4>Specifications</h4>
                   <hr />
                {myproducts.map((product) => (
  <ol className="ul_specifications">
  <li className="li_specifications">Color:   {product.Color} </li>
  <li className="li_specifications">Height:  {product.Dimensions}</li>
  <li className="li_specifications">Weight:  {product.Weight}</li>
    
 </ol>

     ))}

              </div>

              <div className="location_of_divs">
                <small onClick={handleClickScroll}>
                  <FaFileAlt /> Details
                </small>

                <small onClick={handleClickScrol2}>Specifications</small>

                <small onClick={handleClickScrol3}>Customer Feedback</small>
              </div>


              <div className="prdt_cart">
                {productdetails.map((product) => (
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.image}
                  />
                ))}
                ;
              </div>

             
            
              {/** items in the modal                  */}

             

              {modal1 && (
                <div className="modal1">
                  <div className="template_modal1">
                    <h2
                      style={{
                        position: "absolute",
                        top: "2rem",
                        left: "2rem",
                      }}
                    >
                      Delivery Details
                    </h2>
                    <p
                      style={{
                        position: "absolute",
                        top: "5rem",
                        left: "1rem",
                      }}
                    >
                      Delivery time starts from the day you place your order to
                      the day your order arrives at the pickup station. You will
                      be notified of your order's arrival, and you have to
                      retrieve it within 5 days. If the order is not picked up,
                      it will be automatically cancelled.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="products_modal" key={2}>
      <p className="may_like">YOU MAY ALSO LIKE</p>
                {productItems.map((product) => (
                  <Link to="/productdetails"  > <div className="product" key={1}>
                    <img
                      className="product-image"
                      src={product.image}
                      alt={product.image}
                    />
                    <h4 className="product-title">{product.title}</h4>

                    <span className="product-price">KSh {product.price}</span>

                  </div></Link> 
                ))}
              </div>

    </>
  );
}
