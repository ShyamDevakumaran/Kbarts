const firebaseConfig = {
  apiKey: "AIzaSyBBcxF-mIBLzDk9IprPMZauaP4AlTAmiiY",
  authDomain: "kbartshere.firebaseapp.com",
  projectId: "kbartshere",
  storageBucket: "kbartshere.appspot.com",
  messagingSenderId: "623802605924",
  appId: "1:623802605924:web:40501319dc7b8b02fdda71"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();