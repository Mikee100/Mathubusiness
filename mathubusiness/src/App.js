import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Routees from "./pages/Routees";
import products from "./data";
import Products from "./pages/Products";
import About from "./pages/About";
import Shoppingcart from "./pages/Shoppingcart";
import Contact from "./pages/Contact";
import shoes from "./shoes";
import dressesdata from "./dressesdata";
import fulldata from "./fulldata";
import Search from "./pages/Search";
import Liked from "./pages/Liked";
import Login from "./pages/Login";
import Mainlogin from "./pages/Mainlogin";
import AuthDetails from "./AuthDetails";




function App() {
  const productItems = products;
  const productShoes = shoes;
  const productDresses = dressesdata;
  const fulldatas = fulldata;

  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems ] = useState([]);
 


  const addLikedProduct = (productlike) => {
  
    const ProductExistLike = likedItems.find((items) => items.id === productlike.id);

    if (ProductExistLike) {
      setLikedItems(
        likedItems.map((items) =>
        items.id === productlike.id 
            ? { ...ProductExistLike, quantity: ProductExistLike.quantity + 1 }
            : items
        )
      );
    } else {
      setLikedItems([...cartItems, { ...productlike, quantity: 1 }]);
    }
  };


  
  const handleAddProduct = (product) => {
  
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id 
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
          
        )
        
      );
     
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
    
  };



  return (
    <>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/routees" element={<Routees />} />
          <Route
            path="/products"
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
                likedItems={likedItems}
                addLikedProduct={addLikedProduct}
              />
            }
          />
          <Route
            path="about"
            element={
              <About
                productShoes={productShoes}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route
            path="shoppingcart"
            element={
              <Shoppingcart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance}
              />
            }
          />
          <Route
            path="contact"
            element={
              <Contact
                productDresses={productDresses}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route path="navbar" element={<Navbar />} />
          <Route
            path="search"
            element={
              <Search
                productItems={productItems}
                productShoes={productShoes}
                handleAddProduct={handleAddProduct}
                cartItems={cartItems}
                fulldatas={fulldatas}
              />
              
            }
          />
          <Route path="liked" element={
          <Liked 
         
         likedItems={likedItems}

          />} />
            <Route path="login" element={
          <Login

          />} />
           <Route path="mainlogin" element={
          <Mainlogin

          />} />

        </Routes>

      
        <Navbar cartItems={cartItems} />
        <AuthDetails />
      </main>

    </BrowserRouter>

     
   
    <div  className="footer">
      <p >&copy; Mezuri Shopping 2023</p>
<h3 className="hd_pages" >Pages</h3>
      <ul className="ul_media">

     
     
    <li className="li_media" style={{ textDecoration: 'none'}} >bags</li>     
  
   <a href="./contact" style={{ textDecoration: 'none'}} ><li className="li_media" >Dresses</li> </a>   
    <li className="li_media" style={{ textDecoration: 'none'}} >Shoes</li>   
    <li className="li_media" style={{ textDecoration: 'none'}} >Favourites</li>    
     <li className="li_media" style={{ textDecoration: 'none'}} >Search</li>    

      </ul>
      


    </div>

    </>
  );
}

export default App;
