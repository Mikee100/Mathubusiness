import { useState, useEffect } from 'react';
import "./home.css";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../Firebase"

export default function Myaccount() {
 

  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "Account Information"))
      .then((querySnapshot)=>{
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setTodos(newData);
          console.log(todos, newData);
      })
  }
  useEffect(()=>{
    fetchPost();
  }, [])
  return (
    <div className='mymostdata' >{
      todos.map((todo,i)=>(
          <p key={i}>
              {todo.todo}
          </p>
      ))
    }
    <h1>Waweru</h1>
    </div>
  )
}
