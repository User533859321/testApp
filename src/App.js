import './App.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from 'react';

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

// Get a reference to the database
const database = getDatabase();

export function writeIPaddr(ip) {
  let ipVar = ip.toString();
  ipVar = ipVar.replace(/\./g, "_");
  set(ref(database, 'ips/' + ipVar), {
    addr: ipVar
  });
 }

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => writeIPaddr(data.ip));


export function writeUserData(userId, name, ip) {
  let ipVar = ip.toString();
  ipVar = ipVar.replace(/\./g, "_");
  set(ref(database, 'users/' + userId), {
    username: name,
    ipAddress: ipVar
  });
 }

function App() {
 const [username, setUsername] = useState("");
 const [name, setName] = useState("");

 const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the form from refreshing the page
  console.log('Form submitted');
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => writeUserData(username, name, data.ip))
  };
 
 return (
 <form className="App" onSubmit={handleSubmit}>
   <h1>Hello</h1>
   <h2>Input username and name for test confirmation</h2>
   <label htmlFor="username">Username:</label>
   <input type="text" id="username" className="usr" value={username} onChange={e => setUsername(e.target.value)}/>
   <label htmlFor="name">Name:</label>
   <input type="text" id="name" className="name" value={name} onChange={e => setName(e.target.value)}/>
   <button type="submit">Submit</button>
   {/* Rest of your component */}
 </form>
 );
 }

 export default App;
