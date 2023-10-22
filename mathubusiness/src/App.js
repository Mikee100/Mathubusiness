import { useState } from 'react';
import './App.css';
import { Routes,Route,BrowserRouter} from "react-router-dom";
import Navbar from './pages/Navbar';
import Routees from './pages/Routees';
import products from './data';
import Products from './pages/Products';
import About from './pages/About';
import Shoppingcart from  "./pages/Shoppingcart"
import Contact from './pages/Contact';
import shoes from './shoes';
import dressesdata from './dressesdata'
function App() {
  const productItems = products;
  const productShoes = shoes;
  const productDresses = dressesdata;

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) =>{


    const ProductExist = cartItems.find((item) => item.id === product.id );

    if(ProductExist){
      setCartItems(
        cartItems.map((item) =>
         item.id === product.id
          ?
      {...ProductExist, quantity:ProductExist.quantity + 1}
      : item
      )
      );
      }
  
  else{
    setCartItems([...cartItems, {...product, quantity: 1}]);

  }
  };



  
  const handleRemoveProduct = (product) =>{
  

    const ProductExist = cartItems.find((item) => item.id === product.id );

    if(ProductExist.quantity === 1){
      setCartItems(
        cartItems.filter((item) =>
         item.id !== product.id)
  );
      }
  
  else{
    setCartItems(
      cartItems.map((item) => 
      item.id === product.id
      ? {...ProductExist, quantity:ProductExist.quantity-1}
      :item
      ))
        
    }
  }
 

  const handleCartClearance = () =>{
    setCartItems([]);
  }
  
  

    
  return (


      <BrowserRouter>

   

<main>
  
 


      <Routes> 

   

<Route path="/routees"  element={<Routees  />}/>
<Route path='products' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}   />}  />
<Route path='about' element={<About productShoes={productShoes} handleAddProduct={handleAddProduct} />}  />
<Route path='shoppingcart' element={<Shoppingcart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />}  />
<Route path='contact' element={<Contact productDresses={productDresses} handleAddProduct={handleAddProduct} />}  />
<Route path="navbar" element={<Navbar />}/>
</Routes>
<Navbar  cartItems={cartItems} />  
 </main>

      </BrowserRouter>

   
        
  )
  }

export default App;
