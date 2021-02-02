import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyApI74nKyNK5KEhkTt8iZ0Xj-gVffyplZQ",
  authDomain: "firegram-a9f0e.firebaseapp.com",
  projectId: "firegram-a9f0e",
  storageBucket: "firegram-a9f0e.appspot.com",
  messagingSenderId: "760409561760",
  appId: "1:760409561760:web:ec623111fd873da16f87c5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
