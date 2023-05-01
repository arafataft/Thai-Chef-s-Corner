// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9F_IFmIqS0Vi2gIulgC7XAmaXl1a54-I",
  authDomain: "thai-chef-recipe.firebaseapp.com",
  projectId: "thai-chef-recipe",
  storageBucket: "thai-chef-recipe.appspot.com",
  messagingSenderId: "533059926589",
  appId: "1:533059926589:web:9c0eb72b9e538fa02f8854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;