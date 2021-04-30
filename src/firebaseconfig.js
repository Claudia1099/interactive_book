import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBaKsvCNztNiHMwVC02BAHBdU7uHs5X-8A",
  authDomain: "interactivebook-62574.firebaseapp.com",
  projectId: "interactivebook-62574",
  storageBucket: "interactivebook-62574.appspot.com",
  messagingSenderId: "691957195353",
  appId: "1:691957195353:web:3e3e4fdf46d177ed134748",
  measurementId: "G-9K8WK7ZPKY"
  };
  // Initialize Firebase
  const fireb = firebase.initializeApp(config);
  const store = fireb.firestore();
  const auth = fireb.auth();
  const storage = fireb.storage();
   export { store, auth, storage };