import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx9Gdpc4dCNtJv1BHciR6RBFFvb6pTgPo",
  authDomain: "fireship-d878f.firebaseapp.com",
  projectId: "fireship-d878f",
  storageBucket: "fireship-d878f.appspot.com",
  messagingSenderId: "493665060383",
  appId: "1:493665060383:web:9c82c6292c37ce48ff372a",
  measurementId: "G-C95GEVK4SH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

export const storage = firebase.storage();

export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
/// helper functions
/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
