// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth"; 
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOvEiVZKgknbauDkDWFMl5kbk1VFstTFc",
  authDomain: "blogs-ritikahotwani.firebaseapp.com",
  projectId: "blogs-ritikahotwani",
  storageBucket: "blogs-ritikahotwani.appspot.com",
  messagingSenderId: "895067079149",
  appId: "1:895067079149:web:9f838f37027127ac8267e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 

export const db = getFirestore(app);
 //conn to db
export const storage=getStorage(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();