// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/getFirestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhait_elk4mpMteDyYGczOshtJtzRltYc",
    authDomain: "votemap-5fd52.firebaseapp.com",
    projectId: "votemap-5fd52",
    storageBucket: "votemap-5fd52.appspot.com",
    messagingSenderId: "789692588991",
    appId:  "1:789692588991:web:346b60a0a94a9b6972370a",
    measurementId: "G-QY1VVFMVM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseApp
export const db = getFirestore(app);



// export const firebaseAuth = getAuth(firebaseApp);
