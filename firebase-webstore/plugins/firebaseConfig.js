// plugins/firebaseConfig.js
import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyBlkhjVEhbduHk3Q2XL7fAHysF6RIUE4F8",
        authDomain: "passion-project-6a802.firebaseapp.com",
        projectId: "passion-project-6a802",
        storageBucket: "passion-project-6a802.appspot.com",
        messagingSenderId: "313988600568",
        appId: "1:313988600568:web:c08ac0aa764d985638610d"
    };


    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    nuxtApp.provide("db", db);
    nuxtApp.provide("auth", auth);
    
});
