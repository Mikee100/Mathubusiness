
import React,{useState} from 'react'
import "./home.css"
export default function Search(productItems) {
  const [searchTerm, setSearchTerm] = useState('');


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
      <div className='container'>
     
        {
          
          productItems?.productItems.filter((val) => {

            if(searchTerm === ""){
              return val;
          }else if(val.title?.toLowerCase().includes(searchTerm.toLowerCase()))
          {
            return val;
          }
          return false;
        })


      .map((val) => {
          return(
            <div className='template'>
              <h1>{val.title}</h1>
               <img src={val.image} alt="" />

            </div>
          )
        } )
      

      }
      </div>
    </div>
  );
};

