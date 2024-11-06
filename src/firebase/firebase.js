import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyC710C2jqA4qJpMvdhCaWIS9KzyQ4OXP1o",
  authDomain: "bajawebsite-b72fa.firebaseapp.com",
  projectId: "bajawebsite-b72fa",
  storageBucket: "bajawebsite-b72fa.appspot.com",
  messagingSenderId: "1063835977642",
  appId: "1:1063835977642:web:6a39565daa3cd0e0c04dd3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(auth, provider);

export { auth, db, storage, signInWithGoogle };