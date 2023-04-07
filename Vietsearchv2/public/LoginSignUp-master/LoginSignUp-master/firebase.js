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

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  console.log(email, password);

  createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        email: email,
        password: password,
        action: "Signup",
      });

      alert("User created successfully!");
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        email: email,
        password: password,
        lastLogin: dt.toUTCString(),
        action: "Login",
      });

      alert("User logged in successfully!");
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
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

});
