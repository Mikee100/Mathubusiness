import React ,{useEffect,useState }from 'react'
import "../src/pages/login.css";
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from './Firebase'


export default function AuthDetails() {

  const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) 
            {
                setAuthUser(user);
            }else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }

    }, [] );

    return (
    <div>
        { authUser ? <p className='member_name' >{`Welcome,${authUser.email} ` } </p> : <p></p>  }
        </div>
  )
}
