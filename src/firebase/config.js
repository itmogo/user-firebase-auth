import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDWbpztaamxTp87SRDB67mDSm0EBdB9Lqo",
  authDomain: "user-firebase-bd4e1.firebaseapp.com",
  projectId: "user-firebase-bd4e1",
  storageBucket: "user-firebase-bd4e1.appspot.com",
  messagingSenderId: "779440967267",
  appId: "1:779440967267:web:cc8a7a61c781dd0f813256",
  measurementId: "G-15YB5SS62P"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;