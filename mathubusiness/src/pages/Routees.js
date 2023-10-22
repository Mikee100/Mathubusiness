import React from 'react'
import{Route, Routes} from "react-router-dom"
import Products from './Products'
import Search from './Search'

export default function Routees(productItems) {
  return (
    <div>
   
      <Routes>

   <Route   element={<Products productItems={productItems} />} >  </Route>
   <Route   element={<Search productItems={productItems} />} >  </Route>
   
</Routes>

    </div>
  )
}
