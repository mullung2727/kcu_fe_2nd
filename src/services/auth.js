import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export async function login(email, password) {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    return cred.user;
  } catch(err) {
    console.error(err)
    throw err;
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err)
    throw err;
  }
}

export function onAuthStateChange(callback) {
  return onAuthStateChanged(auth, callback)
}