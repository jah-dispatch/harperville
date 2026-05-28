// Import the Firebase SDK modules from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// PASTE YOUR EXACT FIREBASE CONFIG OBJECT HERE FROM STEP 1
const firebaseConfig = {
  apiKey: "AIzaSyDT9oH9Viddedfi06aCTibBknaIRU6nstQ",
  authDomain: "harperville-thought-box.firebaseapp.com",
  projectId: "harperville-thought-box",
  storageBucket: "harperville-thought-box.firebasestorage.app",
  messagingSenderId: "444340361399",
  appId: "1:444340361399:web:e073a9c43548ab2e829532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup, signOut };