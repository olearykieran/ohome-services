// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfONG32vDD_75SBggNzxr9shBZ1mJe_f0",
  authDomain: "ohome-services.firebaseapp.com",
  projectId: "ohome-services",
  storageBucket: "ohome-services.appspot.com",
  messagingSenderId: "608207308224",
  appId: "1:608207308224:web:70a8c2f014b637b05d3425",
  measurementId: "G-7PFNFVRK1Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
