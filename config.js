import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCYePdBn40QF_MFsnxYsZX4cwZqe0DMJaE",
    authDomain: "browserapp-caa56.firebaseapp.com",
    projectId: "browserapp-caa56",
    storageBucket: "browserapp-caa56.appspot.com",
    messagingSenderId: "358313643165",
    appId: "1:358313643165:web:b04736bbc6181e9249d874"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore ;