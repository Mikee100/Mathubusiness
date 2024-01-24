import React from 'react'

export default function ProductDetails({  productdetails,
    handleAddProductDetails,}) {
  return (
    <div>
        {productdetails.map((item)=> (
            <div>
                        <img className="" src={item.image} alt={item.image} />
                        <p>  {item.about} </p>

                </div>

        ) )

        }
      
    </div>
  )
}
