import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Routees from "./pages/Routees";
import products from "./data";
import Products from "./pages/Products";

import Shoppingcart from "./pages/Shoppingcart";

import shoes from "./shoes";
import dressesdata from "./dressesdata";
import fulldata from "./fulldata";
import Search from "./pages/Search";
import Liked from "./pages/Liked";
import Login from "./pages/Login";
import Mainlogin from "./pages/Mainlogin";
import AuthDetails from "./AuthDetails";
import ProductDetails from "./pages/ProductDetails";
import Myaccount from "./pages/Myaccount";
import Bags from "./pages/Bags";
import Footer from "./pages/Footer";
import shoessandals from "./shoessandals";
import womenboots from "./db/womenboots";
import Shoes from "./pages/Shoes";
import Dresses from "./pages/Dresses";
import Sandals from "./pages/womenshoescategories/Sandals";

function App() {
  const productItems = products;
  const productShoes = shoes;
  const productDresses = dressesdata;
  const fulldatas = fulldata;
  const productshoessandals = shoessandals;
  const fashionwomenboot = womenboots;

  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const [productdetails, setproductdetails] = useState([]);

  const handleAddProductDetails = (productdetailss) => {
    const ProductExistDetail = productdetails.find(
      (itemsdetails) => itemsdetails.id === productdetailss.id
    );

    if (ProductExistDetail) {
      setproductdetails(
        productdetails.map((item) =>
          item.id === productdetailss.id ? { ...ProductExistDetail } : item
        )
      );
    } else {
      setproductdetails([{ ...productdetailss }]);
    }
  };

  const addLikedProduct = (productlike) => {
    const ProductExistLike = likedItems.find(
      (items) => items.id === productlike.id
    );

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
              path="/"
              element={
                <Products
                  productItems={productItems}
                  handleAddProduct={handleAddProduct}
                  likedItems={likedItems}
                  addLikedProduct={addLikedProduct}
                  handleAddProductDetails={handleAddProductDetails}
                  productShoes={productShoes}
                  productshoessandals={productshoessandals}
                  fashionwomenboot={fashionwomenboot}
                  productDresses={productDresses}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  productItems={productItems}
                  handleAddProduct={handleAddProduct}
                  likedItems={likedItems}
                  addLikedProduct={addLikedProduct}
                  handleAddProductDetails={handleAddProductDetails}
                  productShoes={productShoes}
                  productshoessandals={productshoessandals}
                  fashionwomenboot={fashionwomenboot}
                  productDresses={productDresses}
                />
              }
            />
            <Route
              path="bags"
              element={
                <Bags
                  productItems={productItems}
                  handleAddProduct={handleAddProduct}
                  likedItems={likedItems}
                  addLikedProduct={addLikedProduct}
                  handleAddProductDetails={handleAddProductDetails}
                  productShoes={productShoes}
                />
              }
            />
            <Route
              path="shoes"
              element={
                <Shoes
                  productShoes={productShoes}
                  handleAddProduct={handleAddProduct}
                  handleAddProductDetails={handleAddProductDetails}
                  productshoessandals={productshoessandals}
                  fashionwomenboot={fashionwomenboot}
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
                  handleAddProductDetails={handleAddProductDetails}
                />
              }
            />
            <Route
              path="dresses"
              element={
                <Dresses
                  productDresses={productDresses}
                  handleAddProduct={handleAddProduct}
                  handleAddProductDetails={handleAddProductDetails}
                />
              }
            />
            <Route
              path="sandals"
              element={
                <Sandals
                  productshoessandals={productshoessandals}
                  handleAddProduct={handleAddProduct}
                  handleAddProductDetails={handleAddProductDetails}
                />
              }
            />
            <Route path="navbar" element={<Navbar />} />

            <Route
              path="/productdetails"
              element={
                <ProductDetails
                  handleAddProduct={handleAddProduct}
                  productdetails={productdetails}
                  productItems={productItems}
                  addLikedProduct={addLikedProduct}
                />
              }
            />

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
            <Route path="liked" element={<Liked likedItems={likedItems} />} />
            <Route path="login" element={<Login />} />
            <Route path="mainlogin" element={<Mainlogin />} />
            <Route path="myaccount" element={<Myaccount />} />

            <Route path="" element={<Footer />} />
          </Routes>

          <AuthDetails />
          <Navbar cartItems={cartItems} />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
