import React from 'react'
import{Route, Routes} from "react-router-dom"
import Products from './Mainpage'
import Search from './Search'


export default function Routees(productItems,productShoes,productDresses) {
  return (
    <div>
   
      <Routes>

   <Route   element={<Products productItems={productItems}  />} >  </Route>
   <Route   element={<Search productItems={productItems}    productShoes={productShoes}
                productDresses={productDresses} />} > 
                
             
               </Route>
  
   
</Routes>

    </div>
  )
}
