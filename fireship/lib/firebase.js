import "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx9Gdpc4dCNtJv1BHciR6RBFFvb6pTgPo",
  authDomain: "fireship-d878f.firebaseapp.com",
  projectId: "fireship-d878f",
  storageBucket: "fireship-d878f.appspot.com",
  messagingSenderId: "493665060383",
  appId: "1:493665060383:web:9c82c6292c37ce48ff372a",
  measurementId: "G-C95GEVK4SH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
