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
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value) } placeholder="Username" required />
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Login;
