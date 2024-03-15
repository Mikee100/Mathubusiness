import React, { useState } from 'react';
import "../Sellers/sellers.css";

import { db } from '../../Firebase';

import { addDoc, collection } from "firebase/firestore";

export default function Sellers() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");

  
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
          image2: image2,
          image3: image3,
          image4: image4,
          image5: image5,
          image6: image6,

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
        <div  className='myimagesboxes' >
        <input type='text' className='product_seller_image' placeholder='Product image' value={image} onChange={(e) => setImage(e.target.value)} />
        <input type='text' className='product_seller_image' placeholder='Thumbnail 1' value={image2} onChange={(e) => setImage2(e.target.value)} />
        <input type='text' className='product_seller_image' placeholder='Thumbnail 2' value={image3} onChange={(e) => setImage3(e.target.value)} />
        <input type='text' className='product_seller_image' placeholder='Thumbnail 3' value={image4} onChange={(e) => setImage4(e.target.value)} />
        <input type='text' className='product_seller_image' placeholder='Thumbnail 4' value={image5} onChange={(e) => setImage5(e.target.value)} />
        <input type='text' className='product_seller_image' placeholder='Thumbnail 5' value={image6} onChange={(e) => setImage6(e.target.value)} />
</div>
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