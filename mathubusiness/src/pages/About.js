import React, {useState} from "react";
import "./home.css";
import {FaTimes} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import LeftNav from "./LeftNav";
import { BsTruck } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function About({productShoes, handleAddProduct,handleAddProductDetails }) {
    const  [modal, setModal] = useState(false);

    const toggleModal = () =>{
    
      setModal(!modal)
    
    
    }
  
const [popupcontent, setpopupcontent] = useState([]);
const changecontent = (product) =>{
    setpopupcontent([product]);
    setModal(!modal);
  
  }

  return (
    <div className='container'>
        <div className="products">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
      KSh {product.price}
    </span>


   <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>



<div className="make1_products">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
     KSh {product.price} 
    </span>


   <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>

    


<div className="make2_products">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
     KSh {product.price} 
    </span>


   <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>

<div className="make3_products">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
     KSh {product.price} 
    </span>


   <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>

    



<div className="make4_products">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
     KSh {product.price} 
    </span>


   <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>
<LeftNav  />
<div className="make5_products">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
     KSh {product.price} 
    </span>


   <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}



</div>






{ modal &&  (
  <div className='modal'  onClick={toggleModal} >

    
{popupcontent.map((pop) => {
return(
  <div className="popup_product"
 key={pop.id}>

  <img  
    className="product_image_popup_cart" 
    src={pop.image}
    alt={pop.image}
    
  />
     
  
 <h4 className="pop_product-title" >
      {pop.title}

    </h4>
    
    <p className="product_about">{pop.about}</p>
    <span  className="pop_product-price" >
      Ksh.{pop.price} 
    </span>
    <button className="pop_btn"   onClick={() => handleAddProduct(pop)}  >
   ADD TO CART
  
    </button>
    {/** 
     <button className="pop_btn_wish" >
    Wish List
   
    </button>
*/}
<FaRegHeart  className="icon_heart" />

 <button onClick={changecontent} className='cross'  ><FaTimes/></button>



 <hr className="hr_desc" />
    <small className="small_desc" >DESCRIPTION</small>

    <small className="small_rate" >RATE THE PRODUCT</small>


    <div class="rating">
  <input type="radio" id="star-1" name="star-radio" value="star-1"  />
  <label for="star-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-2" name="star-radio" value="star-1" />
  <label for="star-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-3" name="star-radio" value="star-1" />
  <label for="star-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-4" name="star-radio" value="star-1" />
  <label for="star-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-5" name="star-radio" value="star-1" />
  <label for="star-5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
</div>


  <p className="may_like">YOU MAY ALSO LIKE</p>
  <div className="products_modal">
{productShoes.map((product) => (

  <div className="product" 
   >
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>




    <span  className="product-price" >
     KSh {product.price} 
    </span>


   <div className="buttons"> 
   <button className="btn" onClick={() => changecontent(product)} > details </button>
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
     ))}

</div>


{/** items in the modal                  */}

<div className="modal_left_delivery" >

  <p className="delivery_status" >  Delivery & Status</p> 
  <hr className="delivery_status_line"  />

  <p className="choosing_location_status" > Choose your location </p>

  <select className="counties"  id="counties">
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
< BsTruck  className="delivery_truck" />
<p className="p_door_delivery" >Door Delivery</p>
<p className="p_free_delivery" >Free Delivery</p>
<p  className="p_deliverby">Deliver by "date" when you order within"Amount of time" </p>



</div> 























</div>
)


}
  



  )}
    </div> 

) 



}






    </div>
    





  )
}
