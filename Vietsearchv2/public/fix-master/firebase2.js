import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCO8HLy1JHL4wvkguQQtBE4NBZynxQ0pDs",
  authDomain: "vietsearch-team19.firebaseapp.com",
  databaseURL:
  "https://vietsearch-team19-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vietsearch-team19",
  storageBucket: "vietsearch-team19.appspot.com",
  messagingSenderId: "31988883890",
  appId: "1:31988883890:web:3aba4cb5390683831c84ab",
  measurementId: "G-H2CYHFR2PK"
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth();

const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = contactForm["first-name"].value;
  const lastName = contactForm["last-name"].value;
  const email = contactForm["contact-email"].value;
  const message = contactForm["contact-message"].value;
  const name = firstName + " " + lastName;
  const date=new Date();
  console.log(name, email, message,date);

  set(ref(database, "contact/" + name), {
    name: name,
    email: email,
    message: message,
    sent:date.toUTCString()
  });
  alert("Message sent successfully!");
});

