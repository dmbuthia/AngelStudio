// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnlMAh2yihoLLvspnBgDT4fgrjPRUfBwg",
  authDomain: "angelstudio-92a38.firebaseapp.com",
  projectId: "angelstudio-92a38",
  storageBucket: "angelstudio-92a38.appspot.com",
  messagingSenderId: "89250045148",
  appId: "1:89250045148:web:47c40888552ddfeae46819",
  measurementId: "G-DLHPZ04BE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app ;