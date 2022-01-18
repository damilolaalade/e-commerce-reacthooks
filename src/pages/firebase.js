import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAX8qS2pcMktQ-ReZAfGjbwQqFF9LLToR4",
  authDomain: "tiannah-e-commerce.firebaseapp.com",
  projectId: "tiannah-e-commerce",
  storageBucket: "tiannah-e-commerce.appspot.com",
  messagingSenderId: "201332941124",
  appId: "1:201332941124:web:653c223fd76481753e7711",
  measurementId: "G-WNE2BX5VG8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
