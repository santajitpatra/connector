import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDAKBzHZhmqviyoD9LgzPFpLJhtOwwezCc",
  authDomain: "connector-23791.firebaseapp.com",
  projectId: "connector-23791",
  storageBucket: "connector-23791.appspot.com",
  messagingSenderId: "106919419930",
  appId: "1:106919419930:web:602558dc67e1eacecff1a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const db = getFirestore(app);

export { app , storage, storageRef, db };
