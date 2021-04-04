import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqvQajj0mq4yDwVHgpyn6i57j06jwZB10",
    authDomain: "interactivebook-d25b0.firebaseapp.com",
    projectId: "interactivebook-d25b0",
    storageBucket: "interactivebook-d25b0.appspot.com",
    messagingSenderId: "646095005427",
    appId: "1:646095005427:web:49487e6e9d3db0c43bb986",
    measurementId: "G-70FJ0J7KXP"
  };
  // Initialize Firebase
  const fireb = firebase.initializeApp(config);
  const store = fireb.firestore();
  const auth = fireb.auth();
   export { store, auth };