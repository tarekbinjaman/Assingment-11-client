// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn2XAPjRvTtg31yW7KQc4CJ-qGyewPF18",
  authDomain: "assingment-11-bd947.firebaseapp.com",
  projectId: "assingment-11-bd947",
  storageBucket: "assingment-11-bd947.firebasestorage.app",
  messagingSenderId: "755646476706",
  appId: "1:755646476706:web:66b2dd472755f8324f42fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Export the app and auth objects
export {app, auth};