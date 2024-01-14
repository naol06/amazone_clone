// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD60qo8mTHHBgEuDvVijM8DicljjNgYJTk",
  authDomain: "e-clone-d6057.firebaseapp.com",
  projectId: "e-clone-d6057",
  storageBucket: "e-clone-d6057.appspot.com",
  messagingSenderId: "814795134179",
  appId: "1:814795134179:web:b21d923052bf0b80daa1d6",
  measurementId: "G-4HXK1W6QEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);