import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCdjQUZeOaM1JV4jLLEZQtZ48k0AzoadOk",
  authDomain: "fir-auth-77687.firebaseapp.com",
  projectId: "fir-auth-77687",
  storageBucket: "fir-auth-77687.appspot.com",
  messagingSenderId: "76976034151",
  appId: "1:76976034151:web:6ccf20eb0dd01a357e5fc2",
  measurementId: "G-4906DVYQGV"
};
// Initialize Firebase
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const auth=firebaseapp.auth();
  const db=firebaseapp.firestore();
  db.settings({timestampsInSnapshots:true});
  // console.log("auth",auth);
  // console.log("firestore",db);

  export {auth,db}