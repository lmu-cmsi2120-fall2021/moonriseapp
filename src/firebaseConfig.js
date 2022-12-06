import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPvxwT-hFNufnFhT8XUPz2ZGwv-04NaLA",
  authDomain: "moonriseapp-bb149.firebaseapp.com",
  projectId: "moonriseapp-bb149",
  storageBucket: "moonriseapp-bb149.appspot.com",
  messagingSenderId: "1003576353584",
  appId: "1:1003576353584:web:846904767e03d20c849ef5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);