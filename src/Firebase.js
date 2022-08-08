import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCs0nwyV8R8D72OCI5cJUzJnQiDFj5WaOU",
  authDomain: "clone-ba8a3.firebaseapp.com",
  projectId: "clone-ba8a3",
  storageBucket: "clone-ba8a3.appspot.com",
  messagingSenderId: "115700619253",
  appId: "1:115700619253:web:8dba59efd1a89eb70272bc",
  measurementId: "G-9CK76EV2HB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };