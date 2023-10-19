import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBPO1yCgO1U0o4I-RTbAYIxZkdBmakO-zM",
  authDomain: "tinder-clone-306db.firebaseapp.com",
  projectId: "tinder-clone-306db",
  storageBucket: "tinder-clone-306db.appspot.com",
  messagingSenderId: "411029428131",
  appId: "1:411029428131:web:f4d7385b431019307cec16",
  measurementId: "G-G8NSCJWXS0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
