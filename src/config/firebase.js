// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBxAKdaZN07MTGieocoPG0ntsjEo6sJbY",
  authDomain: "pokemon-firebase-7a1ef.firebaseapp.com",
  projectId: "pokemon-firebase-7a1ef",
  storageBucket: "pokemon-firebase-7a1ef.firebasestorage.app",
  messagingSenderId: "156607151549",
  appId: "1:156607151549:web:e11812ebc6aebeccf3e6d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)