import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAqZGDjJ-eqp49mf9Z2gRCK4-bv54Khai8",
  authDomain: "goelec-product-images.firebaseapp.com",
  projectId: "goelec-product-images",
  storageBucket: "goelec-product-images.appspot.com",
  messagingSenderId: "1322113041",
  appId: "1:1322113041:web:24cea707eed9e6cde839b0",
  measurementId: "G-W4C3CGJDEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
