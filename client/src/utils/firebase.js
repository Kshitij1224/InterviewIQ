import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewiq-22b50.firebaseapp.com",
    projectId: "interviewiq-22b50",
    storageBucket: "interviewiq-22b50.firebasestorage.app",
    messagingSenderId: "960543421515",
    appId: "1:960543421515:web:59ab3b9c15ca32b7e389ce"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
