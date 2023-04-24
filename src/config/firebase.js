import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAL8e7CY_dWHdbc_7bG86oK_IT-tYA5ZI8",
  authDomain: "aulafirebase-9613a.firebaseapp.com",
  projectId: "aulafirebase-9613a",
  storageBucket: "aulafirebase-9613a.appspot.com",
  messagingSenderId: "858458664182",
  appId: "1:858458664182:web:1e8cde8dc062acea3710d7",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


