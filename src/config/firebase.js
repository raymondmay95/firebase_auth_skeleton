import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
});

// this gives us the authentication instance
export const auth = app.auth();
//TODO: may add scope to this in future!!! scope and parameters can be added with .addscope() || .setCustomParameters({})
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default app;