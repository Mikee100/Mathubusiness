// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA29saYV19qi0ZT42nav7AlCU_giMNSPSg",
  authDomain: "onlinebusiness-e2ace.firebaseapp.com",
  projectId: "onlinebusiness-e2ace",
  storageBucket: "onlinebusiness-e2ace.appspot.com",
  messagingSenderId: "559424156771",
  appId: "1:559424156771:web:4fb7a9735e4acee9e67456",
  measurementId: "G-VCJDVM2CH6"
};





// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase();
export const auth = getAuth(app);
export const db = getFirestore(app);
export  { app};