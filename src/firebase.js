import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmOOuDrShiHTCaGr6bEluumIofhJE-gp0",
  authDomain: "snapchat-clone-6eaf8.firebaseapp.com",
  projectId: "snapchat-clone-6eaf8",
  storageBucket: "snapchat-clone-6eaf8.appspot.com",
  messagingSenderId: "80212413701",
  appId: "1:80212413701:web:c2db654315389d1d8dbb6c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
