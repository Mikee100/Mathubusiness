
import React,{useState} from 'react'
import "./home.css"
export default function Search(productItems) {
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
    

{productItems?.productItems
// eslint-disable-next-line
        .filter((val) => {
          if (val.title?.toLowerCase().includes(searchTerm?.toLowerCase())) {
            return val;
          }
        })
        
        .map((val) => {
          return (
            
            <div className='template'>
              
              <h1>{val.title}</h1>
               <img src={val.image} alt="" />
               <h1>{val.price}</h1>

            </div>
           
          );
        })}
      
    </div>
  );
};

