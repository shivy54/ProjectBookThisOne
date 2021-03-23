import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBcC_wiQ8xkHrVPBqzMR6QKFbiVKA2rk4I",
    authDomain: "projectbook-b4989.firebaseapp.com",
    projectId: "projectbook-b4989",
    storageBucket: "projectbook-b4989.appspot.com",
    messagingSenderId: "925415185557",
    appId: "1:925415185557:web:229a2693e7e8d704008f9c",
    measurementId: "G-SC7HPCPQ9J"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
