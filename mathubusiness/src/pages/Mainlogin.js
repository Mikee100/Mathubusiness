
import React, { useState } from 'react';
import "./login.css";

import {db} from "../Firebase"

import { addDoc, collection } from "firebase/firestore"; 


export default function Mainlogin() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "Account Information"), {
        
              email: email,
              password: password
            });
          
            alert("Registration was succesfull ", docRef.id);
          } catch (e) {
            alert("Error adding document: ", e);
          }

    };
  return (
    <div>
      <div className='container'>
    <form onSubmit={handleSubmit}>
      
      <input type="email" className="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      <input type="password"  className='password' name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
      <button type="submit" className='registerbtn'>Register</button>

      <p className='haveacc' >Dont have an Account?<a className='acc_login' href='./login'>Sign up</a> </p>

    </form>
    </div>
        </div>
  )
}
