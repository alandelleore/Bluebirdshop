// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBAmgtxxGq95vT5zowJILzKGJFifA38gE",
  authDomain: "bluebird-2c2a8.firebaseapp.com",
  projectId: "bluebird-2c2a8",
  storageBucket: "bluebird-2c2a8.appspot.com",
  messagingSenderId: "1062267705509",
  appId: "1:1062267705509:web:f8a1431a254444d7abd54c",
  measurementId: "G-JPBY6YBTKB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
