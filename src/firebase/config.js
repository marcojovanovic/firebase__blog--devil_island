import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey:  process.env.REACT_APP_API_KEY,
  authDomain: "fir-blog-b5835.firebaseapp.com",
  projectId: "fir-blog-b5835",
  storageBucket: "fir-blog-b5835.appspot.com",
  messagingSenderId: "311062076275",
  appId: "1:311062076275:web:071155a11b97ca40f9c306"
};
 


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp(); // ne treba da pravis posebno polje za timestamp, dodajes ga u ostalo sto ubacujes

// authentication initalizaton 
const auth = firebase.auth()


// firestore initialization
const database = firebase.firestore();


export { database, auth, timestamp};
 

 

 

 