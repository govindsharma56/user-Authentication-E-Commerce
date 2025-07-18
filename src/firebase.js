import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSC0reTKbAqpGYz-yJ1MiVfWO7FLu1q1o",
  authDomain: "shopingapp-ca21a.firebaseapp.com",
  projectId: "shopingapp-ca21a",
  storageBucket: "shopingapp-ca21a.firebasestorage.app",
  messagingSenderId: "198579839102",
  appId: "1:198579839102:web:982efa01cfe6337ff2382f",
  measurementId: "G-NX0S141DYB"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}