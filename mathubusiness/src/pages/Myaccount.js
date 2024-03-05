import { useState, useEffect } from 'react';

import { getAuth } from "firebase/auth";
import { useAuthValue } from './AuthContext'


export default function Myaccount() {
  const [ setUserData] = useState(null);
  const auth = getAuth();

  const { currentUser } = useAuthValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
    
          setUserData(user);
        } else {
          setUserData(null);
        }
      
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <div className="mymostdata">
      {currentUser ? (
        <div>
          <p>Name: {currentUser.displayName}</p>
          <p>Email: {currentUser.email}</p>
          {/* other user details */}
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}