import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAtaYsNvPUn_cSVym6JZLwa5vd-zmGgV_o",
    authDomain: "photogram-b66cf.firebaseapp.com",
    databaseURL: "https://photogram-b66cf.firebaseio.com",
    projectId: "photogram-b66cf",
    storageBucket: "photogram-b66cf.appspot.com",
    messagingSenderId: "646287108303",
    appId: "1:646287108303:web:7d1fcd2cf0a088a2ea2fba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {projectFirestore,projectStorage,timestamp};