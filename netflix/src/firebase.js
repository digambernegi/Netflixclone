import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDArGpXvb8B8b8cLlR5x8xtGVGEs1jpEOk",
  authDomain: "netflix-d2f59.firebaseapp.com",
  projectId: "netflix-d2f59",
  storageBucket: "netflix-d2f59.appspot.com",
  messagingSenderId: "903466175280",
  appId: "1:903466175280:web:c3f6b8b077339bf80216f5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); /* firestore is database */
const auth = firebase.auth();

export { auth };
export default db;
