import firebase from "firebase/app";
import "firebase/database";

// Secrets hardcoded for ease of use in Digitalent application process.
var config = {
  apiKey: "AIzaSyCFEykiQm1qGOjjY0JVIUkojxCSxGWZ_8c",
  authDomain: "todo-digitalent.firebaseapp.com",
  projectId: "todo-digitalent",
  storageBucket: "todo-digitalent.appspot.com",
  messagingSenderId: "600278323893",
  appId: "1:600278323893:web:382fca63487a1c6bcc24fc",
  databaseURL:
    "https://todo-digitalent-default-rtdb.europe-west1.firebasedatabase.app/",
};

const fire = firebase.initializeApp(config);
export default fire;
