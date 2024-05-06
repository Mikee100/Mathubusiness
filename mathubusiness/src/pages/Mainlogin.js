
import React, { useState,useEffect } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";


export default function Mainlogin() {
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const history = useNavigate();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        setFirstName(user.displayName); // Set the first name
      } else {
        setUser(null);
        setFirstName('');
      }
    });

    return () => unsubscribe();
  }, [auth]);


  const handleSignIn = async (e) => {
    e.preventDefault();
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Fetch additional user information
        // For example, if you have stored the first name in the user profile
        const firstName = user.displayName; // Assuming you stored the first name in displayName
        alert("First Name:", firstName);
        alert("Logged in Successfully");
        history("/");
        
      })
      .catch((error) => {
        alert("Email or password mismatch");
      });
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className='mainlogin_container'>
       <p>Welcome, {firstName}</p>
      {user ? (
        <div>
        
          <button onClick={handleSignOut}>Sign Out</button>
          </div>
      ) : (

<form class="form">
    <div class="flex-column">
      <h2 className='h2_sign_in' >Sign In</h2>
      <label>Email </label></div>
      <div class="inputForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20"><g data-name="Layer 3" id="Layer_3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
        <input placeholder="Enter your Email" class="inputs" type="text" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </div>
    
    <div class="flex-column">
      <label>Password </label></div>
      <div class="inputForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
        <input placeholder="Enter your Password" class="inputs" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
      </div>
    
    <div class="flex-row">
      <div>
      <input type="radio" />
      <label>Remember me </label>
      </div>
      <span class="span">Forgot password?</span>
    </div>
    <button class="button-submit" onClick={handleSignIn} >Sign In</button>
    <a href='./login' > <p class="p">Don't have an account? <span class="span" >Sign Up</span>

    </p></a>
        
</form>
















      
      )}
    </div>

 



     
        </div>
  )
}
