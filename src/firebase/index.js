import firebase from "firebase";
import config from "./firebase.config";

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth;

export async function signInFirebaseWithEmail() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

export function signUpWithEmail(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
}

export function Logout() {
  return auth().signOut();
}