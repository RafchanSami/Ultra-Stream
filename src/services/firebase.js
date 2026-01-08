// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 👉 এখানে তোমার Firebase project config বসাও
const firebaseConfig = {
  apiKey: "AIzaSyDbrU-2BAwvFoMBnLXycU9g4qOqYDY7d4s",
  authDomain: "ultrastream-ddcaa.firebaseapp.com",
  projectId: "ultrastream-ddcaa",
  storageBucket: "ultrastream-ddcaa.firebasestorage.app",
  messagingSenderId: "726622147966",
  appId: "1:726622147966:web:4c4952334f7e105e6ccf2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
