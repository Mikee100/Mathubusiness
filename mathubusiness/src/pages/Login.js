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
     
          
    
    

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <input type="text" className="username" name="full names" value={name} onChange={(e) => setName(e.target.value) } placeholder="Full Names" required />
      <input type="email" className="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      <input type="password"  className='password' name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
      <button type="submit" className='registerbtn'>Register</button>

      <p className='haveacc' >Already have an Account?<a className='acc_login' href='./mainlogin'>Sign in</a> </p>

    </form>
    </div>
  );
};

export default Login;
