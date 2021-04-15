import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAB2pXKMb9HGRCG9EGFoWsbpuAkRy60GyI",
  authDomain: "nextfire-426d4.firebaseapp.com",
  projectId: "nextfire-426d4",
  storageBucket: "nextfire-426d4.appspot.com",
  messagingSenderId: "25410041177",
  appId: "1:25410041177:web:24ea460c95b12be7b2c848",
  measurementId: "G-4QS6JJGRD2",
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();