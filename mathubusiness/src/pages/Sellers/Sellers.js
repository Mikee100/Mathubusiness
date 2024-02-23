import React,{useState} from 'react'
import "../Sellers/sellers.css"

import { db} from '../../Firebase';

import { addDoc, collection } from "firebase/firestore"; 
export default function Sellers() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Product Information"), {
        title: title,
        price: price,
        about: about,
        image: image,
     
      });
    
      alert("Registration was successfull ", docRef.id);
    } catch (e) {
      alert("Error adding document: ", e);
    }
    
   

  

};

  return (
    <div className='seller_container' >
      <form className='seller_form' onSubmit={handleSubmit} >
        <input type="text" className='product_title' placeholder='Product Title' value={title} onChange={(e) => setTitle(e.target.value) }  />
        <input type="text" className='product_price' placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value) }  />
        <input type="text" className='product_about' placeholder='Product About' value={about} onChange={(e) => setAbout(e.target.value) }  />
        <input type='text' className='product_seller_image' placeholder='Product image'  value={image} onChange={(e) => setImage(e.target.value) }/>
        <button className='seller_btn' >Send Products</button>
      </form>
      

    </div>
  )
}
