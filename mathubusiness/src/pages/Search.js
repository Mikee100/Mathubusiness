
import React,{useState} from 'react'
import "./home.css"
import "./navbar.css"
export default function Search(productItems,productDresses,productShoes, handleAddProduct) {
  const [searchTerm, setSearchTerm] = useState("");



  return (
    <div>
      
      <input
        type="text"
        className='search'
      
        onChange={(event) => {
          setSearchTerm(event.target.value);
        } }
        placeholder="Search..."
      />

      
       <div className='template'>
        
{productItems?.productItems
// eslint-disable-next-line
        .filter((product) => {
          if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return product;
          }
        })
        
        .map((product) => {

          return (
            
      
              <div className='template-products' > 
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
   <button className="btn" > details </button>
   <button className="btn"  onClick={() => handleAddProduct(product)} > 
    Add to Cart 
   
    </button>
              </div>
              </div>
              </div>
           
          );
        })}
       </div>
  
    


  {/** <div className='template2'>
{productShoes?.productShoes
// eslint-disable-next-line
        .filter((val) => {
          if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        })
        
        .map((val) => {

          return (
              <div className='template2-products' > 
              <h1>{val.title}</h1>
               <img src={val.image} alt="" />
               <h1>{val.price}</h1>
              </div>
          );
        })}
       </div> */}    
  

    </div>
  );
};

