// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxHCtQudi7ZG-9Q-Ccz3Xg-iyu6jc8k1I",
  authDomain: "vue-firebase9-auth.firebaseapp.com",
  projectId: "vue-firebase9-auth",
  storageBucket: "vue-firebase9-auth.appspot.com",
  messagingSenderId: "807208044851",
  appId: "1:807208044851:web:d51b8ec30585ed9b225646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }