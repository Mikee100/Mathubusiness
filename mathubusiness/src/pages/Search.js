
import React,{useState} from 'react'

export default function Search(productItems) {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div>
      
      <input
        type="text"
      
        onChange={(event) => {
          setSearchTerm(event.target.value);
        } }
        placeholder="Search..."
      />
      <div className='container'>
     
        {
           // eslint-disable-next-line
          productItems.filter((val) => {

            if(searchTerm === ""){
              return val;
          }else if(val.title.toLowerCse().includes(searchTerm.toLowerCase()))
          {
            return val;
          }
        })
        .map((val) => {
          return(
            <div className='template'>
              <h1>{val.title}</h1>

            </div>
          )
        } )
        }

      </div>
    </div>
  );
};

