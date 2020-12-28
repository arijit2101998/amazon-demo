import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoXNGTdepDAcYPnTLRAM5WGpSVSFeIfZE",
    authDomain: "fir-ef7ee.firebaseapp.com",
    projectId: "fir-ef7ee",
    storageBucket: "fir-ef7ee.appspot.com",
    messagingSenderId: "700059652161",
    appId: "1:700059652161:web:7883be83207cbab662f6c0",
    measurementId: "G-XKW07EMH67"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  export {db, auth};