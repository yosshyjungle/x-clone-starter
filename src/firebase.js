import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiwIJwSShGP7IJ0jMxHEPKfuNAk53yl7I",
  authDomain: "x-clone-d7873.firebaseapp.com",
  projectId: "x-clone-d7873",
  storageBucket: "x-clone-d7873.firebasestorage.app",
  messagingSenderId: "36164192399",
  appId: "1:36164192399:web:17f0092a8c43281c50c8fa"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;