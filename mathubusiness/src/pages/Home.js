import React, {useState} from "react";
import "./home.css";
import {FaTimes} from 'react-icons/fa'


const products = [
    {
        id: 0,
        image:  '/images/bag1.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 1,
        image:  '/images/bag2.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 2,
        image:  '/images/bag3.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 3,
        image:  '/images/bag4.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 4,
        image:  '/images/bag5.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 5,
        image:  '/images/bag6.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    {
        id: 6,
        image:  '/images/bag7.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    },
    
    {
        id: 7,
        image:  '/images/bag8.jfif',
        title:  'Chanel Bag' ,
        price: 2500,
    }
    ];

  

export default function Home() {
    
    const  [modal, setModal] = useState(false);

    const toggleModal = () =>{
    
      setModal(!modal)
    
    
    }
    
const [popupcontent, setpopupcontent] = useState([]);
const changecontent = (product) =>{
    setpopupcontent([product]);
    setModal(!modal);
  
  }

  

    return(
      <main>
        
<div  className="container"> 

<div className="products">
{products.map((product) => (
 
  <div className="product" 
   key={product.id}>

    <img  
      className="product-image"
      src={product.image}
      alt={product.image}
      
    />
    <h4 className="product-title" >
      {product.title}

    </h4>
    <span  className="product-price" >
      {product.price}$ 
    </span>
   <div className="buttons"> 
   <button className="btn" onClick={ () => changecontent(product)}> details </button>
   <button className="btn"> 
    Add to Cart 
   
    </button>



   </div>


  </div>
  
    ))}

</div>

{ modal &&  (
  <div className='modal'  onClick={toggleModal} >

    
{popupcontent.map((pop) => {
return(
  <div className="popup_product"
 key={pop.id}>

  <img  
    className="product_image_popup_cart" 
    src={pop.image}
    alt={pop.image}
    
  />
  
 <h4 className="pop_product-title" >
      {pop.title}

    </h4>
    <span  className="pop_product-price" >
      {pop.price}$ 
    </span>
    <button className="pop_btn" >
    Add to Cart
   
    </button>
     <button className="pop_btn_wish" >
    Wish List
   
    </button>



 <button onClick={changecontent} className='cross'  ><FaTimes/></button>

</div>
)


}
  



  )}
    
    </div> 

) 



}


</div>
</main>
    )
 
        


  
 
}
