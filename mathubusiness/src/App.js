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
import Search from "./pages/Search";
import Liked from "./pages/Liked";
import Login from "./pages/Login";
function App() {
  const productItems = products;
  const productShoes = shoes;
  const productDresses = dressesdata;

  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems ] = useState([]);
 


  const addLikedProduct = (product) => {
  
    const ProductExist = likedItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setLikedItems(
        likedItems.map((item) =>
          item.id === product.id 
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setLikedItems([...cartItems, { ...product, quantity: 1 }]);
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
            path="products"
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

        </Routes>

        <Navbar cartItems={cartItems} />
      </main>

    </BrowserRouter>
    {/** 
    <div  className="footer">
      <p >&copy; Mathu shoe 2023</p>
<h3 className="hd_pages" >Pages</h3>
      <ul className="ul_media">

     
        
       {/*  
     <Link to="/products" style={{ textDecoration: 'none'}}><li className="li_media" >bags</li></Link>     
    
     <Link to="./contact" style={{ textDecoration: 'none'}}><li className="li_media" >Dresses</li></Link>     
     <Link to="./about" style={{ textDecoration: 'none'}}><li className="li_media" >Shoes</li></Link>    
     <Link to="./liked" style={{ textDecoration: 'none'}}><li className="li_media">Favourites</li></Link>    
     <Link to="./search" style={{ textDecoration: 'none'}}><li className="li_media">Search</li></Link>    

      </ul>
      


    </div>
*/ }
    </>
  );
}

export default App;
