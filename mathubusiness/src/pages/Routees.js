import React from 'react'
import{Route, Routes} from "react-router-dom"
import Products from './Products'

export default function Routees(productItems) {
  return (
    <div>
   
      <Routes>

   <Route   element={<Products productItems={productItems} />} >  </Route>
      
   
</Routes>

    </div>
  )
}
