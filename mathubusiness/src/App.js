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

   
<form class="form">
    <label for="search">
        <input class="input" type="text" required="" placeholder="Search item" id="search" />
        <div class="fancy-bg"></div>
        <div class="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
        </div>
        <button class="close-btn" type="reset">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
    </label>
</form>

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
