
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOTcZL3g_TS3aZ-JtbPuMw7WJEivPW0i8",
  authDomain: "vue-firebase-test-7404a.firebaseapp.com",
  projectId: "vue-firebase-test-7404a",
  storageBucket: "vue-firebase-test-7404a.appspot.com",
  messagingSenderId: "240431790898",
  appId: "1:240431790898:web:9177b6136423434ef6752b",
  measurementId: "G-RMVYFT7QCS"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export { getAuth , signInWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
// /**
//  * Save a New Task in Firestore
//  * @param {string} nombre the title of the Task
//  * @param {string} email the description of the Task
//  * 
//  */
export const saveInfo = (nombre,email,apellido,telefono,area,fecha,hora) =>
  addDoc(collection(db, "informacion"), { nombre,email,apellido,telefono,area , fecha , hora});

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "informacion"), callback);

/**
 *
 * @param {string} id Task ID
 */

export const getTask = (id) => getDoc(doc(db, "informacion", id));

export const getTasks = () => getDocs(collection(db, "informacion"));
