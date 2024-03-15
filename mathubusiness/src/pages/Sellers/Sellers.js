import React, { useState } from 'react';
import "../Sellers/sellers.css";

import { db } from '../../Firebase';

import { addDoc, collection } from "firebase/firestore";

export default function Sellers() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  
  const [selectedCategories, setSelectedCategories] = useState([]);
 

  const handleCategorySubmit = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      selectedCategories.forEach(async (category) => {
        const docRef = await addDoc(collection(db, category), {
          title: title,
          price: price,
          about: about,
          image: image,
        });
        alert("Registration was successful in " + category, docRef.id);
      });
    } catch (e) {
      alert("Error adding document: ", e);
    }
  };
  

 
 

  return (
    <div className='seller_container'>
      <form className='seller_form' onSubmit={handleSubmit}>
        <input type="text" className='product_title' placeholder='Product Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className='product_price' placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" className='product_about' placeholder='Product About' value={about} onChange={(e) => setAbout(e.target.value)} />
        <input type='text' className='product_seller_image' placeholder='Product image' value={image} onChange={(e) => setImage(e.target.value)} />

        <select name="category" onChange={(e) => handleCategorySubmit(e.target.value)} className='mycategory' multiple>
  <option value="">Select Category</option>
  <option value="Shoes" className={selectedCategories.includes('Shoes') ? 'selected-category' : ''}>Shoes</option>
  <option value="Bags" className={selectedCategories.includes('Bags') ? 'selected-category' : ''}>Bags</option>
  <option value="dresses" className={selectedCategories.includes('dresses') ? 'selected-category' : ''}>Dresses</option>
  <option value="Product Information" className= {selectedCategories.includes('Product Information') ? 'selected-category' : ''}>All Products</option>
</select>
        <button className='seller_btn'>Send Products</button>
      </form>

  
    </div>
  )
}