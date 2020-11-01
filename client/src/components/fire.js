import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB47yZVT6Sw4lkkwzFWSorG-ZMYDXM0ESE",
    authDomain: "hackathon-3a277.firebaseapp.com",
    databaseURL: "https://hackathon-3a277.firebaseio.com",
    projectId: "hackathon-3a277",
    storageBucket: "hackathon-3a277.appspot.com",
    messagingSenderId: "58565246275",
    appId: "1:58565246275:web:e7369ea2c2c4a42c3803f6"
  };
  // Initialize Firebase

  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;