import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCCVQBAsFCuYaVA3tXXtQcoOmWbycCx1Uo",
  authDomain: "linkedin-clone-c263a.firebaseapp.com",
  projectId: "linkedin-clone-c263a",
  storageBucket: "linkedin-clone-c263a.appspot.com",
  messagingSenderId: "707139309596",
  appId: "1:707139309596:web:c1c8b14ae8fab4dc77cfd9",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
 