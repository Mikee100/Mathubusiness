import React,{useState} from 'react'
import { database } from '../../Firebase';
import "../Dresses/listdress.css"
export default function Listdress() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const productRef = database.ref('products').push();
        productRef.set({
          name,
          price: parseFloat(price),
          description,
        });
        setName('');
        setPrice('');
        setDescription('');
      };
  return (
    <div>
     <form onSubmit={handleSubmit} className='listdress_form' >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}

        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
        
    </div>
  )
}
