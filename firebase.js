// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl3yavIlnA9yO6TgYYOlwxUQYHDosAXF4",
  authDomain: "uber-next-clone-df78c.firebaseapp.com",
  projectId: "uber-next-clone-df78c",
  storageBucket: "uber-next-clone-df78c.appspot.com",
  messagingSenderId: "484388490942",
  appId: "1:484388490942:web:9269330e1b1427a3fe18ef",
  measurementId: "G-H57P4K08PQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
