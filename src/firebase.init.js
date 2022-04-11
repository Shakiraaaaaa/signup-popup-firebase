// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEWkpU41rmGF2XR-J9vKNw7an5IwEWWsk",
    authDomain: "fir-practice-c1271.firebaseapp.com",
    projectId: "fir-practice-c1271",
    storageBucket: "fir-practice-c1271.appspot.com",
    messagingSenderId: "198431994672",
    appId: "1:198431994672:web:3798b05893e592112e4ef5",
    measurementId: "G-1Q9MEKQ8EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;