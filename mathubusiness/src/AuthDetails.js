import React ,{useEffect,useState }from 'react'

import { onAuthStateChanged } from 'firebase/auth'

import { auth } from './Firebase'

export default function AuthDetails() {
  const{authUser, setAuthUser} = useState(null);
  
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user);
            }else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
// eslint-disable-next-line
    }, [] )

    return (
    <div>{ authUser ? <p> Signed in</p> : <p>Signed out</p>  }</div>
  )
}
