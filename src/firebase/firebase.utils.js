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

/**
 * Creates a user profile in the firebase
 * database.
 * @param {object} userAuth
 * @param {object} additionalData
 * @returns {object} the authenticated
 * user information.
 */
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = storage.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // checks if there is data in the firebase storage.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export { auth, storage, signInWithGoogle, createUserProfileDocument };
export default firebase;
