// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxqM-eIkUnjTar4031lSDN6cWVmZGSAHE",
  authDomain: "sports-photographer-815dd.firebaseapp.com",
  projectId: "sports-photographer-815dd",
  storageBucket: "sports-photographer-815dd.appspot.com",
  messagingSenderId: "279965613301",
  appId: "1:279965613301:web:4dc08877e394e4b23999bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
