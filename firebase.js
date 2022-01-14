// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGCAw77QnaXTNIv_1dSB_6n8oZ_q54SGE",
  authDomain: "profit-31897.firebaseapp.com",
  projectId: "profit-31897",
  storageBucket: "profit-31897.appspot.com",
  messagingSenderId: "294086741564",
  appId: "1:294086741564:web:48642d89afe66d75c07d39"
};

let app;

if (firebase.apps.length === 0) {

  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export default {auth,db};