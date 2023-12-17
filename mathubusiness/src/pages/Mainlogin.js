
import React, { useState } from 'react';
import "./login.css";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Mainlogin() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
  

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            console.log(userCredential)
            alert("Logged in Successfully")
            history("/products");
            // ...
          })
          .catch((error) => {
          alert("email or password mismatch")
          });

    };
  return (
    <div>
      <div className='container'>

      <form class="form" onSubmit={handleSubmit}>
    <div class="flex-column">
      <label>Email </label></div>
      <div class="inputForm">
      <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
        <input type="text" class="input" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      </div>
    
    <div class="flex-column">
      <label>Password </label></div>
      <div class="inputForm">
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
        <input type="password" class="input" name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
        
      </div>
    
    <div class="flex-row">
      <div>
      <input type="checkbox" />
      <label>Remember me </label>
      </div>
      <span class="span">Forgot password?</span>
    </div>
    <button class="button-submit">Sign In</button>
    <p class="p">Don't have an account? <span class="span">Sign Up</span>

    </p><p class="p line">Or With</p>

    <div class="flex-row">
      <button class="btn google">
  


   
        Google 
        
      </button><button class="btn apple">


        Apple 
        
</button></div></form>




        {/** 
        
    <form onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <input type="email" className="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      <input type="password"  className='password' name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
      <button type="submit" className='registerbtn'>Register</button>

      <p className='haveacc' >Dont have an Account?<a className='acc_login' href='./login'>Sign up</a> </p>

    </form>
    */}
    </div>
        </div>
  )
}
