// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3IrGSn5NrBZCyD2vDm-XMvKybD8pW8Yc",
  authDomain: "auth-poke-api.firebaseapp.com",
  projectId: "auth-poke-api",
  storageBucket: "auth-poke-api.appspot.com",
  messagingSenderId: "688108602597",
  appId: "1:688108602597:web:99d9baba7170e971c9400c"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const auth = getAuth();
export { auth}