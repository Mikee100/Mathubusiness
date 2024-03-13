import React,{useEffect} from 'react'
import { db } from './Firebase';
function Push({productItems}) {
    useEffect(() => {
        const productsRef = db.ref('products');
        productItems.forEach(product => {
          productsRef.push(product);
        });
       console.log(productsRef) 
      }, [productItems]);

      
  return (
    <div>
      
    </div>
  )
}

export default Push
