import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA18UrS2BaBcqEzyoQ3OkI20nSI-o7aqaw",
  authDomain: "interactivo-42ed3.firebaseapp.com",
  databaseURL: "https://interactivo-42ed3-default-rtdb.firebaseio.com",
  projectId: "interactivo-42ed3",
  storageBucket: "interactivo-42ed3.appspot.com",
  messagingSenderId: "974161242241",
  appId: "1:974161242241:web:b89a50815be696989c0580",
  measurementId: "G-JJDQK9G3L5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
