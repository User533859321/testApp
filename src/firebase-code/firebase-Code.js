// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBM-h_7Yqj3htWgD-TGiqWMah80CrAugQ4",
 authDomain: "chatapp-a7bd5.firebaseapp.com",
 projectId: "chatapp-a7bd5",
 storageBucket: "chatapp-a7bd5.appspot.com",
 messagingSenderId: "994185590333",
 appId: "1:994185590333:web:5a29d493429f565412dc54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

export function writeUserData(userId, name) {
 set(ref(database, 'users/' + userId), {
 username: name
 });
 console.log("Hi")
}
