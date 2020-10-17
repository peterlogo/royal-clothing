import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs6pUhkl_p4jmeE-n5qMgLQZTf8lmS99Q",
  authDomain: "royal-crwn-db.firebaseapp.com",
  databaseURL: "https://royal-crwn-db.firebaseio.com",
  projectId: "royal-crwn-db",
  storageBucket: "royal-crwn-db.appspot.com",
  messagingSenderId: "416319001411",
  appId: "1:416319001411:web:4ae7e56e8fc4faf6c755f6",
  measurementId: "G-SFVKL0680L",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.firestore();

/**
 * Google account authentication
 * set up.
 */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

/**
 * Initialises the pop for google account
 * authentication.
 */
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { auth, storage, signInWithGoogle };
export default firebase;
