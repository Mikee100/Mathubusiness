import React, { useState } from 'react';
import "./login.css";

import {db} from "../Firebase"

import { addDoc, collection } from "firebase/firestore"; 


const Login = () => {

  const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
       
        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const docRef = await addDoc(collection(db, "Account Information"), {
                  username: username,
                  email: email,
                  password: password
                });
              
                alert("Registration was succesfull ", docRef.id);
              } catch (e) {
                alert("Error adding document: ", e);
              }

        };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <input type="text" className='username' name="username" value={username} onChange={(e) => setUsername(e.target.value) } placeholder="Username" required />
      <input type="email" className="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      <input type="password"  className='password' name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
      <button type="submit" className='registerbtn'>Register</button>

      <p className='haveacc' >Already have an Account?<a className='acc_login' href='./mainlogin'>Sign in</a> </p>

    </form>
    </div>
  );
};

export default Login;
