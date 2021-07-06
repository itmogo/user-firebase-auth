import firebase from './firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDlF-3r1jD5fzeVYgX17lcK7sxPTWBFWYE",
    authDomain: "users-app-e8f36.firebaseapp.com",
    projectId: "users-app-e8f36",
    storageBucket: "users-app-e8f36.appspot.com",
    messagingSenderId: "805995578642",
    appId: "1:805995578642:web:d8fdbf62f95b9feb141fcb",
    measurementId: "G-LVRJJS2GL5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;