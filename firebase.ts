import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg37PqLt3WY3vB1n53qEy0XlkmHnQWxY4",
  authDomain: "chatgpt-clone-f2156.firebaseapp.com",
  projectId: "chatgpt-clone-f2156",
  storageBucket: "chatgpt-clone-f2156.appspot.com",
  messagingSenderId: "468938599978",
  appId: "1:468938599978:web:db1b8cde2a17ed33269d53",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
