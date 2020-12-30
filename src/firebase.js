import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBup11MptVr1zcX5aq9dXcZFr_-kc7BxEc",
  authDomain: "movie-app-54a42.firebaseapp.com",
  databaseURL: "https://movie-app-54a42.firebaseio.com",
  projectId: "movie-app-54a42",
  storageBucket: "movie-app-54a42.appspot.com",
  messagingSenderId: "961038764678",
  appId: "1:961038764678:web:1da0f27ccba467ad031f07",
  measurementId: "G-MZMCHQTS0H"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
 const db = firebaseApp.firestore();
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()
 
 export { auth, provider}
 export default db; 