import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCz8hQUWUYS1MX6xX72vmmDdYd3UI2eCz8",
    authDomain: "bitsplease-c45fa.firebaseapp.com",
    projectId: "bitsplease-c45fa",
    storageBucket: "bitsplease-c45fa.appspot.com",
    messagingSenderId: "139473920649",
    appId: "1:139473920649:web:ee4ff3c950d51885535c58",
    measurementId: "G-RX3H7WFWGL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  export const db = getFirestore(app);
  export const storage = getStorage(app)