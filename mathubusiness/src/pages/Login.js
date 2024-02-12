import React, { useState } from 'react';
import "./login.css";
import { auth } from '../Firebase';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {db} from "../Firebase"

import { addDoc, collection } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';



const Login = () => {


        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
       
        const history = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const docRef = await addDoc(collection(db, "Account Information"), {
                name: name,
                email: email,
                password: password
              });
            
              alert("Registration was successfull ", docRef.id);
            } catch (e) {
              alert("Error adding document: ", e);
            }
            
            createUserWithEmailAndPassword(auth,email, password)
                .then((userCredential) => {
                  // Signed in 
                  //const user = userCredential.user;
                  console.log(userCredential)
                  history("/products")

                  // ...
                })
                .catch((error) => {
                  alert(error)
                  
                  
                });


          

        };
     
          
        const [selectedCity, setSelectedCity] = useState('');
        const [selectedLocation, setSelectedLocation] = useState('');
        
        // Define your option lists
        const options = {
          Nairobi: ['Westlands', 'Kayole', 'Kahawa','Dagoretti','Kasarani','Roysambu','Parklands'],
          Nakuru: ['Nakuru Town', 'Section 58']
        };
      
        const handleCityChange = (event) => {
          setSelectedCity(event.target.value);
          setSelectedLocation('');
        };
      
        const handleLocationChange = (event) => {
          setSelectedLocation(event.target.value);
        };
    

  return (
    <div className='container'>

    <form onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <input type="text" className="fname" name="first name" value={name} onChange={(e) => setName(e.target.value) } placeholder="First Name" required />
    <input type="text" className="sname" name="Second name" value={name} onChange={(e) => setName(e.target.value) } placeholder="Second Name" required />
    <input type="number" className="pnumber" name="pnumber" value={name} onChange={(e) => setName(e.target.value) } placeholder="Phone Number" required />
    <input type="text" className="address" name="address" value={name} onChange={(e) => setName(e.target.value) } placeholder="Address" required />
    <div>
      
      <label htmlFor="city">Select City:</label>
      <select id="city" value={selectedCity} onChange={handleCityChange} className='options' >
        <option value="">Select City</option>
        <option value="Nairobi">Nairobi</option>
        <option value="Nakuru">Nakuru</option>
      </select>

      {selectedCity && (
        <div>

          <select id="location" value={selectedLocation} onChange={handleLocationChange} className='diffoptions' >
      
            {options[selectedCity].map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
      )}
    </div>
      
      <input type="email" className="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      <input type="password"  className='password' name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
      <button type="submit" className='registerbtn'>Register</button>

      <p className='haveacc' >Already have an Account?<a className='acc_login' href='./mainlogin'>Sign in</a> </p>

    </form>
    </div>
  );
};

export default Login;



