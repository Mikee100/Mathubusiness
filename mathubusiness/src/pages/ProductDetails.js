import React, { useState } from "react";
import "./navbar.css";
import "./home.css";
import "./modal.css";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TbTruckReturn } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function ProductDetails({
  productdetails,
  handleAddProduct,
  addLikedProduct,
  productItems,
 
}) {
  
  const [modal1, setModal1] = useState(false);

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
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle click on a smaller image

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

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
                      src={pop.image1}
                      alt="Small 1"
                      onClick={() => handleImageClick(pop.image1)}
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

                <span className="pop_product-price">Ksh.{pop.price}</span>

                <button
                  className="pop_btn"
                  onClick={() => handleAddProduct(pop)}
                >
                  ADD TO CART
                </button>

                <hr className="line_pdrt_detail" />
                <p className="p_share_prdt">SHARE THE PRODUCT</p>
                <div className="facebook_icon">
                  <FaFacebookF className="icon_facebook" />
                </div>

                <p className="promotions">PROMOTIONS</p>

                <p className="reporting_prdt">
                  Report incorrect product information
                </p>
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
                <small className="about_specs">
                  Product Details：
                  <br />
                  1.Material: PU Leather.
                  <br />
                  2.Type: Solid.
                  <br />
                  3.Dimension: See the Picture.
                  <br />
                  4.Accessories: Removable and adjustable shoulder strap.
                  <br />
                  5.Minimalist style, integrating good design and good
                  functions, the exterior is classic, and the interior is
                  practical.
                  <br />
                  6.The thickened shoulder strap design is not easy to break,
                  has a longer practical life, and relieves the stress on the
                  shoulder at the same time.
                  <br />
                  7.Three-in-one bags, different capacity combinations to meet
                  your diverse storage needs and fashion needs.
                  <br />
                  8.Are you still looking for a classic, versatile, practical
                  and simple bag? Choose this one!
                </small>
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

                <div className="key_features">
                  <p>KEY FEATURES</p>

                  <ul className="list_features">
                    <li>Mechanical Control</li>
                    <li>Interior LED light</li>
                    <li>Energy-saving and low noise</li>
                    <li>Adjustable front feet</li>
                    <li>Lock&key</li>
                  </ul>

                  <hr />
                </div>
              </div>

              <div className="location_of_divs">
                <small onClick={handleClickScroll}>
                  <FaFileAlt /> Details
                </small>

                <small onClick={handleClickScrol2}>Specifications</small>

                <small onClick={handleClickScrol3}>Customer Feedback</small>
              </div>

              <div className="sellers_info">
                <p>SELLER INFORMATION</p>

                <hr className="hr_seller_info" />
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

              <p className="may_like">YOU MAY ALSO LIKE</p>
            
              {/** items in the modal                  */}

              <div className="modal_left_delivery">
                <p className="delivery_status"> Delivery & Status</p>
                <hr className="delivery_status_line" />

                <p className="choosing_location_status">
                  {" "}
                  Choose your location{" "}
                </p>

                <select className="counties" id="counties">
                  <option value="Nakuru">Nakuru</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Kisumu">Kisumu</option>

                  <option value="Muranga">Muranga</option>
                  <option value="Narok">Narok</option>
                  <option value="Kajiado">Kajiado</option>
                  <option value="Busia">Busia</option>

                  <option value="Kiambu">Kiambu</option>
                  <option value="Turkana">Turkana</option>
                  <option value="Marsabit">Marsabit</option>
                  <option value="Garissa">Garissa</option>

                  <option value="Kiambu">Uasin Gishu</option>
                  <option value="Turkana">West Pokot</option>
                  <option value="Marsabit">Embu</option>
                  <option value="Garissa">Meru</option>

                  <option value="Kiambu">Nyeri</option>
                  <option value="Turkana">Nyandarua</option>
                  <option value="Marsabit">Kericho</option>
                  <option value="Garissa">Tana River</option>
                </select>
                <BsTruck className="delivery_truck" />
                <div className="template_deliver">
                  <p className="p_door_delivery">Door Delivery</p>
                  <p className="p_free_delivery">Free Delivery</p>
                  <p className="p_deliverby">
                    Deliver by "date" when you order within"Amount of time"{" "}
                  </p>

                  <button className="a_details" onClick={toggleModal}>
                    Details
                  </button>
                </div>

                <SlEnvolopeLetter className="delivery_item" />
                <div className=" receive_template">
                  <p className="p_door_delivery">Pickup Station</p>
                  <p className="p_free_delivery">Free Delivery</p>
                  <p className="p_deliverby">
                    Deliver by "date" when you order within"Amount of time"{" "}
                  </p>
                  <button className="a_details" onClick={toggleModal}>
                    Details
                  </button>
                </div>

                <hr className="rtn_policy_ln" />

                <TbTruckReturn className="delivery_return" />
                <div className=" return_template">
                  <p className="p_door_delivery">Return Policy</p>
                  <p className="p_free_delivery">Easy Return, Quick Refund</p>

                  <button className="a_details" onClick={toggleModal}>
                    Details
                  </button>
                </div>
              </div>

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
