import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAitklAlB7EwlDXM2oVR02wBojoNqXkndk",
  authDomain: "chat1-90ef1.firebaseapp.com",
  projectId: "chat1-90ef1",
  storageBucket: "chat1-90ef1.appspot.com",
  messagingSenderId: "134966205382",
  appId: "1:134966205382:web:ea8f9a7c868aaf9734b0c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
