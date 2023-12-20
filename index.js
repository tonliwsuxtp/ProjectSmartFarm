import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyA6cflnkxuLeq5nB-2jHJ8G2y3Uojw4d1A",
    authDomain: "agrosphere-d3296.firebaseapp.com",
    databaseURL: "https://agrosphere-d3296-default-rtdb.firebaseio.com",
    projectId: "agrosphere-d3296",
    storageBucket: "agrosphere-d3296.appspot.com",
    messagingSenderId: "743423423188",
    appId: "1:743423423188:web:85e271c9797c2695300141",
    measurementId: "G-M79JVVPEJ1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const from = document.getElementById("form-outline")
  

  from.addEventListener("submit", (e)=> {
    e.preventDefault()
    console.log(form.Username.value)
  })
