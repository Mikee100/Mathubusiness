
import {useState} from 'react'
import "./home.css";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Myaccount() {
  const [userData, setUserData] = useState(null);

  const show = async () => {
    const docRef = doc(db, "Account Information", "D82rJGF3JvrQg2mCQenW");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="mymostdata">
     
      <button onClick={show}>Show</button>
      {userData && (
        <div>



          <p>First Name: <small>{userData.fname}</small></p>
          <p>Second Name: {userData.sname}</p>
          <p>Phone Number: {userData.number}</p>
          <p>Address: {userData.address}</p>
          <p>City: {userData.city}</p>
          <p>Region: {userData.region}</p>
          <p>Email: {userData.email}</p>
       
        </div>
      )}
    </div>
  );
}