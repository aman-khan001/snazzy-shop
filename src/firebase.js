// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC7ROpWPZitTNE0ETDlBC4Iyq_VQ9bFZg",
  authDomain: "snazzy-shop.firebaseapp.com",
  projectId: "snazzy-shop",
  storageBucket: "snazzy-shop.firebasestorage.app",
  messagingSenderId: "478789320264",
  appId: "1:478789320264:web:2eb5ea3576f15be3f5e27d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);