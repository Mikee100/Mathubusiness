
import {useState} from 'react'
import "./home.css";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Myaccount() {
  const [userData, setUserData] = useState(null);

  const show = async () => {
    const docRef = doc(db, "Account Information", "Bs801HKy3gTM6mKld6up");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className="mymostdata">
      <h1>Waweru</h1>
      <button onClick={show}>Show</button>
      {userData && (
        <div>
          <p>First Name: {userData.fname}</p>
          <p>Second Name: {userData.sname}</p>
          
          <p>Email: {userData.email}</p>
          {/* Show other data properties as needed */}
        </div>
      )}
    </div>
  );
}