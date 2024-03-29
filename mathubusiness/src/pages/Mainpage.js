import React,{useState,useEffect} from "react";
import "./navbar.css";
import "./home.css";
import "./modal.css";
import { db} from '../Firebase';

import {collection, getDocs  } from "firebase/firestore"; 

import LeftNav from "./LeftNav";

import { Link } from "react-router-dom";
import Footer from "./Footer";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Mainpage({productItems,   handleAddProductDetails,productDresses, productShoes,fashionwomenboot,productshoessandals}) {
  const [myproducts, MysetProducts] = useState([]);
  const [products_shoes, setProducts_shoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "Product Information"));
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(products);
      MysetProducts(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);


  useEffect(() => {

    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "Shoes"));
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(products);
      setProducts_shoes(products);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);


  
  if (isLoading) {
    return <div className="loading-message">Loading products...</div>;
  }

  
  if (isLoading) {
    return (
      <div className="mainpage_mastercontainer">
        <div className="loading-container">
          <div className="loading-message">Loading products...</div>
          <div className="loading-items">
            {Array.from({ length: 12 }, (_, index) => (
              <div key={index} className="loading-item"></div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
  
    <div className="mainpage_mastercontainer">
    <div className='container' id="container" key={1} >
      
  

           
           <div className="products"    >
           <div className="prdt_category" >
                 <h3 className="h3_title" >Bags</h3>
                 <a href="./bags" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>
      
     
           
        
{myproducts.map((product,index) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`}  >
            {isLoading ?  (
        <div className="loading">
          <p>Loading products...</p>
          {/* Add a loading spinner if you want */}
        </div>
      ) : (
     <div className="product_firstmainpage"  
  onClick={() => handleAddProductDetails(product)} key={product.id}>
    
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <p className="product-title" >
      {product.title}

    </p>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>

  </div>
  ) }


</Link> 

     ))};
  

</div>

<div className="make1_products">

<div className="prdt_category" >
                 <h3>Shoes</h3>
                 <a href="./shoes" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>
{products_shoes.map((product) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`}   >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />

    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>
    



<div className="make2_products">
<div className="prdt_category" >
                 <h3>Shoes</h3>
                 <a href="./shoes" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>

{productItems.map((product) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`}  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>
<div className="make3_products">
<div className="prdt_category" >
                 <h3>Shoes</h3>
                 <a href="./shoes" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>
{fashionwomenboot.map((product) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`}  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>



<div className="make4_products">
<div className="prdt_category" >
                 <h3>Shoes</h3>
                 <a href="./shoes" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>

{productItems.map((product) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`}  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>

<div className="make5_products">
<div className="prdt_category" >
                 <h3>Shoes</h3>
                 <a href="./shoes" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>

{productshoessandals.map((product) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`}  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>


<div className="make6_products">
<div className="prdt_category" >
                 <h3>Shoes</h3>
                 <a href="./shoes" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>

{productItems.map((product) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`} >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>

<div className="make7_products">
<div className="prdt_category" >
                 <h3>Shoes</h3>
                 <a href="./shoes" className="a_bags_see_all" >See all<MdKeyboardArrowRight className="right_see_all" /></a>
            </div>

{productDresses.map((product) => (
  

  <Link key={product.id}
  // Moving to the product page
  to={`/productdetails?name=${product.title}?id=${product.id}`}  >
     <div className="product"  
  onClick={() => handleAddProductDetails(product)}>
 
    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
     
   
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price"   >
     KSh {product.price} 
    </span>


{/** 
    <div className="buttons"> 
   <Link to="/productdetails" > <button className="btn" onClick={() => handleAddProductDetails(product)} > details </button></Link> 
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>


   </div>
*/}

  </div>
  


</Link> 

     ))}

</div>

<Link to='./sellers' className="sellers_link" >Sell on Mezuri</Link>

<LeftNav />








    
    </div>
    <Footer />
</div>



  )
}
