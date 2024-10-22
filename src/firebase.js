import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Rt3cWcvDkB_nRNddjQwaDQmDuXoVK_A",
  authDomain: "clone-3dcb7.firebaseapp.com",
  projectId: "clone-3dcb7",
  storageBucket: "clone-3dcb7.appspot.com",
  messagingSenderId: "390757303716",
  appId: "1:390757303716:web:169aab987120f79629ad31",
  measurementId: "G-YGS72RKTK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();