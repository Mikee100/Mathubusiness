import React from 'react'
import products from '../data'
import Card from './card';

const Amazon =  ({handleClick}) => {
  return (
  <section>
    {products.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick}     />
    ) )}
  </section>
  )
}

export default Amazon;