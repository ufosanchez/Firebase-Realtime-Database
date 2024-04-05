  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { 
    getDatabase, 
    ref, 
    child, 
    get, 
    onValue 
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD04bZ0yu-dVSGiLMDmgt_unKSSL6WbUwk",
    authDomain: "testfirebase-fd33d.firebaseapp.com",
    databaseURL: "https://testfirebase-fd33d-default-rtdb.firebaseio.com",
    projectId: "testfirebase-fd33d",
    storageBucket: "testfirebase-fd33d.appspot.com",
    messagingSenderId: "74003639369",
    appId: "1:74003639369:web:b4ec63c762e84ab772e398"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = getDatabase();

  const messages = ref(database, '/messages');

  onValue(messages, (snapshot) => {

    //console.log(snapshot);

    const ul = document.getElementById("messages");

    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {

      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      const text = document.createTextNode(`From: ${childData.name} → ${childData.message}`);
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);

    });

  }, {

    onlyOnce: false

  }
  )