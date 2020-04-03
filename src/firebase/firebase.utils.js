import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyAsYb0CPfw0FkHIt_M96P3SVmPPg5Ytij0",
    authDomain: "react-eccomerce-db.firebaseapp.com",
    databaseURL: "https://react-eccomerce-db.firebaseio.com",
    projectId: "react-eccomerce-db",
    storageBucket: "react-eccomerce-db.appspot.com",
    messagingSenderId: "1093029880563",
    appId: "1:1093029880563:web:002e6647cc7b213fc64d86",
    measurementId: "G-BSQJY5GL6G"
  };
  firebase.initializeApp(config)
  export const auth=firebase.auth();
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;