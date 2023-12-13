import React ,{useEffect,useState }from 'react'

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
    <div>{ authUser ? <p>{`Signed in as ${authUser.name} ` } </p> : <p>Signed out</p>  }</div>
  )
}
