import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


createApp(App).mount('#app')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDncLIPgxne5pqcBq3-EfXdDSoVZn-SQ-E",
    authDomain: "jaded-water-webpage.firebaseapp.com",
    projectId: "jaded-water-webpage",
    storageBucket: "jaded-water-webpage.appspot.com",
    messagingSenderId: "1035811798897",
    appId: "1:1035811798897:web:96c9ab9df4730c5e6140d0",
    measurementId: "G-2FC375NP0R"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);