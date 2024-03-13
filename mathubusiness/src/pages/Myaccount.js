import { useState, useEffect } from 'react';
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function Myaccount() {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const documentPath = `Account Information/${user.uid}`;
        console.log("Document Path:", documentPath);
        console.log("User UID:", user.uid);
        const docRef = doc(db, "Account Information", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          alert("No such document!");
        }
      } else {
        alert('No user is signed in.');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  if (userData) {
    return (
      <div className="mymostdata">
        <div>
           <p>Address: {userData.address}</p>
           <p>City: {userData.city}</p>
           <p>Email: {userData.email}</p>
          <p>First Name: <small>{userData.fname}</small></p>
           <p>Phone Number: {userData.number}</p>
          <p>Second Name: {userData.sname}</p>
          <p>Region: {userData.region}</p>
        </div>
      </div>
    );
  } else {
    return <div>No user data available</div>;
  }
}