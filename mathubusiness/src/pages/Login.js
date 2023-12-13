import React, { useState } from 'react';
import "./login.css";
import { auth } from '../Firebase';
import {  createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {



        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
       
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in 
                  //const user = userCredential.user;
                  console.log(userCredential)
                  // ...
                })
                .catch((error) => {
                 
                });

        };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <input type="email" className="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      <input type="password"  className='password' name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
      <button type="submit" className='registerbtn'>Register</button>

      <p className='haveacc' >Already have an Account?<a className='acc_login' href='./mainlogin'>Sign in</a> </p>

    </form>
    </div>
  );
};

export default Login;
