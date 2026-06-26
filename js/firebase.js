  const firebaseConfig = {
    apiKey: "AIzaSyB8i7IeAKDiBgpvJPcS5g87l4OsC1fsGP4",
    authDomain: "ubereatsceduce.firebaseapp.com",
    projectId: "ubereatsceduce",
    storageBucket: "ubereatsceduce.firebasestorage.app",
    messagingSenderId: "638011617628",
    appId: "1:638011617628:web:c83e2b803ee9c908b51199"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();