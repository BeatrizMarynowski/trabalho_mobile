import { initializeApp, } from "firebase/app";
import { addDoc, collection, deleteDoc, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7ZASgZ6xGNO0055T8B16ZSX-v8lbb4AM",
  authDomain: "petcare-23a72.firebaseapp.com",
  projectId: "petcare-23a72",
  storageBucket: "petcare-23a72.firebasestorage.app",
  messagingSenderId: "895247139124",
  appId: "1:895247139124:web:43d514602f8a2d66542561"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { addDoc, app, collection, db, deleteDoc, getDocs, getFirestore, auth };
export default db;
