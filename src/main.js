import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { createWebHistory, createRouter } from 'vue-router';
import About from './components/About.vue';
import People from './components/People.vue';
import Projects from './components/Projects.vue';
import Home from './components/Home.vue'; 

const routes = [
  {path:'/', name: 'home', component: Home,},
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/people',
    name: 'people',
    component: People,
  },
  {
    path: '/projects',
    name: 'ProjectProject',
    component: Projects,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
});

createApp(App).use(router).mount('#app')

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