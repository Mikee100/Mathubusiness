import React, { useState, useEffect } from 'react';
import "../Sellers/sellers.css";

import { db } from '../../Firebase';

import { addDoc, collection, getDocs } from "firebase/firestore";

export default function Sellers() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState([]);

 

  const handleCategorySubmit = (e) => {
    const category = e.target.value;
    handleSubmit(category, e);
  };

  const handleSubmit = async (category, e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, category), {
        title: title,
        price: price,
        about: about,
        image: image,
      });

      alert("Registration was successful ", docRef.id);
    } catch (e) {
      alert("Error adding document: ", e);
    }
  };
  

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "Product Information"));
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(products);
      setProducts(products);
    };
    fetchProducts();
  }, []);

 

  return (
    <div className='seller_container'>
      <form className='seller_form' onSubmit={handleSubmit}>
        <input type="text" className='product_title' placeholder='Product Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className='product_price' placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" className='product_about' placeholder='Product About' value={about} onChange={(e) => setAbout(e.target.value)} />
        <input type='text' className='product_seller_image' placeholder='Product image' value={image} onChange={(e) => setImage(e.target.value)} />

        <select name="category" onChange={handleCategorySubmit} className='mycategory' >
          <option value="">Select Category</option>
          <option value="Shoes">Shoes</option>
          <option value="Bags">Bags</option>
          <option value="dresses">Dresses</option>
        </select>

        <button className='seller_btn'>Send Products</button>
      </form>

      <div className='product_list'>
        {products.map(product => (
          <div className='product' key={product.id}>
            <p className="product-title">{product.title}</p>
            <p>{product.about}</p>
            <p className="product-price">{product.price}</p>
            <img className='product-image' src={product.image} alt={product.image} />
          </div>
        ))}
      </div>
    </div>
  )
}