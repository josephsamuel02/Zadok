// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { GithubAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGtiNwGvB-o5tiuWJ14WYPClhXNSyH7bk",
  authDomain: "dm-auto-company-ltd-7bed4.firebaseapp.com",
  projectId: "dm-auto-company-ltd-7bed4",
  storageBucket: "dm-auto-company-ltd-7bed4.appspot.com",
  messagingSenderId: "822931146548",
  appId: "1:822931146548:web:9af16eacccbb4968c74761",
  measurementId: "G-W451WNL87M",
};
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);

// export const Auth = getAuth();
// export const googleAuthProvider = new GithubAuthProvider();
export default app;
