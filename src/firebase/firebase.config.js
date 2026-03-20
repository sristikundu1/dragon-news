// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6t1BD9Wvq8pLkoxevOC8LbmpWIVVtqZY",
  authDomain: "dragon-news-84904.firebaseapp.com",
  projectId: "dragon-news-84904",
  storageBucket: "dragon-news-84904.firebasestorage.app",
  messagingSenderId: "652792476307",
  appId: "1:652792476307:web:9cfcad3a31ca42607a1366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);